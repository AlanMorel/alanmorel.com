<template>
    <li class="contact">
        <a :href="link" target="_blank" :alt="name" rel="noopener" class="contact__link">
            <img :src="'/assets/images/contact/' + name.toLowerCase() + '.png'" :alt="name" class="contact__image" />
        </a>
    </li>
</template>

<script>
    export default {
        name: "Contact",
        props: {
            name: String,
            link: String
        }
    }
</script>

<style lang="stylus">
    .contacts {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .contact__link {
        text-decoration: none;
    }

    .contact__image {
        width: 3rem;
        margin: 0.5rem;
    }

    @media screen and (max-width: 50rem) {
        .contact__image {
            width: 2.5rem;
        }
    }
</style>
