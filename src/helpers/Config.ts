const sharex = {
    secret: process.env.SHAREX_SECRET || "secret"
};

const journal = {
    startDate: new Date(process.env.JOURNAL_START_DATE || "2023-01-01"),
    cookieName: process.env.JOURNAL_COOKIE_NAME || "journal",
    password: process.env.JOURNAL_COOKIE_PASSWORD || "password"
};

const configs = {
    sharex,
    journal
};

export default configs;
