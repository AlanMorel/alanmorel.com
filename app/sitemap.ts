import Config from "@/src/Config";

type Route = {
    url: string;
    lastModified: string;
};

export default async function sitemap(): Promise<Route[]> {
    const routes = ["", "/resume"];

    return routes.map(route => ({
        url: `${Config.app.url}${route}`,
        lastModified: new Date().toISOString()
    }));
}
