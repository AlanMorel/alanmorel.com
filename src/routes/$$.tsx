import NotFound from "@/src/components/not-found";
import { getRedirect } from "@/src/helpers/server/ServerFunctions.ts";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/$$")({
    beforeLoad: async ({ params }) => {
        const pathname = params.$;

        const redirectObj = await getRedirect({ data: { pathname } });

        if (redirectObj) {
            throw redirect({ href: redirectObj.destination });
        }
    },
    component: NotFound
});
