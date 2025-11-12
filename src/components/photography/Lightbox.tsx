"use client";

import cn from "@/src/components/other/TailwindHelper.ts";
import { Location } from "@/src/components/photography/Photography.ts";
import { Image } from "@unpic/react";
import { MouseEvent, ReactElement, useEffect, useState } from "react";

interface Props {
    location: Location;
    close: () => void;
}

export default function Lightbox(props: Readonly<Props>): ReactElement {
    const { location, close } = props;

    const [index, setIndex] = useState(0);

    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent): void {
            if (event.key === "ArrowLeft") {
                setIndex((index - 1 + location.images.length) % location.images.length);
            } else if (event.key === "ArrowRight") {
                setIndex((index + 1) % location.images.length);
            }
        }

        globalThis.addEventListener("keydown", handleKeyDown);

        return (): void => {
            globalThis.removeEventListener("keydown", handleKeyDown);
        };
    }, [index, location.images.length]);

    function handlePrev(e: MouseEvent<HTMLButtonElement>): void {
        e.stopPropagation();
        setIndex((index - 1 + location.images.length) % location.images.length);
    }

    function handleNext(e: MouseEvent<HTMLButtonElement>): void {
        e.stopPropagation();
        setIndex((index + 1) % location.images.length);
    }

    function selectPhoto(e: MouseEvent<HTMLImageElement>, index: number): void {
        e.stopPropagation();
        setIndex(index);
    }

    function getImageClasses(i: number): string {
        return i === index ? "brightness-110" : "brightness-75";
    }

    return (
        <div
            className="animate-fade fixed top-0 left-0 z-50 flex size-full max-w-full flex-col items-center justify-center bg-black/90 px-16 pb-36"
            onClick={close}
        >
            <div className="animate-slide-in duration-slow relative">
                <button
                    className="absolute top-1/2 right-full mx-6 -translate-y-1/2 text-5xl font-bold text-white focus:outline-hidden"
                    onClick={handlePrev}
                >
                    «
                </button>
                <Image
                    src={`/images/photos/${location.slug}/DSC0${location.images[index]}.jpg`}
                    className="max-h-[calc(100vh-10rem)] w-full max-w-2xl rounded-xl"
                    alt={location.header}
                    loading="lazy"
                    width={1000}
                    height={1500}
                />
                <button
                    className="absolute top-1/2 left-full mx-6 -translate-y-1/2 text-5xl font-bold text-white focus:outline-hidden"
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
                                className={cn(
                                    "w-12 cursor-pointer rounded-xs transition hover:brightness-110 md:rounded-sm",
                                    getImageClasses(i)
                                )}
                                onClick={(e: MouseEvent<HTMLImageElement>): void => selectPhoto(e, i)}
                                loading="lazy"
                                width={1000}
                                height={1500}
                                alt={location.header}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
