<template>
    <div class="dark-mode-toggler">
        <label>
            <input
                v-model="checked"
                type="checkbox"
                class="dark-mode-toggler__input"
                name="dark-mode-toggler"
                @change="handleInput"
            />
            <div class="dark-mode-toggler__icons">
                <SunIcon v-if="checked" />
                <MoonIcon v-else />
            </div>
            Dark mode toggler
        </label>
    </div>
</template>

<script lang="ts">
    import { defineComponent, reactive, toRefs, watch } from "vue";
    import SunIcon from "@/components/icons/SunIcon.vue";
    import MoonIcon from "@/components/icons/MoonIcon.vue";

    export default defineComponent({
        name: "DarkModeToggler",
        components: {
            SunIcon,
            MoonIcon
        },
        props: {
            modelValue: {
                type: Boolean,
                required: true
            }
        },
        emits: ["update:modelValue"],
        setup(props, { emit }) {
            const data = reactive({
                checked: props.modelValue
            });
            watch(
                () => props.modelValue,
                newValue => {
                    data.checked = newValue;
                }
            );
            const handleInput = () => {
                emit("update:modelValue", data.checked);
            };
            return {
                ...toRefs(data),
                handleInput
            };
        }
    });
</script>

<style lang="scss">
    .dark-mode-toggler {
        position: fixed;
        bottom: 0.5rem;
        right: 0;

        label {
            font-size: 0;
        }
    }

    .dark-mode-toggler__input {
        outline: none;
        box-shadow: none;
        appearance: none;
        cursor: pointer;
        border: 0;
        width: 2rem;
        height: 2rem;
    }

    .dark-mode-toggler__icons {
        cursor: pointer;
        margin-right: 1rem;
        position: absolute;
        top: 0;
        right: 0;

        .icon {
            margin-right: 0;
            fill: #fcc21b;
        }
    }
</style>
