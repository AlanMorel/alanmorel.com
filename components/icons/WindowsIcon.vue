<template>
    <Icon viewBox="512 512">
        <polygon style="fill: #90c300" points="242.526,40.421 512,0 512,239.832 242.526,239.832" />
        <polygon style="fill: #f8672c" points="0,75.453 206.596,44.912 206.596,242.526 0,242.526" />
        <polygon style="fill: #ffc400" points="242.526,471.579 512,512 512,278.456 242.526,278.456" />
        <polygon style="fill: #00b4f2" points="0,436.547 206.596,467.088 206.596,278.456 0,278.456" />
    </Icon>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    import Icon from "@/components/icons/Icon.vue";

    export default defineComponent({
        name: "WindowsIcon",
        components: {
            Icon
        }
    });
</script>
