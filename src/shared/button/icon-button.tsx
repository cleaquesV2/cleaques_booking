import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonFormProps {
  startArdornment?: React.ReactNode;
  endArdornment?: React.ReactNode;
}

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonFormProps {}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(({ children, type, className, ...props }, ref) => {
  return (
    <button type={type || "button"} {...props} ref={ref} className={twMerge("p-1 h-max rounded-full hover:bg-gray-400", className)}>
      {children}
    </button>
  );
});

IconButton.displayName = "IconButton";
