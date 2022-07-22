<template>
    <section class="home">
        <Intro />
        <ul class="contacts">
            <Contact v-for="(link, name) in contacts" :key="name" :name="name" :link="link" />
        </ul>
        <ul class="projects">
            <Project v-for="(project, name) in projects" :key="name" :name="name" :project="project" />
        </ul>
    </section>
</template>

<script lang="ts" setup>
    import Contact from "@/components/Contact.vue";
    import Intro from "@/components/Intro.vue";
    import Project from "@/components/Project.vue";
    import data from "@/shared/data.json";

    const contacts = data.contacts;
    const projects = data.projects;
</script>

<style lang="scss">
    .home {
        background-color: var(--background-color);
    }
</style>
