<template>
    <Icon viewBox="460 460" class="moon-icon">
        <path d="m130,24a228,228 0 0,0 317,276a228,228 0 1,1-317-276" />
    </Icon>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    import Icon from "@/components/icons/Icon.vue";

    export default defineComponent({
        name: "MoonIcon",
        components: {
            Icon
        }
    });
</script>

<style lang="scss">
    .moon-icon {
        width: 2rem;
        height: 2rem;
        transform: scale(0.75);
    }
</style>
