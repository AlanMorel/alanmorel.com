<template>
    <header class="intro">
        <div class="intro__picture-container">
            <img src="/assets/images/profile-picture.png" class="intro__picture" alt="profile pic" />
        </div>
        <div class="intro__text-container">
            <h1>Alan Morel</h1>
            <p>
                Hey! My name is Alan and I'm a senior software engineer, photographer, music producer, and technical
                writer, from New York. I like writing software to build cool things, and this is my collection of my
                works, art, and projects.
            </p>
            <p class="intro__ending">
                Feel free to reach out to me via <a href="mailto:alan@alanmorel.com">email</a>. My resume can be
                <a href="/resume" target="_blank">found here</a>.
            </p>
        </div>
    </header>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "Intro"
    });
</script>

<style lang="scss">
    @use "@/assets/scss/variables.scss";

    .intro {
        display: flex;
        max-width: 60rem;
        padding: 4rem 0;
        margin: auto;
    }

    .intro__picture-container {
        margin-right: 3rem;
        width: 70%;
    }

    .intro__picture {
        width: 100%;
        border-radius: 50%;
        box-shadow: 0 0 2rem 0 rgba(0, 0, 0, 0.1);
    }

    .intro__ending {
        font-size: 1.15rem;
    }

    @media screen and (max-width: variables.$tablet) {
        .intro {
            display: initial;
            text-align: center;
        }

        .intro__picture-container {
            width: 50%;
            margin: auto;
            padding-top: 2rem;
        }

        .intro__text-container {
            padding: 0 1rem;
        }
    }
</style>
