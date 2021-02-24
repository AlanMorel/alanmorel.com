module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ["plugin:vue/vue3-essential", "eslint:recommended"],
    parserOptions: {
        parser: "babel-eslint"
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
