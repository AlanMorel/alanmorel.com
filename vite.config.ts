import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import rsc from "@vitejs/plugin-rsc";
import { nitro } from "nitro/vite";
import { resolve } from "node:path";
import type { AliasOptions } from "vite";
import { defineConfig } from "vite";

const alias: AliasOptions = {
    "@": resolve(__dirname, ".")
};

export default defineConfig({
    plugins: [
        tanstackStart({ rsc: { enabled: true } }),
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
        rsc(),
        react(),
        babel({
            presets: [reactCompilerPreset()]
        }),
        tailwindcss()
    ],
    optimizeDeps: {
        exclude: ["lucide-react"]
    },
    server: {
        port: 8080
    },
    resolve: {
        alias
    }
});
