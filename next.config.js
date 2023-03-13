import fs from "fs";

export function redirects() {
    try {
        const redirectsFile = fs.readFileSync("./src/redirects.json", "utf8");
        return JSON.parse(redirectsFile);
    } catch (error) {
        return [];
    }
}

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        appDir: true
    },
    async redirects() {
        return redirects();
    }
};

export default nextConfig;
