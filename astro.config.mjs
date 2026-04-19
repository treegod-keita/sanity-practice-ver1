import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sanity from "@sanity/astro";
import { loadEnv } from "vite";

const env = loadEnv(process.env.NODE_ENV, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [
        // 👇 update these lines
        sanity({
            projectId: env.PUBLIC_SANITY_PROJECT_ID,
            dataset: env.PUBLIC_SANITY_DATASET,
            useCdn: false,
            apiVersion: "2026-04-18",
        }),
    ],
});
