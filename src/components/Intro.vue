<template>
    <header class="intro">
        <div class="intro__picture-container">
            <img src="/assets/images/pic.png" class="intro__picture" alt="profile pic" />
        </div>
        <div class="intro__text-container">
            <h1>Alan Morel</h1>
            <p>I'm a software engineer, photographer, music producer, and technical writer, from New York. I like making cool things and this is my collection of my software, artwork, projects, and achievements.</p>
            <p class="intro__ending">Feel free to reach out to me via <a href="mailto:alan@alanmorel.com">email</a>. My resume can be <a href="/resume" target="_blank">found here</a>.</p>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Intro"
    }
</script>

<style lang="stylus">
    .intro {
        display: flex;
        max-width: 60rem;
        margin: 4rem auto;
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

    @media screen and (max-width: 50rem) {
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
