"use client";

import Lightbox from "@/src/components/photography/Lightbox";
import Image from "next/image";
import { useState } from "react";

export interface Location {
    header: string;
    slug: string;
    images: number[];
}

const locations: Location[] = [
    {
        header: "Paris, France",
        slug: "paris",
        images: [7047, 6923, 7039, 7233, 7329, 7455, 7621, 7698]
    },
    {
        header: "London, UK",
        slug: "london",
        images: [7914, 7734, 7780, 7791, 7991, 8004, 8005, 8020, 8112, 8165]
    },
    {
        header: "Chicago, IL",
        slug: "chicago",
        images: [
            4311, 3496, 3517, 3526, 3535, 3570, 3579, 3596, 3607, 3625, 3636, 3662, 3669, 3697, 4240, 4263, 4284, 4368,
            4474
        ]
    },
    {
        header: "Amsterdam, NL",
        slug: "amsterdam",
        images: [1322, 1216, 1346, 1407, 1415, 1425, 1429, 1476, 1516, 1604, 1612]
    },
    {
        header: "Boston, MA",
        slug: "boston",
        images: [2260, 2325, 2385, 2423, 2440, 2443, 2489, 2491, 2497]
    },
    {
        header: "Miami, FL",
        slug: "miami",
        images: [6430, 6385, 6441, 6528, 6533, 6551, 6591, 6596, 6678, 6355]
    },
    {
        header: "Montreal, QC",
        slug: "montreal",
        images: [4748, 4794, 4803, 4822, 4837, 4850, 4885, 4931, 4733, 4737]
    },
    {
        header: "Philadelpia, PA",
        slug: "philly",
        images: [6134, 6008, 6042, 6152, 6188, 6228, 6258, 6289, 6304, 6331]
    },
    {
        header: "Quebec City, QC",
        slug: "quebec-city",
        images: [4987, 5019, 5022, 5030, 5036, 5040, 5051, 5060, 5063, 5117]
    },
    {
        header: "San Diego, CA",
        slug: "san-diego",
        images: [5256, 5280, 5299, 5300, 5307, 5332, 5375, 5404, 5412, 5415]
    },
    {
        header: "Seattle, WA",
        slug: "seattle",
        images: [5779, 5798, 5802, 5804, 5516, 5815, 5636, 5702, 5751, 5760]
    },
    {
        header: "Washington DC",
        slug: "washington-dc",
        images: [4511, 4522, 4525, 4532, 4538, 4555, 4562, 4498, 4503, 4505]
    }
];

export default function Photography(): JSX.Element {
    const [location, setLocation] = useState<Location | null>(null);

    const closeLightbox = (): void => {
        setLocation(null);
    };

    const openLightbox = (location: Location): void => {
        setLocation(location);
    };

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
                                    width={4000}
                                    height={6000}
                                    className="w-full rounded-md object-cover object-right"
                                />
                                <div className="absolute bottom-0 left-0 right-0 top-0 w-full cursor-pointer rounded-lg bg-gradient-to-b from-transparent to-slate-900 opacity-50 transition hover:opacity-30" />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            {location && <Lightbox location={location} close={closeLightbox} />}
        </div>
    );
}
