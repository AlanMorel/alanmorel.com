import ToastContainer from "@/src/components/toasts/ToastContainer";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import toast from "react-hot-toast";

export const showInfoToast = (message: string): void => {
    toast.custom(instance => <ToastContainer instance={instance} Icon={InformationCircleIcon} message={message} />);
};
