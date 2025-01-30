import AndroidIcon from "@/src/components/icons/AndroidIcon.tsx";
import AngularIcon from "@/src/components/icons/AngularIcon.tsx";
import APIIcon from "@/src/components/icons/APIIcon.tsx";
import AWSIcon from "@/src/components/icons/AWSIcon.tsx";
import ChromeIcon from "@/src/components/icons/ChromeIcon.tsx";
import CordovaIcon from "@/src/components/icons/CordovaIcon.tsx";
import CsharpIcon from "@/src/components/icons/CsharpIcon.tsx";
import CSSIcon from "@/src/components/icons/CSSIcon.tsx";
import DockerIcon from "@/src/components/icons/DockerIcon.tsx";
import ElectronIcon from "@/src/components/icons/ElectronIcon.tsx";
import GameBoyAdvanceIcon from "@/src/components/icons/GameBoyAdvanceIcon.tsx";
import GitHubIcon from "@/src/components/icons/GitHubIcon.tsx";
import GooglePlayIcon from "@/src/components/icons/GooglePlayIcon.tsx";
import HTMLIcon from "@/src/components/icons/HTMLIcon.tsx";
import JavaIcon from "@/src/components/icons/JavaIcon.tsx";
import JavaScriptIcon from "@/src/components/icons/JavaScriptIcon.tsx";
import LinuxIcon from "@/src/components/icons/LinuxIcon.tsx";
import MacIcon from "@/src/components/icons/MacIcon.tsx";
import MDXIcon from "@/src/components/icons/MDXIcon.tsx";
import MongoDBIcon from "@/src/components/icons/MongoDBIcon.tsx";
import MySQLIcon from "@/src/components/icons/MySQLIcon.tsx";
import NETIcon from "@/src/components/icons/NETIcon.tsx";
import NextjsIcon from "@/src/components/icons/NextjsIcon.tsx";
import NodeIcon from "@/src/components/icons/NodeIcon.tsx";
import PayPalIcon from "@/src/components/icons/PayPalIcon.tsx";
import PHPIcon from "@/src/components/icons/PHPIcon.tsx";
import PrismaIcon from "@/src/components/icons/PrismaIcon.tsx";
import ProcessingIcon from "@/src/components/icons/ProcessingIcon.tsx";
import PythonIcon from "@/src/components/icons/PythonIcon.tsx";
import ReactIcon from "@/src/components/icons/ReactIcon.tsx";
import SassIcon from "@/src/components/icons/SassIcon.tsx";
import StripeIcon from "@/src/components/icons/StripeIcon.tsx";
import StylusIcon from "@/src/components/icons/StylusIcon.tsx";
import TailwindIcon from "@/src/components/icons/TailwindIcon.tsx";
import TwitterIcon from "@/src/components/icons/TwitterIcon.tsx";
import TypeScriptIcon from "@/src/components/icons/TypeScriptIcon.tsx";
import VueIcon from "@/src/components/icons/VueIcon.tsx";
import WebIcon from "@/src/components/icons/WebIcon.tsx";
import WindowsIcon from "@/src/components/icons/WindowsIcon.tsx";
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
