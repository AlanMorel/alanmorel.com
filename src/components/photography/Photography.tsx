"use client";

import Lightbox from "@/src/components/photography/Lightbox.tsx";
import Image from "next/image";
import { ReactElement, useState } from "react";

export interface Location {
    header: string;
    slug: string;
    images: number[];
}

const locations: Location[] = [
    {
        header: "",
        slug: "",
        images: []
    }
];

export default function Photography(): ReactElement {
    const [location, setLocation] = useState<Location | null>(null);

    function closeLightbox(): void {
        setLocation(null);
    }

    function openLightbox(location: Location): void {
        setLocation(location);
    }

    return (
        <div>
            <div className="mx-auto max-w-[70rem]">
                <ul className="mb-10 grid grid-cols-3 gap-2 px-4 md:grid-cols-6 md:gap-4">
                    {locations.map(location => (
                        <li key={location.header} className="relative" onClick={(): void => openLightbox(location)}>
                            <h2 className="pointer-events-none absolute bottom-1 z-10 px-2 text-sm font-bold text-white md:px-3 lg:text-lg">
                                {location.header}
                            </h2>
                            <div className="relative">
                                <Image
                                    src={`/images/photos/${location.slug}/DSC0${location.images[0]}.jpg`}
                                    alt={location.header}
                                    loading="lazy"
                                    width={180}
                                    height={270}
                                    className="w-full rounded-md object-cover object-right"
                                    quality={50}
                                />
                                <div className="absolute inset-0 w-full cursor-pointer rounded-lg bg-linear-to-b from-transparent to-slate-900 opacity-50 transition hover:opacity-30" />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            {location && <Lightbox location={location} close={closeLightbox} />}
        </div>
    );
}
