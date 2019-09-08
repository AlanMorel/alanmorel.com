<template>
    <div id="app">
        <router-view />
    </div>
</template>

<style lang="stylus">
    body {
        font-family: 'Open Sans', sans-serif;
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
        font-weight: 700;
        margin: 0 0 1rem;
        text-align: left;
        letter-spacing: -0.75rem;
        color: #1f1f1f;
    }

    h3 {
        font-weight: 400;
        text-align: left;
        line-height: 1.5;
    }

    p {
        text-align: left;
    }

    ul {
        padding: 0;
        list-style-type: none;
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
