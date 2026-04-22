import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sanity from "@sanity/astro";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [
        sanity({
            projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
            dataset: process.env.PUBLIC_SANITY_DATASET,
            useCdn: false,
            apiVersion: "2026-04-18",
        }),
    ],
});
