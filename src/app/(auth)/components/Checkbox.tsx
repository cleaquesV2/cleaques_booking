"use client";

import React, { InputHTMLAttributes } from "react";
import { Check } from "lucide-react";

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  error?: string;
}

export default function Checkbox({
  label,
  error,
  checked,
  className = "",
  ...props
}: CheckboxProps) {
  return (
    <div className="w-full">
      <label className="flex items-center gap-3 cursor-pointer group">
        <div className="relative">
          <input
            type="checkbox"
            checked={checked}
            className="sr-only"
            {...props}
          />
          <div
            className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
              checked
                ? "bg-[#0A2625] border-[#0A2625]"
                : "bg-transparent border-[#545352]"
            } ${className}`}
            style={!checked ? { backgroundColor: "transparent" } : undefined}
          >
            {checked && (
              <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
            )}
          </div>
        </div>
        {label && (
          <span className="text-gray-300 text-[14px] sm:text-sm group-hover:text-white transition-colors">
            {label}
          </span>
        )}
      </label>
      {error && (
        <p className="mt-1 text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

