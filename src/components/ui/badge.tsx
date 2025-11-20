"use client"

import { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

export type BadgeVariant = "default" | "success" | "warning" | "error" | "secondary"

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant
}

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-gray-100 text-gray-800",
  success: "bg-green-100 text-green-700",
  warning: "bg-yellow-100 text-yellow-800",
  error: "bg-red-100 text-red-700",
  // secondary: "bg-purple-100 text-purple-800",
  // secondary: "bg-purple-600 text-white",
  secondary: "bg-white bg-opacity-10 text-white border border-white/20 backdrop-blur-sm",
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium shadow-sm",
        variantClasses[variant],
        className
      )}
      {...props}
    />
  )
};

//usage
{/* <Badge variant="success">
  Excellent!
</Badge> */}