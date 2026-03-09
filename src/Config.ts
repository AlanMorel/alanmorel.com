const app = {
    name: "AlanMorel",
    url: "https://alanmorel.com",
    domain: "alanmorel.com",
    email: "alan@alanmorel.com",
    socials: {
        gitHub: "AlanMorel",
        linkedIn: "AlanMorel"
    }
};

const metaInfo = {
    title: "Alan Morel",
    description: "Software Engineer, Game Developer, Photographer, Music Producer",
    image: {
        url: "/images/meta-image.png",
        width: 1280,
        height: 800,
        alt: "Alan Morel"
    }
};

const config = {
    app,
    metaInfo,
    simpleMode: import.meta.env.VITE_SIMPLE_MODE === "true" || false
};

export default config;
