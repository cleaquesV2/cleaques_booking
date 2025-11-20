import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { Prettify } from "@/types/base.types";
import { cn } from "@/lib/utils";
import CircularProgress from "../circular-progress";

export type FormMicsProps = {
    helperText?: string | React.ReactNode;
    startAdornment?: React.ReactNode;
    endAdornment?: React.ReactNode;
    error?: boolean;
    label?: React.ReactNode;
};

const variants = cva(
    "active:ring-2 inline-flex items-center justify-center disabled:bg-primary-lighter disabled:text-slate-800 rounded-md hover:ring-0 font-medium transition-colors focus:outline-none dark:hover:text-slate-100 disabled:opacity-50 disabled:pointer-events-none dark:focus:ring-offset-slate-900 data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800",
    {
        variants: {
            size: {
                sm: "h-8 text-sm py-1 px-2 rounded-md leading-3", // Added 'sm' size
                small: "h-8 text-sm py-1 px-2 rounded-md leading-3",
                medium: "h-10 text-base py-2 px-4 rounded-md leading-5",
                large: "h-12 text-base py-3 px-6 rounded-md leading-5",
            },
            variant: {
                contained: "",
                outlined: "border",
                text: "",
                icon: " rounded-full",
                ghost: "bg-transparent hover:bg-gray-700", // Added 'ghost' variant
            },
            color: {
                primary: "bg-#00AEEF text-white",
                secondary: "",
                tertiary: "",
                white: "bg-white text-#00AEEF",
                black: "",
                error: "bg-red-700 text-white",
                success: "",
                info: "bg-amber-600 text-white",
                warning: "bg-amber-600 text-white",
                default: "",
            },
        },
        defaultVariants: {
            size: "medium",
            variant: "contained",
            color: "primary",
        },
        compoundVariants: [
            {
                variant: "contained",
                color: "primary",
                class: "bg-#00AEEF text-white hover:shadow-lg hover:bg-primary-dark",
            },
            {
                variant: "contained",
                color: "error",
                class: "bg-red-700 text-white hover:shadow-lg hover:bg-red-900",
            },
            {
                variant: "contained",
                color: "success",
                class: "bg-green-600 text-white hover:shadow-lg hover:bg-green-200",
            },
            {
                variant: "outlined",
                color: "primary",
                class:
                    "border-#00AEEF hover:shadow-lg hover:bg-primary-lighter text-#00AEEF bg-transparent",
            },
            {
                variant: "outlined",
                color: "error",
                class:
                    "border-red-700 hover:shadow-lg hover:bg-red-100 text-red-700 bg-transparent",
            },
            {
                variant: "text",
                color: "secondary",
                class:
                    "border-[0.5px] border-[#E7EFFF] bg-[#F6F9FF] text-[#383C42] hover:bg-[#E7EFFF] shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)]",
            },
            {
                variant: "text",
                color: "primary",
                class:
                    " bg-transparent text-primary-main hover:bg-[#E7EFFF] hover:shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)]",
            },
        ],
    }
);

type Props = Prettify<
    React.ComponentProps<"button"> &
    Omit<FormMicsProps, "helperText"> &
    VariantProps<typeof variants> & {
    loading?: boolean;
    loadingColor?: string;
    ContainerSpanProps?: React.ComponentProps<"span">;
}
>;

const Button = React.forwardRef<HTMLButtonElement, Props>(function Button(
    {
        children,
        startAdornment,
        endAdornment,
        loading = false,
        color,
        className,
        size,
        variant,
        error,
        ContainerSpanProps,
        ...rest
    },
    ref
) {
    return (
        <button
            ref={ref}
            data-app-error={!!error}
            className={cn(
                "data-[app-error=true]:border data-[app-error=true]:border-red-300 rounded-md",
                variants({ size, color, variant, className })
            )}
            {...rest}
            disabled={loading || rest.disabled}
        >
            {startAdornment && startAdornment}
            <span
                className={cn(
                    "pl-2 pr-2 flex-1 flex justify-center font-medium",
                    ContainerSpanProps?.className
                )}
            >
        {loading ? <CircularProgress size={22} /> : children}
      </span>
            {endAdornment && endAdornment}
        </button>
    );
});

export default Button;
