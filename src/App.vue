<template>
    <router-view />
</template>

<style lang="stylus">
    body {
        font-family: "Open Sans", sans-serif;
        margin: 0;
        text-align: center;
        letter-spacing: 0.025rem;
        background-color: #fbfbfb;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
    }

    img {
        vertical-align: middle;
    }

    h1 {
        font-size: 7rem;
        padding: 0 1rem;
        font-weight: bold;
        margin: 0;
        text-align: left;
        letter-spacing: -0.75rem;
        color: #1f1f1f;
        background-size: 100% 25%;
        background-repeat: repeat-x;
        background-position: left 0% bottom 0%;
        display: inline-block;
        background-image: linear-gradient(182deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 50%, transparent 52%, transparent 100%);
    }

    h3 {
        font-weight: 400;
        text-align: left;
        line-height: 1.5;
    }

    p {
        text-align: left;
        line-height: 1.5;
    }

    ul {
        padding: 0;
        list-style-type: none;
    }

    a {
        color: black;
    }

    [data-tip] {
        position: relative;

        &:before {
            position: absolute;
            content: attr(data-tip);
            background-color: rgba(0, 0, 0, 0.8);
            bottom: calc(100% + 0.25rem);
            border-radius: 0.2rem;
            left: 50%;
            transform: translateX(-50%);
            padding: 0.25rem 0.75rem;
            color: white;
            font-size: 1rem;
            text-align: center;
            opacity: 0;
            visibility: hidden;
            transition: visibility 0s linear 0.2s, opacity 0.2s 0s;
        }

        &:hover,
        &:focus {
            &:before {
                opacity: 1;
                visibility: visible;
                transition: visibility 0s linear 0s, opacity 0.2s 0s;
            }
        }
    }

    @media screen and (max-width: 50rem) {
        h1 {
            font-size: 4rem;
            letter-spacing: -0.4rem;
            text-align: center;
        }

        h3 {
            text-align: center;
        }
    }
</style>
