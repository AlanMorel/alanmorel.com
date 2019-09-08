<template>
    <section class="home">
        <header>
            <div class="picture-container">
                <img src="/assets/images/pic.png" class="picture" alt="profile pic" />
            </div>
            <div class="intro-container">
                <h1>Alan Morel</h1>
                <p>I'm a software engineer, photographer, and music producer from New York. I like making cool things and this is my collection of my software, artwork, projects and achievements.</p>
                <h3>I hope that it inspires you to <span class="action">collaborate</span>!</h3>
            </div>
        </header>
        <ul class="contacts">
            <Contact v-for="(link, name) in contacts" :name="name" :link="link" :key="name" />
        </ul>
        <ul class="projects">
            <Project v-for="(project, name) in projects" :name="name" :project="project" :key="name" />
        </ul>
    </section>
</template>

<script>
    import Project from "@/components/Project.vue";
    import Contact from "@/components/Contact.vue";

    export default {
        name: "Home",
        components: {
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
    }
</script>

<style lang="stylus">
    header {
        display: flex;
        max-width: 60rem;
        margin: 4rem auto 4rem;
    }

    .picture-container {
        margin-right: 3rem;
        width: 70%;
    }

    .picture {
        width: 100%;
        border-radius: 50%
    }

    @media screen and (max-width: 50rem) {
        header {
            display: initial;
            text-align: center;
        }

        .intro-container {
            padding: 0 1rem;
        }

        .picture-container {
            width: 50%;
            margin: auto;
            padding-top: 2rem;
        }
    }
</style>
