"use client";

import { Location } from "@/src/components/photography/Photography";
import Image from "next/image";
import { useState } from "react";

interface Props {
    location: Location;
    close: () => void;
}

export default function Lightbox(props: Props): JSX.Element {
    const { location, close } = props;

    const [index, setIndex] = useState(0);

    const handlePrev = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.stopPropagation();
        setIndex((index - 1 + location.images.length) % location.images.length);
    };

    const handleNext = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.stopPropagation();
        setIndex((index + 1) % location.images.length);
    };

    const selectPhoto = (e: React.MouseEvent<HTMLImageElement>, index: number): void => {
        e.stopPropagation();
        setIndex(index);
    };

    const getImageClasses = (i: number): string => {
        return i === index ? "brightness-110" : "brightness-75";
    };

    return (
        <div
            className="fixed top-0 left-0 z-50 flex h-full w-full max-w-full animate-fade flex-col items-center justify-center bg-black bg-opacity-90 px-16 pb-16"
            onClick={close}
        >
            <div className="relative animate-slide-in duration-slow">
                <button
                    className="absolute top-1/2 right-full mx-6 -translate-y-1/2 transform text-5xl font-bold text-white focus:outline-none"
                    onClick={handlePrev}
                >
                    «
                </button>
                <Image
                    src={`/images/photos/${location.slug}/DSC0${location.images[index]}.jpg`}
                    className="w-full max-w-2xl rounded-xl"
                    alt={location.header}
                    loading="lazy"
                    width={4000}
                    height={6000}
                />
                <button
                    className="absolute top-1/2 left-full mx-6 -translate-y-1/2 transform text-5xl font-bold text-white focus:outline-none"
                    onClick={handleNext}
                >
                    »
                </button>
            </div>
            <div className="fixed bottom-2">
                <ul className="flex space-x-1 overflow-x-auto px-2 md:space-x-2">
                    {location.images.map((image, i) => (
                        <li key={image}>
                            <Image
                                src={`/images/photos/${location.slug}/DSC0${image}.jpg`}
                                className={`w-[5rem] cursor-pointer rounded-sm transition hover:brightness-110 md:rounded ${getImageClasses(
                                    i
                                )}`}
                                onClick={(e: React.MouseEvent<HTMLImageElement>): void => selectPhoto(e, i)}
                                loading="lazy"
                                width={4000}
                                height={6000}
                                alt={location.header}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
