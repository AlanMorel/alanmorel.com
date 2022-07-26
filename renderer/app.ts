import App from "@/components/App.vue";
import type { Component, PageContext } from "@/renderer/types";
import { setPageContext } from "@/renderer/usePageContext";
import Config from "@/shared/Config";
import { createSSRApp, defineComponent, h, markRaw, reactive } from "vue";
import VueGtag from "vue-gtag-next";

export { createApp };

function createApp(pageContext: PageContext): any {
    const { Page } = pageContext;

    let rootComponent: Component;
    const PageWithWrapper = defineComponent({
        data: () => ({
            Page: markRaw(Page),
            pageProps: markRaw(pageContext.pageProps || {})
        }),
        created() {
            rootComponent = this as Component;
        },
        render() {
            return h(
                App,
                {},
                {
                    default: () => {
                        return h(this.Page, this.pageProps);
                    }
                }
            );
        }
    });

    const app = createSSRApp(PageWithWrapper);

    app.use(VueGtag, {
        property: {
            id: Config.googleAnalytics.measurementId
        }
    });

    // We use `app.changePage()` to do Client Routing, see `_default.page.client.js`
    objectAssign(app, {
        changePage: (pageContext: PageContext) => {
            Object.assign(pageContextReactive, pageContext);
            rootComponent.Page = markRaw(pageContext.Page);
            rootComponent.pageProps = markRaw(pageContext.pageProps || {});
        }
    });

    // When doing Client Routing, we mutate pageContext (see usage of `app.changePage()` in `_default.page.client.js`).
    // We therefore use a reactive pageContext.
    const pageContextReactive = reactive(pageContext);

    // Make `pageContext` accessible from any Vue component
    setPageContext(app, pageContextReactive);

    return app;
}

// Same as `Object.assign()` but with type inference
function objectAssign<Obj, ObjAddendum>(obj: Obj, objAddendum: ObjAddendum): asserts obj is Obj & ObjAddendum {
    Object.assign(obj, objAddendum);
}
