import config from "@/src/Config.ts";
import { Image } from "@unpic/react";
import type { MouseEvent, ReactElement } from "react";

export default function Intro(): ReactElement {
    function handleEmailClick(event: MouseEvent): void {
        event.preventDefault();

        globalThis.location.href = `mailto:${config.app.email}`;
    }

    return (
        <header className="mx-auto box-border grid max-w-240 grid-cols-[1fr_3fr] grid-rows-[auto_auto] gap-4 px-4 pt-12 pb-8 sm:gap-x-14 sm:pt-16">
            <div className="col-span-2 mx-auto w-full max-w-xs sm:col-span-1">
                <Image
                    alt="profile pic"
                    className="mx-auto max-w-40 rounded-full shadow-lg sm:w-full sm:max-w-full"
                    height={640}
                    src="/images/profile-picture.png"
                    width={640}
                />
            </div>
            <div className="col-span-2 text-slate-900 sm:col-span-1">
                <div className="mx-auto w-full text-center sm:text-left">
                    <h1 className="highlight mx-auto my-0 mb-6 inline-flex text-6xl leading-none font-bold tracking-tighter sm:text-7xl md:text-8xl">
                        {config.metaInfo.title}
                    </h1>
                </div>
                <p className="mb-4 leading-8">
                    Hey! My name is Alan and I am a senior full-stack software engineer, video game developer,
                    photographer, music producer, and technical writer. I love writing software that brings joy to
                    people, and this is my collection of those projects.
                </p>
                <p className="text-lg">
                    Feel free to reach out to me via{" "}
                    <button
                        className="cursor-pointer text-slate-900 underline hover:no-underline"
                        onClick={handleEmailClick}
                    >
                        email
                    </button>
                    ,{" "}
                    <a
                        className="cursor-pointer text-slate-900 underline hover:no-underline"
                        href="https://github.com/AlanMorel"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        GitHub
                    </a>
                    , or{" "}
                    <a
                        className="cursor-pointer text-slate-900 underline hover:no-underline"
                        href="https://linkedin.com/in/AlanMorel"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        LinkedIn
                    </a>
                    .
                </p>
            </div>
        </header>
    );
}
