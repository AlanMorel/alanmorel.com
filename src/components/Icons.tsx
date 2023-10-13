import AndroidIcon from "@/src/components/icons/AndroidIcon";
import AngularIcon from "@/src/components/icons/AngularIcon";
import APIIcon from "@/src/components/icons/APIIcon";
import AWSIcon from "@/src/components/icons/AWSIcon";
import ChromeIcon from "@/src/components/icons/ChromeIcon";
import CordovaIcon from "@/src/components/icons/CordovaIcon";
import CsharpIcon from "@/src/components/icons/CsharpIcon";
import CSSIcon from "@/src/components/icons/CSSIcon";
import DockerIcon from "@/src/components/icons/DockerIcon";
import ElectronIcon from "@/src/components/icons/ElectronIcon";
import GameBoyAdvanceIcon from "@/src/components/icons/GameBoyAdvanceIcon";
import GitHubIcon from "@/src/components/icons/GitHubIcon";
import GooglePlayIcon from "@/src/components/icons/GooglePlayIcon";
import HTMLIcon from "@/src/components/icons/HTMLIcon";
import JavaIcon from "@/src/components/icons/JavaIcon";
import JavaScriptIcon from "@/src/components/icons/JavaScriptIcon";
import LinuxIcon from "@/src/components/icons/LinuxIcon";
import MacIcon from "@/src/components/icons/MacIcon";
import MDXIcon from "@/src/components/icons/MDXIcon";
import MongoDBIcon from "@/src/components/icons/MongoDBIcon";
import MySQLIcon from "@/src/components/icons/MySQLIcon";
import NETIcon from "@/src/components/icons/NETIcon";
import NextjsIcon from "@/src/components/icons/NextjsIcon";
import NodeIcon from "@/src/components/icons/NodeIcon";
import PayPalIcon from "@/src/components/icons/PayPalIcon";
import PHPIcon from "@/src/components/icons/PHPIcon";
import PrismaIcon from "@/src/components/icons/PrismaIcon";
import ProcessingIcon from "@/src/components/icons/ProcessingIcon";
import PythonIcon from "@/src/components/icons/PythonIcon";
import ReactIcon from "@/src/components/icons/ReactIcon";
import SassIcon from "@/src/components/icons/SassIcon";
import StripeIcon from "@/src/components/icons/StripeIcon";
import StylusIcon from "@/src/components/icons/StylusIcon";
import TailwindIcon from "@/src/components/icons/TailwindIcon";
import TwitterIcon from "@/src/components/icons/TwitterIcon";
import TypeScriptIcon from "@/src/components/icons/TypeScriptIcon";
import VueIcon from "@/src/components/icons/VueIcon";
import WebIcon from "@/src/components/icons/WebIcon";
import WindowsIcon from "@/src/components/icons/WindowsIcon";
import { ReactElement } from "react";

export default function getIcon(slug: string): ReactElement {
    switch (slug) {
        case "android":
            return <AndroidIcon />;
        case "angular":
            return <AngularIcon />;
        case "news api":
        case "facebook api":
        case "facebook sdk":
        case "twitter sdk":
        case "imgur api":
        case "twitter api":
        case "igdb api":
        case "steam api":
        case "twitch api":
        case "pokéapi":
        case "chrome api":
        case "assembly":
            return <APIIcon />;
        case "aws s3":
        case "aws cloudfront":
        case "aws route 53":
        case "aws ses":
            return <AWSIcon />;
        case "cordova":
            return <CordovaIcon />;
        case "chrome":
            return <ChromeIcon />;
        case "c#":
            return <CsharpIcon />;
        case "css":
            return <CSSIcon />;
        case "docker":
            return <DockerIcon />;
        case "electron":
            return <ElectronIcon />;
        case "game boy advance":
            return <GameBoyAdvanceIcon />;
        case "github":
            return <GitHubIcon />;
        case "google play":
            return <GooglePlayIcon />;
        case "html":
            return <HTMLIcon />;
        case "java":
        case "libgdx":
            return <JavaIcon />;
        case "javascript":
            return <JavaScriptIcon />;
        case "linux":
            return <LinuxIcon />;
        case "mac":
            return <MacIcon />;
        case "mdx":
            return <MDXIcon />;
        case "mongodb":
            return <MongoDBIcon />;
        case "mysql":
            return <MySQLIcon />;
        case "next.js":
            return <NextjsIcon />;
        case "asp.net":
        case ".net":
            return <NETIcon />;
        case "express":
        case "handlebars.js":
        case "socket.io":
        case "node":
            return <NodeIcon />;
        case "paypal":
            return <PayPalIcon />;
        case "php":
            return <PHPIcon />;
        case "prisma":
            return <PrismaIcon />;
        case "processing":
            return <ProcessingIcon />;
        case "python":
        case "flask":
        case "pil":
        case "requests":
            return <PythonIcon />;
        case "react":
            return <ReactIcon />;
        case "sass":
            return <SassIcon />;
        case "stripe":
            return <StripeIcon />;
        case "stylus":
            return <StylusIcon />;
        case "tailwind":
            return <TailwindIcon />;
        case "twitter":
            return <TwitterIcon />;
        case "typescript":
            return <TypeScriptIcon />;
        case "web":
            return <WebIcon />;
        case "windows":
            return <WindowsIcon />;
        case "vue":
        case "vuex":
        case "vue router":
            return <VueIcon />;
    }

    return <TwitterIcon />;
}
