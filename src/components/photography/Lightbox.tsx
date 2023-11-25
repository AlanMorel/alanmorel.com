"use client";

import tw from "@/src/components/other/TailwindHelper";
import { Location } from "@/src/components/photography/Photography";
import Image from "next/image";
import { MouseEvent, ReactElement, useEffect, useState } from "react";

interface Props {
    location: Location;
    close: () => void;
}

export default function Lightbox(props: Props): ReactElement {
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

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [index]);

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
            className="fixed left-0 top-0 z-50 flex h-full w-full max-w-full animate-fade flex-col items-center justify-center bg-black/90 px-16 pb-36"
            onClick={close}
        >
            <div className="relative animate-slide-in duration-slow">
                <button
                    className="absolute right-full top-1/2 mx-6 -translate-y-1/2 text-5xl font-bold text-white focus:outline-none"
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
                    className="absolute left-full top-1/2 mx-6 -translate-y-1/2 text-5xl font-bold text-white focus:outline-none"
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
                                className={tw(
                                    "w-[5rem] cursor-pointer rounded-sm transition hover:brightness-110 md:rounded",
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
