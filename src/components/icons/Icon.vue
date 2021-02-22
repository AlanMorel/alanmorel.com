<template>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" :viewBox="'0 0 ' + viewBox" class="icon">
        <slot />
    </svg>
</template>

<script>
    export default {
        name: "Icon",
        props: {
            viewBox: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="scss">
    .icon {
        height: 1.2rem;
        margin-right: 0.5rem;
    }
</style>
