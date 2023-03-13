export default function Intro(): JSX.Element {
    return (
        <header className="mx-auto flex max-w-[60rem] flex-col py-16 px-4 sm:flex-row">
            <div className="mx-auto mb-8 w-[70%] text-center sm:mr-6 sm:mb-0 md:mr-12">
                <img src="/images/profile-picture.png" className="w-full rounded-full shadow-lg" alt="profile pic" />
            </div>
            <div className="text-gray-900">
                <div className="text-center">
                    <h1 className="highlight mx-auto my-0 mb-4 inline-flex text-center text-[4rem] font-bold leading-none tracking-[-0.25rem] sm:text-[5rem] sm:tracking-[-0.5rem] md:text-[7rem] md:tracking-[-0.75rem]">
                        Alan Morel
                    </h1>
                </div>
                <p className="mb-4 leading-normal">
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
