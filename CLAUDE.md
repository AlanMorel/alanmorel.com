# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 personal website built with TypeScript, React 19, and Tailwind CSS 4. The site uses the Next.js App Router and includes features like a resume page, photography portfolio, project showcase, and a private journal system.

## Package Manager

This project uses **Bun** as its package manager. Always use `bun install` instead of `npm install`.

## Common Commands

```bash
# Development
bun run dev              # Start dev server on port 8080
bun run turbo            # Start dev server with Turbo mode

# Building
bun run build            # Build production bundle
bun run start            # Start production server on port 8080

# Linting & Type Checking
bun run lint             # Run Next.js lint + ESLint with auto-fix
bun run ts:check         # Run TypeScript compiler checks (no emit)
```

## Project Structure

### Directory Organization

- `app/` - Next.js App Router pages and API routes
  - `api/journal/` - Journal fetch/save endpoints
  - `api/sharex/` - ShareX upload endpoint
  - `files/[slug]/` - Dynamic file serving route
- `src/` - Application source code
  - `atoms/` - Jotai state management (theme, modals)
  - `components/` - React components organized by feature
  - `helpers/` - Utility functions split by environment:
    - `client/` - Client-side only utilities
    - `server/` - Server-side only utilities (Next.js server components)
    - `shared/` - Isomorphic utilities
  - `data.json` - Static site content (projects, resume, etc.)
  - `Config.ts` - App configuration constants
- `public/` - Static assets (images, favicons, manifest.json)

### Import Paths

The project uses TypeScript path mapping with `@/` prefix for absolute imports:
```typescript
import config from "@/src/Config.ts";
import { ThemeState } from "@/src/atoms/ThemeAtom.ts";
```

ESLint enforces this - relative imports are not allowed (`no-relative-import-paths` rule).

## Code Style & Linting

### TypeScript Requirements

- **Explicit return types required** on all functions (`@typescript-eslint/explicit-function-return-type`)
- **Explicit member accessibility required** on class members (`@typescript-eslint/explicit-member-accessibility`)
- Use double quotes (enforced by `@stylistic/quotes`)
- 4-space indentation (enforced by `@stylistic/indent`)
- Always include semicolons (enforced by `@stylistic/semi`)
- File extensions must be included in imports (`.ts`, `.tsx`)

### Security

ESLint includes security plugin rules. Be mindful of:
- XSS vulnerabilities
- Command injection
- SQL injection (though this project doesn't use SQL directly)

The Next.js config includes strict CSP headers and security headers.

## State Management

- **Jotai** is used for global state management
- Current atoms:
  - `ThemeAtom.ts` - Light/dark theme state (persisted in cookies)
  - `ModalAtom.tsx` - Modal visibility state

## Styling

- **Tailwind CSS 4** with custom configuration
- PostCSS for processing
- Prettier with Tailwind plugin for class sorting
- Uses `clsx` and `tailwind-merge` for conditional classes (see utility function pattern)

## Environment Setup

Required `.env` file structure:
```env
VERSION=0
NODE_ENV=development
PORT=8080
TZ=America/New_York

SHAREX_SECRET=
JOURNAL_START_DATE=
JOURNAL_COOKIE_NAME=
JOURNAL_COOKIE_PASSWORD=
```

A `logs/` directory must exist at the project root for logging.

## Key Patterns

### Server vs Client Code

The codebase strictly separates server and client code:
- Components in `app/` may use server components (async functions)
- Client-side interactions require `"use client"` directive
- Helpers are organized by environment (`client/`, `server/`, `shared/`)

### Metadata Generation

Use `withMetadata()` helper from `@/src/helpers/server/MetadataHelper.ts` for consistent SEO metadata across pages.

### Theming

Theme is managed server-side via cookies and client-side via Jotai. Initial theme is read from cookies in `app/layout.tsx` and passed to providers.

## Git Workflow

- **Conventional Commits** enforced via commitlint
- **Husky** pre-commit hooks run lint-staged
- Lint-staged runs Prettier and ESLint on TypeScript files before commit
