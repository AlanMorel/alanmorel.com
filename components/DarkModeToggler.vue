<template>
    <div class="theme-toggler" @click="toggle">
        <SunIcon />
        <MoonIcon />
    </div>
</template>

<script lang="ts" setup>
    import { useTheme } from "@/shared/hooks/useTheme";
    import { onBeforeMount } from "vue";

    const { theme, setTheme } = useTheme();

    const toggle = () => {
        if (theme.value === "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }

        localStorage.setItem("theme", theme.value);

        document.body.setAttribute("theme", theme.value);
    };

    onBeforeMount(() => {
        const browserSet = matchMedia("(prefers-color-scheme: dark)").matches;
        const appSet = localStorage.getItem("theme") || "dark";

        if (browserSet) {
            setTheme("dark");
        } else {
            setTheme(appSet);
        }

        document.body.setAttribute("theme", theme.value);
    });
</script>

<style lang="scss">
    .theme-toggler {
        cursor: pointer;
        position: fixed;
        bottom: 1rem;
        right: 0.5rem;

        .moon-icon,
        .sun-icon {
            color: var(--icon-color);
            fill: #fcc21b;
            transition: color 100ms ease-in-out;
            width: 1.5rem;
            height: 1.5rem;
            transform: scale(1.25);

            &:hover {
                color: var(--icon-hover-color);
            }
        }
    }

    [theme="dark"] {
        .moon-icon {
            display: none;
        }
    }
    [theme="light"] {
        .sun-icon {
            display: none;
        }
    }
</style>
