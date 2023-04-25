const sharex = {
    secret: process.env.SHAREX_SECRET || "secret"
};

const journal = {
    cookieName: process.env.JOURNAL_COOKIE_NAME || "journal",
    password: process.env.JOURNAL_COOKIE_PASSWORD || "password"
};

const configs = {
    sharex,
    journal
};

export default configs;
