import type { PageContext } from "@/server/renderer/types";
import type { App } from "vue";
import { inject } from "vue";
export { usePageContext };
export { setPageContext };

const key = Symbol();

function usePageContext() {
    const pageContext = inject(key);
    return pageContext;
}

function setPageContext(app: App, pageContext: PageContext) {
    app.provide(key, pageContext);
}
