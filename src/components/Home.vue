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
    import Intro from "@/components/Intro.vue";
    import Project from "@/components/Project.vue";
    import Contact from "@/components/Contact.vue";

    export default {
        name: "Home",
        components: {
            Intro,
            Project,
            Contact
        },
        data: () => ({
            contacts: [],
            projects: []
        }),
        created() {
            this.contacts = data.contacts;
            this.projects = data.projects;
        }
    };
</script>
