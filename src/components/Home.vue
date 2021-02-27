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

<script>
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
            const contacts = data.contacts;
            const projects = data.projects;

            return { contacts, projects };
        }
    });
</script>
