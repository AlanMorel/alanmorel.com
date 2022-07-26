import { PageContext } from "@/renderer/types";
import { organization, website } from "@/server/helpers/Schema";
import Config from "@/shared/Config";

export function getPageDescription(pageContext: PageContext): string {
    return pageContext.documentProps?.description || Config.metaInfo.description;
}

export function getPageTitle(pageContext: PageContext): string {
    return pageContext.documentProps?.title || Config.metaInfo.title;
}

export function getImage(pageContext: PageContext): string {
    return pageContext.documentProps?.image || `${Config.app.origin}/assets/images/meta-image.png`;
}

export function getSchema(pageContext: PageContext): string {
    const pageSchemas = (pageContext.documentProps?.schemas as any[]) || [];
    const schemas = [organization, website, ...pageSchemas];

    return schemas
        .map(schema => `<script type="application/ld+json">\n${JSON.stringify(schema, null, 4)}\n</script>\n`)
        .join("");
}
