<template>
    <component :is="iconName" />
</template>

<script>
    import { defineComponent } from "vue";

    import VueIcon from "@/components/icons/VueIcon";
    import JavaScriptIcon from "@/components/icons/JavaScriptIcon";
    import AWSIcon from "@/components/icons/AWSIcon";
    import HTMLIcon from "@/components/icons/HTMLIcon";
    import WebIcon from "@/components/icons/WebIcon";
    import PHPIcon from "@/components/icons/PHPIcon";
    import WindowsIcon from "@/components/icons/WindowsIcon";
    import MacIcon from "@/components/icons/MacIcon";
    import ReactIcon from "@/components/icons/ReactIcon";
    import JavaIcon from "@/components/icons/JavaIcon";
    import PythonIcon from "@/components/icons/PythonIcon";
    import ChromeIcon from "@/components/icons/ChromeIcon";
    import LinuxIcon from "@/components/icons/LinuxIcon";
    import AndroidIcon from "@/components/icons/AndroidIcon";
    import NETIcon from "@/components/icons/NETIcon";
    import CSSIcon from "@/components/icons/CSSIcon";
    import SassIcon from "@/components/icons/SassIcon";
    import NodeIcon from "@/components/icons/NodeIcon";
    import APIIcon from "@/components/icons/APIIcon";
    import MySQLIcon from "@/components/icons/MySQLIcon";
    import AngularIcon from "@/components/icons/AngularIcon";
    import ElectronIcon from "@/components/icons/ElectronIcon";
    import CordovaIcon from "@/components/icons/CordovaIcon";
    import MongoDBIcon from "@/components/icons/MongoDBIcon";
    import StylusIcon from "@/components/icons/StylusIcon";
    import HandlebarsIcon from "@/components/icons/HandlebarsIcon";
    import GameBoyAdvanceIcon from "@/components/icons/GameBoyAdvanceIcon";
    import GooglePlayIcon from "@/components/icons/GooglePlayIcon";
    import GithubIcon from "@/components/icons/GithubIcon";
    import DownloadIcon from "@/components/icons/DownloadIcon";
    import StripeIcon from "@/components/icons/StripeIcon";
    import PayPalIcon from "@/components/icons/PayPalIcon";
    import DockerIcon from "@/components/icons/DockerIcon";

    export default defineComponent({
        name: "DynamicIcon",
        components: {
            VueIcon,
            JavaScriptIcon,
            AWSIcon,
            HTMLIcon,
            WebIcon,
            PHPIcon,
            WindowsIcon,
            MacIcon,
            ReactIcon,
            JavaIcon,
            PythonIcon,
            ChromeIcon,
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
            MongoDBIcon,
            StylusIcon,
            HandlebarsIcon,
            GameBoyAdvanceIcon,
            GooglePlayIcon,
            GithubIcon,
            DownloadIcon,
            StripeIcon,
            PayPalIcon,
            DockerIcon
        },
        props: {
            icon: {
                type: String,
                required: true
            }
        },
        computed: {
            iconName() {
                let startsWith = ["AWS", "Vue", "Chrome"];
                let equalTo = {
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
                let endsWith = {
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

<style lang="stylus"></style>
