"use client";

import profilePic from "@/public/images/profile-picture.png";
import config from "@/src/Config.ts";
import Image from "next/image";
import Link from "next/link";
import { MouseEvent, ReactElement } from "react";

export default function Intro(): ReactElement {
    function handleEmailClick(event: MouseEvent): void {
        event.preventDefault();

        window.location.href = `mailto:${config.app.email}`;
    }

    return (
        <header className="mx-auto box-border grid max-w-[60rem] grid-cols-[1fr_3fr] grid-rows-[auto_auto] gap-4 px-4 pb-8 pt-12 sm:gap-x-14 sm:pt-16">
            <div className="col-span-2 mx-auto w-full max-w-xs sm:col-span-1">
                <Image
                    src={profilePic}
                    className="mx-auto max-w-40 rounded-full shadow-lg sm:w-full sm:max-w-full"
                    alt="profile pic"
                    priority
                />
            </div>
            <div className="col-span-2 text-slate-900 sm:col-span-1">
                <div className="mx-auto w-full text-center sm:text-left">
                    <h1 className="highlight mx-auto my-0 mb-4 inline-flex text-6xl font-bold leading-none tracking-tighter sm:text-7xl md:text-8xl">
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
                    <a href="#" onClick={handleEmailClick} className="text-slate-900 underline hover:no-underline">
                        email
                    </a>
                    . My resume can be{" "}
                    <Link href="/resume" target="_blank" className="text-slate-900 underline hover:no-underline">
                        found here
                    </Link>
                    .
                </p>
            </div>
        </header>
    );
}
