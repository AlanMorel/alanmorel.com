"use client";

import config from "@/src/Config.ts";
import { Link } from "@tanstack/react-router";
import { Image } from "@unpic/react";
import { MouseEvent, ReactElement } from "react";

export default function Intro(): ReactElement {
    function handleEmailClick(event: MouseEvent): void {
        event.preventDefault();

        globalThis.location.href = `mailto:${config.app.email}`;
    }

    return (
        <header className="mx-auto box-border grid max-w-240 grid-cols-[1fr_3fr] grid-rows-[auto_auto] gap-4 px-4 pt-12 pb-8 sm:gap-x-14 sm:pt-16">
            <div className="col-span-2 mx-auto w-full max-w-xs sm:col-span-1">
                <Image
                    src={"/images/profile-picture.png"}
                    className="mx-auto max-w-40 rounded-full shadow-lg sm:w-full sm:max-w-full"
                    alt="profile pic"
                    width={640}
                    height={640}
                />
            </div>
            <div className="col-span-2 text-slate-900 sm:col-span-1">
                <div className="mx-auto w-full text-center sm:text-left">
                    <h1 className="highlight mx-auto my-0 mb-4 inline-flex text-6xl leading-none font-bold tracking-tighter sm:text-7xl md:text-8xl">
                        {config.metaInfo.title}
                    </h1>
                </div>
                <p className="mb-4 leading-7">
                    Hey! My name is Alan and I am a senior software engineer, game developer, photographer, music
                    producer, and technical writer. I like writing software to build cool things, and this is my
                    collection of my works, art, and projects.
                </p>
                <p className="text-lg">
                    Feel free to reach out to me via{" "}
                    <button
                        onClick={handleEmailClick}
                        className="cursor-pointer text-slate-900 underline hover:no-underline"
                    >
                        email
                    </button>
                    . My resume can be{" "}
                    <Link to="/resume" target="_blank" className="text-slate-900 underline hover:no-underline">
                        found here
                    </Link>
                    .
                </p>
            </div>
        </header>
    );
}
