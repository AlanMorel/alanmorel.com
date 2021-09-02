<template>
    <section class="home">
        <Intro />
        <ul class="contacts">
            <Contact v-for="(link, name) in contacts" :name="name" :link="link" :key="name" />
        </ul>
        <ul class="projects">
            <Project v-for="(project, name) in projects" :name="name" :project="project" :key="name" />
        </ul>
    </section>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    import Intro from "@/components/Intro.vue";
    import Project from "@/components/Project.vue";
    import Contact from "@/components/Contact.vue";

    export default defineComponent({
        name: "Home",
        components: {
            Intro,
            Project,
            Contact
        },
        setup() {
            const textContent = document.querySelector("#data")?.textContent;

            let contacts = null;
            let projects = null;

            if (textContent) {
                const data = JSON.parse(textContent);

                contacts = data.contacts;
                projects = data.projects;
            }

            return {
                contacts,
                projects
            };
        }
    });
</script>

<style lang="scss">
    .home {
        background-color: var(--background-color);
    }
</style>
