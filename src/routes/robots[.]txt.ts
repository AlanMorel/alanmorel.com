import robotsTxt from "@/src/robots.txt?raw";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/robots.txt")({
    server: {
        handlers: {
            GET: () => {
                return new Response(robotsTxt, {
                    headers: {
                        "Content-Type": "text/plain"
                    }
                });
            }
        }
    }
});
