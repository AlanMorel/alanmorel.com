import ToastContainer from "@/src/components/toasts/ToastContainer.tsx";
import { InfoIcon } from "lucide-react";
import type { Toast } from "react-hot-toast";
import toast from "react-hot-toast";

export const showInfoToast = (message: string): void => {
    toast.custom((instance: Toast) => <ToastContainer Icon={InfoIcon} instance={instance} message={message} />);
};
