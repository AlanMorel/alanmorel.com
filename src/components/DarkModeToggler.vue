<template>
    <div class="dark-mode-toggler-container">
        <label>
            <input
                type="checkbox"
                class="dark-mode-toggler"
                name="dark-mode-toggler"
                v-model="checked"
                @change="handleInput"
            />
            Dark mode toggler
        </label>
    </div>
</template>

<script lang="ts">
    import { defineComponent, reactive, toRefs, watch } from "vue";

    export default defineComponent({
        name: "DarkModeToggler",
        props: {
            modelValue: {
                type: Boolean,
                required: true
            }
        },
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
    .dark-mode-toggler-container {
        position: fixed;
        bottom: 0.5rem;
        right: 0;

        label {
            font-size: 0;
        }
    }

    .dark-mode-toggler {
        outline: none;
        box-shadow: none;
        appearance: none;
        cursor: pointer;
        border: 0;
        width: 2rem;
        height: 2rem;

        &::before {
            font-size: 1.5rem;
            content: "🌙";
            text-shadow: 0 0 0.75rem rgba(255, 255, 255, 0.5);
        }

        &:checked {
            &:before {
                content: "🌞";
            }
        }
    }
</style>
