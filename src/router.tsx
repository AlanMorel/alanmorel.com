import NotFound from "@/src/components/not-found.tsx";
import { routeTree } from "@/src/routeTree.gen.ts";
import type { Router } from "@tanstack/react-router";
import { createRouter } from "@tanstack/react-router";

export function getRouter(): Router<typeof routeTree> {
    const router = createRouter({
        routeTree,
        scrollRestoration: true,
        defaultNotFoundComponent: NotFound
    });

    return router;
}
