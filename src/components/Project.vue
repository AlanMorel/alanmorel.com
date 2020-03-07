<template>
    <li class="project" :style="'background-color:' + project.background + '; color:' + project.color + ';'">
        <div class="project__inner-container">
            <div class="project__icon-container">
                <img :src="'/assets/images/projects/' + name + '/icon.png'" :alt="name" loading="lazy" class="project__icon" />
            </div>
            <div class="project__details">
                <h2 class="project__name">{{ project.name }}</h2>
                <div class="project__subheader">Released {{ project.date }}</div>
                <div class="project__description">{{ project.description }}</div>
                <div class="project__tags-container">
                    <div class="project__technologies">
                      <div class="project__subheader">Technologies</div>
                      <ul>
                          <li class="project__tag" v-for="technology in project.technologies">
                              {{ technology }}
                          </li>
                      </ul>
                    </div>
                    <div class="project__platforms">
                      <div class="project__subheader">Platforms</div>
                      <ul>
                          <li class="project__tag" v-for="platform in project.platforms">
                              {{ platform }}
                          </li>
                      </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="project__body">
            <ul class="project__images">
                <li class="project__image-container" v-for="image in project.images">
                    <img :src="'/assets/images/projects/' + name + '/image' + image + '.png'" :alt="name + ' image'" loading="lazy" class="project__image" />
                </li>
            </ul>
            <ul class="project__links">
                <li class="project__link-container" v-for="(link, name) in project.links">
                    <a :href="link" target="_blank" rel="noopener" :style="'color:' + project.color + ';'" class="project__link">
                        {{ name }}
                    </a>
                </li>
            </ul>
        </div>
    </li>
</template>

<script>
    export default {
        name: "Project",
        props: {
            name: String,
            project: Object
        }
    }
</script>

<style lang="stylus">
    .projects {
        margin-bottom: 0;
    }

    .project__inner-container {
        display: flex;
        padding: 2rem 1rem 0.5rem;
        max-width: 65rem;
        margin: auto;
    }

    .project__icon-container {
        flex: 20%;
    }

    .project__icon {
        width: 100%;
    }

    .project__tag {
        padding: 0.3rem 0.75rem;
        display: inline-block;
        background-color: rgba(0, 0, 0, 0.25);
        border-radius: 0.25rem;
        margin: 0 0.5rem 0.4rem 0;
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
        background-image: linear-gradient(182deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.25) 50%, transparent 52%, transparent 100%);
    }

    .project__description {
        margin-bottom: 1rem;
    }

    .project__tags-container {
        display: flex;
    }

    .project__technologies {
        flex: 65%;
        margin-right: 5%;
        margin-bottom: 0.5rem;
    }

    .project__platforms {
        flex: 25%;
    }

    .project__details {
        flex: 80%;
        text-align: left;
        box-sizing: border-box;
        padding-left: 2rem;
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
        padding: 1rem 0;
    }

    .project__link {
        text-decoration: none;
        background-color: rgba(0, 0, 0, 0.25);
        padding: 0.3rem 0.75rem;
        border-radius: 0.25rem;
        margin-right: 0.5rem;
        display: inline-block;
        margin-bottom: 0.5rem;
        transition: background-color 0.1s ease;

        &:hover {
            background-color: rgba(0, 0, 0, 0.5);
        }
    }

    @media screen and (max-width: 50rem) {
        .project {
            display: block;
        }

        .project__name {
            font-size: 2rem;
            letter-spacing: -0.1rem;
            margin-top: -1rem;
        }

        .project__details {
            padding: 0;
        }

        .project__tags-container {
            flex-direction: column;
        }

        .project__technologies {
            margin-right: 0;
        }

        .project__tag {
            font-size: 0.9rem;
        }

        .project__icon-container {
            margin-right: 1rem;
            transform: translateY(-0.5rem);
            float: left;
            width: 20%;
        }

        .project__image {
            max-width: 100%;
        }
    }
</style>
