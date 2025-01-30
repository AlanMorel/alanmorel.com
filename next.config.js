import fs from "fs";

const safeStylesheet = [].join(" ");

const safeScripts = ["*.googletagmanager.com"].join(" ");

const contentSecurityPolicy = `style-src 'self' 'unsafe-eval' 'unsafe-inline' ${safeStylesheet}; script-src 'self' ${safeScripts} 'unsafe-eval' 'unsafe-inline';`;

export function redirects() {
    try {
        const redirectsFile = fs.readFileSync("./src/redirects.json", "utf8");
        return JSON.parse(redirectsFile);
    } catch (error) {
        return [];
    }
}

const config = {
    reactStrictMode: true,
    images: {
        minimumCacheTTL: 60
    },
    async redirects() {
        return redirects();
    },
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    {
                        key: "X-Frame-Options",
                        value: "DENY"
                    },
                    {
                        key: "Content-Security-Policy",
                        value: contentSecurityPolicy
                    },
                    {
                        key: "X-Content-Type-Options",
                        value: "nosniff"
                    },
                    {
                        key: "Permissions-Policy",
                        value: "camera=(), battery=(self), geolocation=(), microphone=()"
                    },
                    {
                        key: "Referrer-Policy",
                        value: "origin-when-cross-origin"
                    }
                ]
            }
        ];
    }
};

export default config;
