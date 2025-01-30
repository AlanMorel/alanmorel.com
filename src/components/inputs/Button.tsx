"use client";

import tw from "@/src/components/other/TailwindHelper.ts";
import { ButtonHTMLAttributes, DetailedHTMLProps, MouseEvent, ReactElement } from "react";

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: string;
    variant: "primary" | "secondary" | "tertiary";
    className?: string;
    onClick?: () => void;
}

const variants = {
    primary: {
        textColor: "text-white",
        bgColor: "bg-slate-600",
        borderColor: "border-slate-600",
        borderHoverColor: "hover:border-slate-700",
        bgHoverColor: "hover:bg-slate-700"
    },
    secondary: {
        textColor: "text-slate-900",
        bgColor: "bg-slate-200",
        borderColor: "border-slate-200",
        borderHoverColor: "hover:border-slate-300",
        bgHoverColor: "hover:bg-slate-300"
    },
    tertiary: {
        textColor: "text-black",
        bgColor: "bg-white",
        borderColor: "border-white",
        borderHoverColor: "hover:border-slate-200",
        bgHoverColor: "hover:bg-slate-200"
    }
};

export default function Button(props: Readonly<Props>): ReactElement {
    const { onClick, children, className } = props;
    let { type } = props;

    if (!type) {
        type = "button";
    }

    const intent = variants[props.variant];

    const classes = [
        className,
        intent.bgColor,
        intent.borderColor,
        "border",
        "px-4",
        "py-2",
        "rounded-lg",
        "inline-flex",
        "justify-center",
        "items-center",
        "whitespace-nowrap",
        "transition",
        "duration-150",
        "text-base",
        "sm:text-base",
        "hover:cursor-pointer"
    ];

    classes.push(intent.textColor);

    function onClickHandler(e: MouseEvent): void {
        if (!onClick) {
            return;
        }

        e.preventDefault();
        onClick();
    }

    return (
        <button className={tw(classes)} onClick={onClickHandler} type={type}>
            {children}
        </button>
    );
}
