import { createApp } from "@/renderer/app";
import { getImage, getPageDescription, getPageTitle, getSchema } from "@/renderer/RenderHelper";
import { PageContext } from "@/renderer/types";
import Config from "@/server/Config";
import { renderToNodeStream } from "@vue/server-renderer";
import striptags from "striptags";
import { dangerouslySkipEscape, escapeInject, PageContextBuiltIn } from "vite-plugin-ssr";

const passToClient = ["pageProps", "documentProps", "initialState"];

async function render(pageContext: PageContextBuiltIn & PageContext) {
    const app = createApp(pageContext);

    pageContext.initialState = Object.assign({}, pageContext.initialState);

    const stream = renderToNodeStream(app);

    const name = Config.name;
    const title = getPageTitle(pageContext);

    const description = striptags(getPageDescription(pageContext)).trim();
    const image = getImage(pageContext);
    const schema = getSchema(pageContext);
    const canonical = Config.origin + pageContext.urlPathname;

    return escapeInject`<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
            
            <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />

            <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet" />            

            <title>${title}</title>

            <link rel="apple-touch-icon-precomposed" sizes="57x57" href="/assets/images/favicons/apple-touch-icon-57x57.png" />
            <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/assets/images/favicons/apple-touch-icon-114x114.png" />
            <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/assets/images/favicons/apple-touch-icon-72x72.png" />
            <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/assets/images/favicons/apple-touch-icon-144x144.png" />
            <link rel="apple-touch-icon-precomposed" sizes="60x60" href="/assets/images/favicons/apple-touch-icon-60x60.png" />
            <link rel="apple-touch-icon-precomposed" sizes="120x120" href="/assets/images/favicons/apple-touch-icon-120x120.png" />
            <link rel="apple-touch-icon-precomposed" sizes="76x76" href="/assets/images/favicons/apple-touch-icon-76x76.png" />
            <link rel="apple-touch-icon-precomposed" sizes="152x152" href="/assets/images/favicons/apple-touch-icon-152x152.png" />

            <link rel="icon" type="image/png" href="/assets/images/favicons/favicon-196x196.png" sizes="196x196" />
            <link rel="icon" type="image/png" href="/assets/images/favicons/favicon-96x96.png" sizes="96x96" />
            <link rel="icon" type="image/png" href="/assets/images/favicons/favicon-32x32.png" sizes="32x32" />
            <link rel="icon" type="image/png" href="/assets/images/favicons/favicon-16x16.png" sizes="16x16" />
            <link rel="icon" type="image/png" href="/assets/images/favicons/favicon-128.png" sizes="128x128" />

            <meta name="msapplication-TileColor" content="#FFFFFF" />
            <meta name="msapplication-TileImage" content="/assets/images/favicons/mstile-144x144.png" />
            <meta name="msapplication-square70x70logo" content="/assets/images/favicons/mstile-70x70.png" />
            <meta name="msapplication-square150x150logo" content="/assets/images/favicons/mstile-150x150.png" />
            <meta name="msapplication-wide310x150logo" content="/assets/images/favicons/mstile-310x150.png" />
            <meta name="msapplication-square310x310logo" content="/assets/images/favicons/mstile-310x310.png" />

            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta name="apple-mobile-web-app-title" content="${title}" />

            <link rel="manifest" href="/assets/manifest.json" />
            
            <link href="${canonical}" rel="preconnect" crossorigin />

            <link rel="canonical" href="${canonical}" />
            <link rel="alternate" hreflang="en-us" href="${canonical}" />
            <link rel="alternate" hreflang="x-default" href="${canonical}" />
            
            <meta name="author" content="${name}" />
            <meta name="description" content="${description}">
            <meta name="application-name" content="${name}" />
            <meta name="theme-color" content="#000000" />

            <meta name="HandheldFriendly" content="True" />

            <meta property="og:title" content="${title}" />
            <meta property="og:description" content="${description}" />
            <meta property="og:url" content="${canonical}" />
            <meta property="og:image" content="${image}" />
            <meta property="og:site_name" content="${name}" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />            

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="${title}" />
            <meta name="twitter:description" content="${description}" />
            <meta name="twitter:image" content="${image}" />
            <meta name="twitter:image:alt" content="${description}" />
            <meta name="twitter:site" content="@${Config.twitterHandle}" />
            <meta name="twitter:creator" content="@${Config.twitterHandle}" />
            
        </head>
        <body>
            <script>
                (() => {
                    const browserSet = matchMedia("(prefers-color-scheme: dark)").matches;
                    const appSet = localStorage.getItem("theme") || "dark";
                
                    if (browserSet) {
                        document.body.setAttribute("theme", "dark");
                    } else {
                        document.body.setAttribute("theme", appSet);
                    }
                
                    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", event => {
                        document.body.setAttribute("theme", event.matches ? "dark" : "light");
                        localStorage.setItem("theme", event.matches ? "dark" : "light");
                    });
                })();
            </script>
            <div class="app">${stream}</div>
            ${dangerouslySkipEscape(schema)}
        </body>
    </html>`;
}

export { passToClient };
export { render };
