<template>
    <li
        class="project"
        :class="'project__theme--' + project.theme"
        :style="'background-color:' + project.background + ';'"
    >
        <div class="project__inner-container">
            <div class="project__icon-container">
                <img
                    :src="'/assets/images/projects/' + name + '/icon.png'"
                    :alt="name"
                    loading="lazy"
                    class="project__icon"
                />
            </div>
            <div class="project__details">
                <div class="project__headers">
                    <h2 class="project__name">{{ project.name }}</h2>
                    <div class="project__subheader">Released {{ project.date }}</div>
                </div>
                <div class="project__description">{{ project.description }}</div>
                <div class="project__tags-container">
                    <div class="project__technologies">
                        <div class="project__subheader">Technologies</div>
                        <ul>
                            <li class="project__tag" v-for="(technology, index) in project.technologies" :key="index">
                                <DynamicIcon :icon="technology" />
                                <span>{{ technology }}</span>
                            </li>
                        </ul>
                    </div>
                    <div class="project__platforms">
                        <div class="project__subheader">Available on</div>
                        <ul>
                            <li class="project__tag" v-for="(platform, index) in project.platforms" :key="index">
                                <DynamicIcon :icon="platform" />
                                <span>{{ platform }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="project__body">
            <ul class="project__images">
                <li class="project__image-container" v-for="(image, index) in project.images" :key="index">
                    <img
                        :src="'/assets/images/projects/' + name + '/image' + image + '.png'"
                        :alt="name + ' image'"
                        loading="lazy"
                        class="project__image"
                    />
                </li>
            </ul>
            <ul class="project__links">
                <li class="project__link-container" v-for="(link, name) in project.links" :key="name">
                    <a :href="link" target="_blank" rel="noopener" class="project__tag project__link">
                        <DynamicIcon :icon="name" />
                        <span>{{ name }}</span>
                    </a>
                </li>
            </ul>
        </div>
    </li>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    import DynamicIcon from "@/components/icons/DynamicIcon.vue";

    export default defineComponent({
        name: "Project",
        components: {
            DynamicIcon
        },
        props: {
            name: String,
            project: Object
        }
    });
</script>

<style lang="scss">
    .projects {
        margin-bottom: 0;
    }

    .project__theme {
        &--light {
            color: $light-text;
        }

        &--dark {
            color: $dark-text;
        }
    }

    .project__inner-container {
        display: flex;
        padding: 2rem 1rem 0.5rem;
        max-width: 70rem;
        margin: auto;
    }

    .project__icon-container {
        flex: 20%;
    }

    .project__icon {
        width: 100%;
        border-radius: 1rem;
    }

    .project__tag {
        padding: 0.35rem 0.75rem;
        background-color: rgba(0, 0, 0, 0.25);
        border-radius: 0.25rem;
        margin: 0 0.6rem 0.6rem 0;
        color: white;
        vertical-align: middle;
        display: inline-flex;
        align-items: center;
        border-bottom: solid 3px rgba(0, 0, 0, 0.1);
    }

    .project__subheader {
        margin: 0.25rem 0 0.5rem;
        font-size: 0.9rem;
        font-weight: bold;
        letter-spacing: 0;
    }

    .project__name {
        font-size: 4rem;
        font-weight: bold;
        letter-spacing: -0.25rem;
        margin-top: -1.25rem;
        margin-bottom: 0.5rem;
        display: inline-block;
        background-size: 100% 25%;
        background-repeat: repeat-x;
        background-position: left 0% bottom 0%;
        background-image: linear-gradient(
            182deg,
            rgba(255, 255, 255, 0.25) 0%,
            rgba(255, 255, 255, 0.25) 50%,
            transparent 52%,
            transparent 100%
        );
        padding: 0 0.5rem;
        transform: translateX(-0.75rem);
    }

    .project__description {
        margin-bottom: 1rem;
    }

    .project__tags-container {
        display: flex;
        flex-direction: column;
    }

    .project__technologies {
        margin-bottom: 0.5rem;
    }

    .project__details {
        flex: 80%;
        text-align: left;
        box-sizing: border-box;
        padding-left: 3rem;
    }

    .project__images {
        margin: 1rem 0 0.5rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0 1rem;
    }

    .project__image {
        max-width: 100%;
        max-height: 30rem;
        margin: 0 1rem 1.25rem 0;
        box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.25), 0 0 1rem 0 rgba(0, 0, 0, 0.25);
    }

    .project__links {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 1.5rem 1rem;
    }

    .project__link {
        text-decoration: none;
        transition: background-color 0.15s ease;

        &:hover {
            background-color: rgba(0, 0, 0, 0.5);
        }
    }

    @media screen and (max-width: $tablet) {
        .project {
            display: block;
        }

        .project__inner-container {
            flex-direction: column;
        }

        .project__headers {
            padding-left: 6rem;
            margin-bottom: 1.25rem;
        }

        .project__name {
            font-size: 2rem;
            letter-spacing: -0.1rem;
            margin-bottom: 0;
            padding: 0 0.25rem;
            transform: translateX(-0.25rem);
        }

        .project__details {
            padding: 0;
        }

        .project__technologies {
            margin-right: 0;
        }

        .project__tag {
            font-size: 0.9rem;
        }

        .project__description {
            font-size: 0.95rem;
            text-align: justify;
        }

        .project__icon-container {
            transform: translateY(-1rem);
            width: 20%;
            position: absolute;
        }

        .project__image {
            max-width: 100%;
        }
    }
</style>
