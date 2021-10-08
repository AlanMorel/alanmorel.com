module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        "plugin:vue/vue3-recommended",
        "@vue/typescript/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "@typescript-eslint/parser"
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        indent: 2,
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
                    max: 6,
                    allowFirstLine: true
                },
                multiline: {
                    max: 6,
                    allowFirstLine: false
                }
            }
        ],
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
        "no-prototype-builtins": 1
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
