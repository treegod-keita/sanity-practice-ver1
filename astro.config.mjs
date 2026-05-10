import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sanity from "@sanity/astro";
import dotenv from "dotenv";
import htmlBeautifier from "astro-html-beautifier";
import relativeLinks from "astro-relative-links";

dotenv.config();

export default defineConfig({
    outDir: "./originDist",
    build: {
        assets: "assets/scripts", // JSの基本出力先
    },
    vite: {
        build: {
            assetsInlineLimit: 0, // 0に設定することで<style>インライン化を強制解除
            cssCodeSplit: false, // CSSを1つにまとめる
            rollupOptions: {
                output: {
                    // JSファイルの設定
                    entryFileNames: `assets/scripts/script_[hash].js`,
                    // 画像・CSS・その他資産の設定
                    assetFileNames: (assetInfo) => {
                        const rawName = assetInfo.names?.[0] ?? "";

                        // 画像ファイルの振り分け（-- を / に置換して階層化）
                        if (/\.(gif|jpeg|jpg|png|svg|webp|mp4)$/.test(rawName)) {
                            const name = rawName.replace(/--/g, "/");
                            return `assets/images/${name}`;
                        }
                        // CSSファイルの振り分け
                        if (/\.css$/.test(rawName)) {
                            return "assets/styles/[name]_[hash].[ext]";
                        }
                        // その他（フォント等）
                        return "assets/[name].[ext]";
                    },
                },
            },
        },
    },

    integrations: [
        relativeLinks(), // パスを相対形式に変換
        htmlBeautifier({
            // HTMLを整形
            indent_size: 2,
            indent_char: "\t",
        }),
        sanity({
            projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
            dataset: process.env.PUBLIC_SANITY_DATASET,
            useCdn: false,
            apiVersion: "2026-04-18",
        }),
    ],
});
