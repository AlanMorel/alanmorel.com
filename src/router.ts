import Home from "@/components/Home.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/:pathMatch(.*)*",
            redirect: "/"
        }
    ]
});

export default router;
