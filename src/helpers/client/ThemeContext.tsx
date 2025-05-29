import { themeAtom } from "@/src/atoms/ThemeAtom.ts";
import { useAtom } from "jotai";
import { ReactElement, ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function ThemeContext(props: Readonly<Props>): ReactElement {
    const { children } = props;

    const [theme] = useAtom(themeAtom);

    return <div data-theme={theme}>{children}</div>;
}
