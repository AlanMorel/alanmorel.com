const app = {
    name: "AlanMorel",
    url: "https://alanmorel.com",
    domain: "alanmorel.com",
    socials: {
        twitter: "https://twitter.com/AlanMorelX"
    }
};

const metaInfo = {
    title: "Alan Morel",
    description: "Alan Morel - Software Engineer, Game Developer, Photographer, Music Producer",
    image: "/images/meta-image.png",
    twitter: "AlanMorelX"
};

const google = {
    analytics: {
        measurementId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID
    }
};

const config = {
    app,
    metaInfo,
    google
};

export default config;
