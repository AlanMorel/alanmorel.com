<template>
    <li :style="'background-color:' + project.background + '; color:' + project.color + ';'">
        <div class="project">
            <div class="icon">
                <img :src="'/assets/images/projects/' + name + '/icon.png'" :alt="name" loading="lazy" />
            </div>
            <div class="project__details">
                <h2 class="project__name">{{ project.name }}</h2>
                <div class="mini">Released {{ project.date }}</div>
                <div class="description">{{ project.description }}</div>
                <div class="tags-container">
                    <div class="technologies-container">
                      <div class="mini">Technologies</div>
                      <ul class="technologies">
                          <li class="tag" v-for="technology in project.technologies">
                              {{ technology }}
                          </li>
                      </ul>
                    </div>
                    <div class="platforms-container">
                      <div class="mini">Platforms</div>
                      <ul class="platforms">
                          <li class="tag" v-for="platform in project.platforms">
                              {{ platform }}
                          </li>
                      </ul>
                    </div>
                </div>
                <ul class="project-images">
                    <li class="project-image" v-for="image in project.images">
                        <img :src="'/assets/images/projects/' + name + '/' + image + '.png'" :alt="name + ' image'" loading="lazy" />
                    </li>
                </ul>
                <ul class="links">
                    <li class="link" v-for="(link, name) in project.links">
                        <a :href="link" target="_blank" rel="noopener" :style="'color:' + project.color + ';'">{{ name }}</a>
                    </li>
                </ul>
            </div>
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
    .project {
        display: flex;
        padding: 2rem 1rem 0.5rem;
        max-width: 65rem;
        margin: auto;
    }

    .tag {
        padding: 0.3rem 0.75rem;
        display: inline-block;
        background-color: rgba(0, 0, 0, 0.25);
        border-radius: 0.25rem;
        margin: 0 0.5rem 0.4rem 0;
    }

    .mini {
        margin: 0.25rem 0 1rem;
        font-size: 0.9rem;
        font-weight: 700;
    }

    .project__name {
        font-size: 4rem;
        font-weight: 700;
        letter-spacing: -0.25rem;
        margin-top: -1.25rem;
        margin-bottom: 0;
    }

    .description {
        margin-bottom: 0.5rem;
    }

    .tags-container {
        width: 100%;
        display: inline-block;
    }

    .technologies-container, .platforms-container {
        display: inline-block;
        vertical-align: top;
    }

    .technologies-container {
        width: 65%;
        margin-right: 5%;
    }

    .platforms-container {
        width: 25%;
    }

    .icon {
        flex: 20%;
    }

    .icon img {
        width: 100%;
    }

    .project__details {
        flex: 80%;
        text-align: left;
        box-sizing: border-box;
        padding-left: 2rem;
    }

    .project-images {
        margin: 1rem 0 0.5rem;
        text-align: center;
    }

    .project-image img {
        max-width: 100%;
        max-height: 30rem;
        margin: 0 1rem 1.25rem 0;
        box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.5), 0 0 10px 0 rgba(0, 0, 0, 0.5);
    }

    .links {
        display: flex;
    }

    .links a {
        text-decoration: none;
        background-color: rgba(0, 0, 0, 0.25);
        padding: 0.3rem 0.5rem;
        border-radius: 0.5rem;
        margin-right: 0.2rem;
        display: inline-block;
        margin-bottom: 0.5rem;

        &:hover {
            background-color: rgba(0, 0, 0, 0.4);
        }
    }

    @media screen and (max-width: 50rem) {
        .project {
            display: block;
        }

        .project__name {
            font-size: 2rem;
            letter-spacing: -0.1rem;
            margin-top: -0.5rem;
        }

        .project__details {
            padding: 0;
        }

        .icon {
            margin-right: 1rem;
            margin-bottom: 0.5rem;
            float: left;
            width: 20%;
        }

        .project-image img {
            max-width: 100%;
        }
    }
</style>
