export default function Intro(): JSX.Element {
    return (
        <header className="mx-auto box-border grid max-w-[60rem] grid-cols-[1fr_3fr] grid-rows-[auto_auto] gap-10 px-4 pt-16 pb-8 md:gap-x-14">
            <div className="col-span-2 mx-auto w-full max-w-xs sm:col-span-1">
                <img src="/images/profile-picture.png" className="w-full rounded-full shadow-lg" alt="profile pic" />
            </div>
            <div className="col-span-2 text-gray-900 sm:col-span-1">
                <div className="mx-auto w-full text-center sm:text-left">
                    <h1 className="highlight mx-auto my-0 mb-4 inline-flex text-6xl font-bold leading-none tracking-tighter sm:text-7xl md:text-8xl">
                        Alan Morel
                    </h1>
                </div>
                <p className="mb-4 leading-7">
                    Hey! My name is Alan and I am a senior software engineer, photographer, music producer, and
                    technical writer, from New York. I like writing software to build cool things, and this is my
                    collection of my works, art, and projects.
                </p>
                <p className="text-lg">
                    Feel free to reach out to me via{" "}
                    <a href="mailto:alan@alanmorel.com" className="text-slate-900 underline hover:no-underline">
                        email
                    </a>
                    . My resume can be{" "}
                    <a href="/resume" target="_blank" className="text-slate-900 underline hover:no-underline">
                        found here
                    </a>
                    .
                </p>
            </div>
        </header>
    );
}
