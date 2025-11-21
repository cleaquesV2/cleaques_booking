"use client";

import React from "react";
import { Check, X } from "lucide-react";

interface PasswordRequirement {
  label: string;
  isValid: boolean;
}

interface PasswordValidationProps {
  requirements: PasswordRequirement[];
}

export default function PasswordValidation({ requirements }: PasswordValidationProps) {
  return (
    <div className="flex flex-wrap gap-4 mt-2">
      {requirements.map((req, index) => (
        <div key={index} className="flex items-center gap-2">
          {req.isValid ? (
            <Check className="w-4 h-4 text-green-500" strokeWidth={3} />
          ) : (
            <X className="w-4 h-4 text-red-500" strokeWidth={3} />
          )}
          <span className={`text-sm ${req.isValid ? "text-green-500" : "text-white"}`}>
            {req.label}
          </span>
        </div>
      ))}
    </div>
  );
}

// Helper function to validate password requirements
export function validatePasswordRequirements(password: string) {
  return {
    hasUppercase: /[A-Z]/.test(password),
    hasNumber: /\d/.test(password),
    hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };
}

