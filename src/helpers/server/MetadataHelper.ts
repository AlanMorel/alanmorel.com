import Config from "@/src/Config";
import { redirect } from "next/navigation";
import { Metadata } from "next/types";

type MetadataGenerator = (props: MetadataProps) => Promise<BaseMetadata>;

type MetadataHandler = (props: MetadataProps) => Promise<Metadata>;

export type BaseMetadata = {
    title: string;
    description: string;
    image?: string;
};

export type MetadataProps = {
    params: any;
    searchParams: any;
};

export const withDynamicMetadata = (handler: MetadataGenerator): MetadataHandler => {
    return async function generateMetadata(props: MetadataProps): Promise<Metadata> {
        try {
            const baseMetadata = await handler(props);

            return buildMetadata(baseMetadata);
        } catch (error) {
            return redirect("/error");
        }
    };
};

export const withMetadata = (baseMetadata: BaseMetadata): Metadata => {
    return buildMetadata(baseMetadata);
};

const buildMetadata = (base: BaseMetadata): Metadata => {
    return {
        title: base.title,
        description: base.description,
        openGraph: {
            title: base.title,
            description: base.description,
            url: `https://${Config.app.domain}`
        },
        twitter: {
            title: base.title,
            description: base.description
        }
    };
};
