<template>
    <li class="contact" :data-tip="name">
        <a :href="link" target="_blank" rel="noopener" class="contact__link">
            <DynamicIcon :icon="name" />
        </a>
    </li>
</template>

<script lang="ts" setup>
    const { name, link } = defineProps({
        name: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        }
    });
</script>

<style lang="scss">
    @use "@/assets/scss/variables.scss";

    .contacts {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 1rem 0 2rem;
    }

    .contact {
        margin: 0 1.25rem;
    }

    .contact__link {
        text-decoration: none;
    }

    @media screen and (max-width: variables.$tablet) {
        .contacts {
            margin: 2rem 0 2rem;
        }

        .contact {
            margin: 0 1rem;
        }
    }
</style>
