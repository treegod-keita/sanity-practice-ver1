import astroParser from "astro-eslint-parser";
import eslintPluginAstro from "eslint-plugin-astro";
import typescriptEslintParser from "@typescript-eslint/parser";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

const eslintConfig = [
    // 除外ファイルの設定
    {
        ignores: [".astro/", "dist/", "node_modules", "studio/"],
    },
    ...tseslint.configs.recommended,
    ...eslintPluginAstro.configs["flat/recommended"],
    eslintConfigPrettier,
    // Astro + TypeScript
    {
        files: ["**/*.astro"],
        languageOptions: {
            parser: astroParser,
            parserOptions: {
                parser: typescriptEslintParser,
                extraFileExtensions: [".astro"],
            },
        },
    },
];

export default eslintConfig;
