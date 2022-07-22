import vue from "@vitejs/plugin-vue";
import path from "path";
import Components from "unplugin-vue-components/vite";
import { UserConfig } from "vite";
import ssr from "vite-plugin-ssr/plugin";

const config: UserConfig = {
    plugins: [
        vue({
            include: [/\.vue$/]
        }),
        Components({
            dirs: ["components"]
        }),
        ssr()
    ],
    clearScreen: false,
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./")
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@/assets/variables.scss";`
            }
        }
    },
    build: {
        rollupOptions: {
            output: {
                format: "es"
            }
        }
    }
};

export default config;
