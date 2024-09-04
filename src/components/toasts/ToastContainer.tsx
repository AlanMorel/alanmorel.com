import tw from "@/src/components/other/TailwindHelper";
import { XIcon } from "lucide-react";
import { ForwardRefExoticComponent, ReactElement, SVGProps } from "react";
import toast, { Toast } from "react-hot-toast";

interface Props {
    instance: Toast;
    Icon: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref">>;
    message: string;
}

export default function ToastContainer(props: Props): ReactElement {
    const { instance, Icon, message } = props;

    const dismiss = (): void => toast.dismiss(instance.id);

    const animateClass = instance.visible ? "animate-enter" : "animate-leave";

    return (
        <div
            id="toast-default"
            className={tw(
                "flex w-full max-w-sm items-center rounded-lg bg-slate-600 p-4 text-slate-100 shadow",
                animateClass
            )}
            role="alert"
        >
            <div className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg text-white">
                <Icon className="size-8" />
            </div>
            <div className="mx-3 text-sm font-normal">{message}</div>
            <button
                type="button"
                className="-m-1.5 ml-auto inline-flex size-8 rounded-lg bg-slate-700 p-1.5 font-bold text-white transition hover:bg-slate-100 hover:text-slate-900 focus:ring-2 focus:ring-slate-300"
                data-dismiss-target="#toast-default"
                aria-label="Close"
                onClick={dismiss}
            >
                <XIcon className="h-full" />
            </button>
        </div>
    );
}
