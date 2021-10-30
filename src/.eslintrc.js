module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        "plugin:vue/recommended",
        "plugin:vue/vue3-recommended",
        "eslint:recommended",
        "@vue/typescript/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:security/recommended",
        "@vue/prettier",
        "@vue/prettier/@typescript-eslint"
    ],
    plugins: ["vue", "@typescript-eslint", "security", "prettier"],
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "@typescript-eslint/parser"
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        indent: ["error", 4],
        "vue/script-indent": [
            "error",
            4,
            {
                baseIndent: 1,
                switchCase: 1
            }
        ],
        "vue/html-indent": [
            "error",
            4,
            {
                attribute: 1,
                baseIndent: 1
            }
        ],
        "vue/max-attributes-per-line": [
            "warn",
            {
                singleline: {
                    max: 6
                },
                multiline: {
                    max: 6
                }
            }
        ],
        "vue/multi-word-component-names": "off",
        "vue/html-self-closing": [
            "warn",
            {
                html: {
                    void: "always",
                    normal: "always",
                    component: "always"
                },
                svg: "always",
                math: "always"
            }
        ],
        "vue/no-v-html": "off",
        "no-undef": 1,
        "no-prototype-builtins": 1,
        "prettier/prettier": ["error"]
    },
    overrides: [
        {
            files: ["**/__tests__/*.{j,t}s?(x)", "**/tests/unit/**/*.spec.{j,t}s?(x)"],
            env: {
                jest: true
            }
        },
        {
            files: ["*.vue"],
            rules: {
                indent: "off"
            }
        }
    ]
};
