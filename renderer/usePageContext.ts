import type { PageContext } from "@/renderer/types";
import type { App } from "vue";
import { inject } from "vue";
export { usePageContext };
export { setPageContext };

const key = Symbol();

function usePageContext(): unknown {
    const pageContext = inject(key);
    return pageContext;
}

function setPageContext(app: App, pageContext: PageContext): void {
    app.provide(key, pageContext);
}
