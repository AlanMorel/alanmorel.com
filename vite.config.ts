import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { resolve } from "node:path";
import type { AliasOptions } from "vite";
import { defineConfig } from "vite";

const alias: AliasOptions = {
    "@": resolve(__dirname, ".")
};

export default defineConfig({
    plugins: [
        tanstackStart(),
        nitro({
            preset: "bun",
            alias,
            minify: true,
            sourcemap: false,
            compressPublicAssets: {
                gzip: true,
                brotli: true
            }
        }),
        react(),
        tailwindcss()
    ],
    server: {
        port: 8080
    },
    resolve: {
        alias
    }
});
