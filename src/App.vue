<template>
    <div>
        <router-view :theme="darkMode ? 'dark' : 'light'" />
        <DarkModeToggler v-model="darkMode" />
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref, watch } from "vue";
    import DarkModeToggler from "@/components/DarkModeToggler.vue";

    export default defineComponent({
        name: "App",
        components: {
            DarkModeToggler
        },
        setup() {
            const darkMedia = window.matchMedia("(prefers-color-scheme: dark)");

            const darkMode = ref(darkMedia.matches);

            watch(darkMode, newSetting => {
                localStorage.setItem("darkMode", JSON.stringify(newSetting));
            });

            const darkModeSetting = localStorage.getItem("darkMode");

            if (darkModeSetting && JSON.parse(darkModeSetting)) {
                darkMode.value = true;
            }

            darkMedia.addEventListener("change", event => {
                darkMode.value = event.matches;
                localStorage.setItem("darkMode", JSON.stringify(event.matches));
            });

            return {
                darkMode
            };
        }
    });
</script>

<style lang="scss">
    :root {
        --background-color: #{$light-background};
        --light-text: #{$light-text};
        --dark-text: #{$dark-text};
        --icon-fill: #{$dark-icon-fill};
        --icon-fill-hover: #{$dark-icon-fill-hover};
    }

    [theme="dark"] {
        --background-color: #{$dark-background};
        --light-text: #{$dark-text};
        --dark-text: #{$light-text};
        --icon-fill: #{$light-icon-fill};
        --icon-fill-hover: #{$light-icon-fill-hover};
    }

    body {
        font-family: "Open Sans", sans-serif;
        margin: 0;
        text-align: center;
        letter-spacing: 0.025rem;
        text-rendering: optimizeLegibility;
    }

    img {
        vertical-align: middle;
    }

    h1 {
        font-size: 7rem;
        padding: 0 1rem;
        font-weight: bold;
        margin: 0;
        text-align: left;
        letter-spacing: -0.75rem;
        color: var(--dark-text);
        background-size: 100% 25%;
        background-repeat: repeat-x;
        background-position: left 0% bottom 0%;
        display: inline-block;
        background-image: linear-gradient(
            182deg,
            rgba(0, 0, 0, 0.1) 0%,
            rgba(0, 0, 0, 0.1) 50%,
            transparent 52%,
            transparent 100%
        );

        [theme="dark"] & {
            background-image: linear-gradient(
                182deg,
                rgba(255, 255, 255, 0.1) 0%,
                rgba(255, 255, 255, 0.1) 50%,
                transparent 52%,
                transparent 100%
            );
        }
    }

    h3 {
        font-weight: 400;
        text-align: left;
        line-height: 1.5;
    }

    p {
        text-align: left;
        line-height: 1.5;
        color: var(--dark-text);
    }

    ul {
        padding: 0;
        list-style-type: none;
    }

    a {
        color: var(--dark-text);
    }

    [data-tip] {
        position: relative;

        &:before {
            position: absolute;
            content: attr(data-tip);
            background-color: rgba(0, 0, 0, 0.5);
            bottom: calc(100% + 0.5rem);
            border-radius: 0.2rem;
            left: 50%;
            transform: translateX(-50%);
            padding: 0.25rem 0.75rem;
            color: white;
            font-size: 1rem;
            text-align: center;
            opacity: 0;
            visibility: hidden;
            transition: visibility 0s linear 0.2s, opacity 0.2s 0s;
        }

        &:hover,
        &:focus {
            &:before {
                opacity: 1;
                visibility: visible;
                transition: visibility 0s linear 0s, opacity 0.2s 0s;
            }
        }
    }

    @media screen and (max-width: $tablet) {
        h1 {
            font-size: 4rem;
            letter-spacing: -0.4rem;
            text-align: center;
        }

        h3 {
            text-align: center;
        }
    }
</style>
