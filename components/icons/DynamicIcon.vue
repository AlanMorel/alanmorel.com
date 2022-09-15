<template>
    <component :is="components[iconName()]" />
</template>

<script lang="ts" setup>
    import AndroidIcon from "@/components/icons/AndroidIcon.vue";
    import AngularIcon from "@/components/icons/AngularIcon.vue";
    import APIIcon from "@/components/icons/APIIcon.vue";
    import AWSIcon from "@/components/icons/AWSIcon.vue";
    import ChromeIcon from "@/components/icons/ChromeIcon.vue";
    import CordovaIcon from "@/components/icons/CordovaIcon.vue";
    import CSSIcon from "@/components/icons/CSSIcon.vue";
    import DockerIcon from "@/components/icons/DockerIcon.vue";
    import DownloadIcon from "@/components/icons/DownloadIcon.vue";
    import ElectronIcon from "@/components/icons/ElectronIcon.vue";
    import FacebookIcon from "@/components/icons/FacebookIcon.vue";
    import GameBoyAdvanceIcon from "@/components/icons/GameBoyAdvanceIcon.vue";
    import GithubIcon from "@/components/icons/GithubIcon.vue";
    import GooglePlayIcon from "@/components/icons/GooglePlayIcon.vue";
    import HandlebarsIcon from "@/components/icons/HandlebarsIcon.vue";
    import HTMLIcon from "@/components/icons/HTMLIcon.vue";
    import InstagramIcon from "@/components/icons/InstagramIcon.vue";
    import JavaIcon from "@/components/icons/JavaIcon.vue";
    import JavaScriptIcon from "@/components/icons/JavaScriptIcon.vue";
    import LinkedInIcon from "@/components/icons/LinkedInIcon.vue";
    import LinuxIcon from "@/components/icons/LinuxIcon.vue";
    import MacIcon from "@/components/icons/MacIcon.vue";
    import MongoDBIcon from "@/components/icons/MongoDBIcon.vue";
    import MySQLIcon from "@/components/icons/MySQLIcon.vue";
    import NETIcon from "@/components/icons/NETIcon.vue";
    import NodeIcon from "@/components/icons/NodeIcon.vue";
    import PayPalIcon from "@/components/icons/PayPalIcon.vue";
    import PHPIcon from "@/components/icons/PHPIcon.vue";
    import PostgreSQLIcon from "@/components/icons/PostgreSQLIcon.vue";
    import PythonIcon from "@/components/icons/PythonIcon.vue";
    import ReactIcon from "@/components/icons/ReactIcon.vue";
    import SassIcon from "@/components/icons/SassIcon.vue";
    import StripeIcon from "@/components/icons/StripeIcon.vue";
    import StylusIcon from "@/components/icons/StylusIcon.vue";
    import TwitterIcon from "@/components/icons/TwitterIcon.vue";
    import TypeScriptIcon from "@/components/icons/TypeScriptIcon.vue";
    import VueIcon from "@/components/icons/VueIcon.vue";
    import WebIcon from "@/components/icons/WebIcon.vue";
    import WindowsIcon from "@/components/icons/WindowsIcon.vue";

    const components: any = {
        AndroidIcon,
        AngularIcon,
        APIIcon,
        AWSIcon,
        ChromeIcon,
        CordovaIcon,
        CSSIcon,
        DockerIcon,
        DownloadIcon,
        ElectronIcon,
        FacebookIcon,
        GameBoyAdvanceIcon,
        GithubIcon,
        GooglePlayIcon,
        HandlebarsIcon,
        HTMLIcon,
        InstagramIcon,
        JavaIcon,
        JavaScriptIcon,
        LinkedInIcon,
        LinuxIcon,
        MacIcon,
        MongoDBIcon,
        MySQLIcon,
        NETIcon,
        NodeIcon,
        PayPalIcon,
        PHPIcon,
        PostgreSQLIcon,
        PythonIcon,
        ReactIcon,
        SassIcon,
        StripeIcon,
        StylusIcon,
        TwitterIcon,
        TypeScriptIcon,
        VueIcon,
        WebIcon,
        WindowsIcon
    };

    const { icon } = defineProps({
        icon: {
            type: String,
            required: true
        }
    });

    const iconName = (): string => {
        const startsWith = ["AWS", "Vue", "Chrome"];
        const equalTo: { [key: string]: any } = {
            Java: ["libGDX", "Processing"],
            Python: ["Flask", "PIL", "Requests"],
            NET: ["C#", "ASP.NET", ".NET"],
            Node: ["Express", "Socket.io", "Handlebars.js"],
            Github: ["Open Source on Github"],
            Windows: ["Download for Windows"],
            Web: [
                "Live Demo",
                "Promotional Page",
                "Pokémon: SacredFire Patch File",
                "Lunar IPS (LIPS)",
                "Pokémon: FireRed ROM"
            ],
            GooglePlay: ["Google Play Store"],
            GameBoyAdvance: ["Game Boy Advance", "Visual Boy Advance"]
        };
        const endsWith: { [key: string]: any } = {
            API: ["API", "SDK", "Assembly"],
            Web: [".com", ".io"]
        };

        for (const starts of startsWith) {
            if (icon.startsWith(starts)) {
                return starts + "Icon";
            }
        }

        for (const to of Object.keys(equalTo)) {
            for (const from of equalTo[to]) {
                if (icon === from) {
                    return to + "Icon";
                }
            }
        }

        for (const to of Object.keys(endsWith)) {
            for (const from of endsWith[to]) {
                if (icon.endsWith(from)) {
                    return to + "Icon";
                }
            }
        }

        return icon + "Icon";
    };
</script>
