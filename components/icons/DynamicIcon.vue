<template>
    <component :is="iconName" />
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    import VueIcon from "@/components/icons/VueIcon.vue";
    import JavaScriptIcon from "@/components/icons/JavaScriptIcon.vue";
    import AWSIcon from "@/components/icons/AWSIcon.vue";
    import HTMLIcon from "@/components/icons/HTMLIcon.vue";
    import WebIcon from "@/components/icons/WebIcon.vue";
    import PHPIcon from "@/components/icons/PHPIcon.vue";
    import WindowsIcon from "@/components/icons/WindowsIcon.vue";
    import MacIcon from "@/components/icons/MacIcon.vue";
    import ReactIcon from "@/components/icons/ReactIcon.vue";
    import JavaIcon from "@/components/icons/JavaIcon.vue";
    import PythonIcon from "@/components/icons/PythonIcon.vue";
    import ChromeIcon from "@/components/icons/ChromeIcon.vue";
    import LinuxIcon from "@/components/icons/LinuxIcon.vue";
    import AndroidIcon from "@/components/icons/AndroidIcon.vue";
    import NETIcon from "@/components/icons/NETIcon.vue";
    import CSSIcon from "@/components/icons/CSSIcon.vue";
    import SassIcon from "@/components/icons/SassIcon.vue";
    import NodeIcon from "@/components/icons/NodeIcon.vue";
    import APIIcon from "@/components/icons/APIIcon.vue";
    import MySQLIcon from "@/components/icons/MySQLIcon.vue";
    import AngularIcon from "@/components/icons/AngularIcon.vue";
    import ElectronIcon from "@/components/icons/ElectronIcon.vue";
    import CordovaIcon from "@/components/icons/CordovaIcon.vue";
    import MongoDBIcon from "@/components/icons/MongoDBIcon.vue";
    import StylusIcon from "@/components/icons/StylusIcon.vue";
    import HandlebarsIcon from "@/components/icons/HandlebarsIcon.vue";
    import GameBoyAdvanceIcon from "@/components/icons/GameBoyAdvanceIcon.vue";
    import LinkedInIcon from "@/components/icons/LinkedInIcon.vue";
    import GooglePlayIcon from "@/components/icons/GooglePlayIcon.vue";
    import GithubIcon from "@/components/icons/GithubIcon.vue";
    import DownloadIcon from "@/components/icons/DownloadIcon.vue";
    import StripeIcon from "@/components/icons/StripeIcon.vue";
    import TypeScriptIcon from "@/components/icons/TypeScriptIcon.vue";
    import FacebookIcon from "@/components/icons/FacebookIcon.vue";
    import PayPalIcon from "@/components/icons/PayPalIcon.vue";
    import DockerIcon from "@/components/icons/DockerIcon.vue";
    import TwitterIcon from "@/components/icons/TwitterIcon.vue";
    import InstagramIcon from "@/components/icons/InstagramIcon.vue";

    export default defineComponent({
        name: "DynamicIcon",
        components: {
            VueIcon,
            JavaScriptIcon,
            AWSIcon,
            HTMLIcon,
            WebIcon,
            PHPIcon,
            LinkedInIcon,
            WindowsIcon,
            MacIcon,
            ReactIcon,
            JavaIcon,
            PythonIcon,
            FacebookIcon,
            ChromeIcon,
            TwitterIcon,
            LinuxIcon,
            AndroidIcon,
            NETIcon,
            CSSIcon,
            SassIcon,
            NodeIcon,
            APIIcon,
            MySQLIcon,
            AngularIcon,
            ElectronIcon,
            CordovaIcon,
            InstagramIcon,
            MongoDBIcon,
            StylusIcon,
            HandlebarsIcon,
            GameBoyAdvanceIcon,
            GooglePlayIcon,
            GithubIcon,
            DownloadIcon,
            StripeIcon,
            PayPalIcon,
            DockerIcon,
            TypeScriptIcon
        },
        props: {
            icon: {
                type: String,
                required: true
            }
        },
        computed: {
            iconName(): string {
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
                    if (this.icon.startsWith(starts)) {
                        return starts + "Icon";
                    }
                }

                for (const to of Object.keys(equalTo)) {
                    for (const from of equalTo[to]) {
                        if (this.icon === from) {
                            return to + "Icon";
                        }
                    }
                }

                for (const to of Object.keys(endsWith)) {
                    for (const from of endsWith[to]) {
                        if (this.icon.endsWith(from)) {
                            return to + "Icon";
                        }
                    }
                }

                return this.icon + "Icon";
            }
        }
    });
</script>
