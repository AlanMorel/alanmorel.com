<template>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" :viewBox="'0 0 ' + viewBox" class="icon">
        <slot />
    </svg>
</template>

<script lang="ts" setup>
    const { viewBox } = defineProps({
        viewBox: {
            type: String,
            required: true
        }
    });
</script>

<style lang="scss">
    @use "@/assets/scss/variables.scss";

    .icon {
        height: 1.2rem;
        margin-right: 0.5rem;

        .contact & {
            height: 2.5rem;
            transition: fill 0.1s ease;
            margin: 0;
        }
    }

    @media screen and (max-width: variables.$tablet) {
        .icon {
            .contact & {
                height: 2.25rem;
            }
        }
    }
</style>
