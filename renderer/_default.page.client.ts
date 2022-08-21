import { createApp } from "@/renderer/app";
import { getPageTitle } from "@/renderer/RenderHelper";
import type { PageContext } from "@/renderer/types";
import type { PageContextBuiltInClient } from "vite-plugin-ssr/client/router";
import { useGtag } from "vue-gtag-next";

let app: ReturnType<typeof createApp>;

const render = async (pageContext: PageContextBuiltInClient & PageContext): Promise<any> => {
    if (!app) {
        app = createApp(pageContext);

        app.mount(".app");
    } else {
        app.changePage(pageContext);

        const { pageview } = useGtag();

        pageview({ page_path: pageContext.urlOriginal });
    }

    document.title = getPageTitle(pageContext);
};

const onPageTransitionStart = (): void => {
    document.querySelector(".content")!.classList.add("page-transition");
};

const onPageTransitionEnd = (): void => {
    document.querySelector(".content")!.classList.remove("page-transition");
};

export { render, onPageTransitionStart, onPageTransitionEnd };

export const clientRouting = true;
