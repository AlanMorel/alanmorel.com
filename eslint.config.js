import { FlatCompat } from "@eslint/eslintrc";
import stylistic from "@stylistic/eslint-plugin";
import typeScriptESLint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";
import relative from "eslint-plugin-no-relative-import-paths";
import perfectionist from "eslint-plugin-perfectionist";
import prettier from "eslint-plugin-prettier";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import security from "eslint-plugin-security";
import sonarjs from "eslint-plugin-sonarjs";
import tailwindcss from "eslint-plugin-tailwindcss";
import globals from "globals";

const compat = new FlatCompat();

export default [
    {
        ignores: [".next", "**.js"]
    },
    ...compat.extends("plugin:@typescript-eslint/eslint-recommended"),
    {
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: true
            },
            globals: {
                ...globals.browser,
                ...globals.node,
                JSX: true
            }
        },
        plugins: {
            "@typescript-eslint": typeScriptESLint,
            "@stylistic": stylistic,
            security: security,
            prettier: prettier,
            "no-relative-import-paths": relative,
            tailwindcss,
            sonarjs,
            perfectionist,
            react,
            import: importPlugin,
            "react-hooks": reactHooks
        },
        settings: {
            react: {
                version: "detect"
            }
        },
        rules: {
            ...typeScriptESLint.configs.recommended.rules,
            //...stylistic.configs.recommended.rules,
            ...security.configs.recommended.rules,
            ...prettier.configs.recommended.rules,
            //...relative.configs.recommended.rules,
            ...tailwindcss.configs.recommended.rules,
            ...sonarjs.configs.recommended.rules,
            //...perfectionist.configs.recommended.rules,
            ...react.configs.recommended.rules,
            //...importPlugin.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            "react/react-in-jsx-scope": "off",
            "react/self-closing-comp": [
                "error",
                {
                    component: true,
                    html: false
                }
            ],
            "no-console": "warn",
            "no-debugger": "warn",
            "no-case-declarations": "off",
            "prefer-template": "error",
            "no-undef": "error",
            "no-prototype-builtins": "warn",
            "@stylistic/no-trailing-spaces": "error",
            "@stylistic/eol-last": "error",
            "@stylistic/quotes": [
                "error",
                "double",
                {
                    avoidEscape: true,
                    allowTemplateLiterals: true
                }
            ],
            "@stylistic/semi": "error",
            "@stylistic/indent": [
                "error",
                4,
                {
                    SwitchCase: 1
                }
            ],
            "@stylistic/padding-line-between-statements": ["error", { blankLine: "always", prev: "*", next: "export" }],
            "@typescript-eslint/explicit-function-return-type": "error",
            "@typescript-eslint/no-inferrable-types": "off",
            "@typescript-eslint/explicit-member-accessibility": "error",
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/no-unused-vars": [
                "warn",
                {
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_"
                }
            ],
            "@typescript-eslint/no-floating-promises": ["error"],
            "@typescript-eslint/await-thenable": "error",
            "prettier/prettier": "error",
            "no-relative-import-paths/no-relative-import-paths": [
                "error",
                {
                    prefix: "@"
                }
            ],
            "sonarjs/max-switch-cases": "warn",
            "sonarjs/pseudo-random": "warn",
            "tailwindcss/no-custom-classname": "warn",
            "tailwindcss/enforces-shorthand": "error",
            "tailwindcss/migration-from-tailwind-2": "error"
        }
    }
];
