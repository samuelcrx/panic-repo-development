import { toast, ToastOptions } from "react-toastify";

const useToast = () => {
  const showToast = (message: string, options?: ToastOptions) => {
    toast(message, options);
  };

  return { showToast };
};

export default useToast;
