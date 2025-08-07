// import react
import { div } from "framer-motion/client";
import { useCallback } from "react";
import { toast } from "react-toastify";
const config: Record<string, { color: string }> = {
  success: {
    color: "#10b981",
  },
  error: {
    color: "#ef4444",
  },
  warning: {
    color: "#f59e0b",
  },
  info: {
    color: "#3b82f6",
  },
};
export default function useCustomToast() {
  const showToast = useCallback((title?: string, message?: string, status?: "success" | "error" | "warning" | "info", duration?: number) => {
    toast(
      <div style={{ backgroundColor: config[status as string].color }} className={`w-full h-full p-2 text-white`}>
        <h2 className="font-bold">{title}</h2>
        <p >{message}</p>
      </div>
    );
  }, []);

  return showToast;
}
