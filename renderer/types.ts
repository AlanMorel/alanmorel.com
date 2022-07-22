export type Component = any;

export type PageContext = {
    Page: Component;
    pageProps: Record<string, unknown>;
    initialState: any;
    documentProps?: {
        title: string;
        description: string;
        image: string;
        schemas: any[];
    };
};
