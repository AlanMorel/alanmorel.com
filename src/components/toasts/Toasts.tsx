import ToastContainer from "@/src/components/toasts/ToastContainer";
import { InfoIcon } from "lucide-react";
import toast from "react-hot-toast";

export const showInfoToast = (message: string): void => {
    toast.custom(instance => <ToastContainer instance={instance} Icon={InfoIcon} message={message} />);
};
