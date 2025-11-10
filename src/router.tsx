import NotFound from "@/app/not-found.tsx";
import { routeTree } from "@/src/routeTree.gen.ts";
import { createRouter, Router } from "@tanstack/react-router";

export function getRouter(): Router<typeof routeTree> {
    const router = createRouter({
        routeTree,
        scrollRestoration: true,
        defaultNotFoundComponent: NotFound
    });

    return router;
}
