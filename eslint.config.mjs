import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import nextPlugin from "@next/eslint-plugin-next";

export default [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        ignores: ["node_modules/", ".next/", "out/", "public/"],
    },
    {
        plugins: {
            "react-hooks": reactHooks,
            "@next/next": nextPlugin,
        },
        rules: {
            // Disable all rules but define them so eslint-disable comments work
            "react-hooks/exhaustive-deps": "off",
            "react-hooks/rules-of-hooks": "off",
            "@next/next/no-img-element": "off",
            "@next/next/no-html-link-for-pages": "off",
            "@typescript-eslint/no-unused-vars": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "no-unused-vars": "off",
        },
    },
];
