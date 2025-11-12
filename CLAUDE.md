# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Install dependencies**: `bun install`
- **Run development server**: `bun dev` (runs on <http://localhost:8080>)
- **Build for production**: `bun run build` (also runs type checking)
- **Start production server**: `bun start` (runs `.output/server/index.mjs` on port 8080)
- **Lint code**: `bun run lint` (runs ESLint with auto-fix)
- **Type check**: `bun ts:check` (runs TypeScript compiler without emitting files)

## Architecture Overview

### TanStack Start Framework

This project uses **TanStack Start** (formerly TanStack Router), a full-stack React framework built on TanStack Router. Key characteristics:

- **File-based routing**: Routes are defined in the `app/` directory
  - `app/__root.tsx`: Root layout component with theme loader
  - `app/index.tsx`: Home page (`/`)
  - `app/journal.tsx`: Journal page (`/journal`) with authentication
  - `app/resume.tsx`: Resume page (`/resume`)
  - `app/$$.tsx`: 404 catch-all route
  - Special route syntax: `sitemap[.]xml.ts`, `robots[.]txt.ts` for static files

- **Server functions**: Use `createServerFn()` from `@tanstack/react-start` for server-side operations
  - Defined in `src/helpers/server/ServerFunctions.ts`
  - Examples: `getTheme()`, `isJournalAuthenticated()`, `getJournalEntry()`

- **Route metadata**: Use `head` property in routes for SEO meta tags and links
  - Helper functions in `src/helpers/client/MetadataHelper.ts`

- **API routes**: Located in `app/api/` directory
  - Use `createFileRoute().server.handlers` pattern
  - Example: `app/api/sharex.ts` handles POST requests for file uploads

### Configuration Architecture

Two separate config files with distinct purposes:

- **`src/Config.ts`**: Client-safe configuration (app name, URLs, social links, meta info)
  - Can be imported on both client and server

- **`src/helpers/Config.ts`**: Server-only configuration (reads from environment variables)
  - Contains secrets like `SHAREX_SECRET`, `JOURNAL_COOKIE_PASSWORD`
  - Never import this in client-side code

### Routing & Code Generation

- **Route tree**: Auto-generated at `src/routeTree.gen.ts` by TanStack Router plugin
- **Router setup**: `src/router.tsx` exports `getRouter()` function
- **Path aliases**: Use `@/*` for imports (maps to project root via `tsconfig.json` and `vite-tsconfig-paths`)

### Helpers Organization

- **`src/helpers/client/`**: Client-side utilities (theme, toast notifications, metadata)
- **`src/helpers/server/`**: Server-side utilities (file system, logging, string operations, schema)
- **`src/helpers/shared/`**: Shared utilities (date formatting)

### Key Features

1. **Theme System**:
   - Cookie-based theme persistence
   - Server-side theme detection in `__root.tsx` loader
   - Theme state managed with Jotai atoms (`src/atoms/ThemeAtom.ts`)

2. **Journal System**:
   - Protected by cookie authentication
   - Entries stored in `entries/YYYY/MM/YYYY-MM-DD.txt` format
   - Server functions handle authentication and file operations

3. **ShareX Integration**:
   - POST endpoint at `/api/sharex`
   - Uploads files to `files/` directory with random 8-character filenames
   - Requires `SHAREX_SECRET` authentication

4. **Logging**:
   - Uses Pino logger (`src/helpers/server/Logger.ts`)
   - Logs written to `logs/` directory (must exist)

### Build & Deployment

- **Vite + Nitro**: Uses Vite for bundling, Nitro preset for Node.js server
- **Docker**: Multi-stage build (see `Dockerfile`)
  - Base: `oven/bun:1.2`
  - Runs type checking and build
  - Production image only includes `.output/` and `node_modules/`

### Data Management

- **Project data**: Stored in `src/data.json` (resume, projects, skills, contacts)
- **Redirects**: Configured in `src/redirects.json`

## Code Style & Linting

Strict ESLint configuration with:

- TypeScript rules: explicit return types, no floating promises, await thenable
- Stylistic rules: 4-space indentation, double quotes, semicolons required
- No relative imports (use `@/` prefix)
- React hooks rules enforced
- Security plugin enabled

## Environment Setup

Required `.env` variables:

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

Required directories:

- `logs/` - for Pino logger output
- `files/` - for ShareX uploads
- `entries/` - for journal entries (auto-created with nested year/month structure)
