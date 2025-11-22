"use client";

import React, { useState, useEffect } from "react";
import AuthInput from "./AuthInput";
import AuthButton from "./AuthButton";
import PasswordValidation, { validatePasswordRequirements } from "./PasswordValidation";

interface CreateNewPasswordFormProps {
  onSubmit?: (data: { password: string; confirmPassword: string }) => void;
  isLoading?: boolean;
}

export default function CreateNewPasswordForm({
  onSubmit,
  isLoading = false,
}: CreateNewPasswordFormProps) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});
  const [validation, setValidation] = useState({
    hasUppercase: false,
    hasNumber: false,
    hasSpecialChar: false,
  });

  useEffect(() => {
    if (password) {
      setValidation(validatePasswordRequirements(password));
    } else {
      setValidation({
        hasUppercase: false,
        hasNumber: false,
        hasSpecialChar: false,
      });
    }
  }, [password]);

  useEffect(() => {
    if (confirmPassword && password !== confirmPassword) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: "Passwords don't match. Please try again",
      }));
    } else {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.confirmPassword;
        return newErrors;
      });
    }
  }, [password, confirmPassword]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<string, string>> = {};

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!validation.hasUppercase || !validation.hasNumber || !validation.hasSpecialChar) {
      newErrors.password = "Password does not meet all requirements";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords don't match. Please try again";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    onSubmit?.({ password, confirmPassword });
  };

  const requirements = [
    { label: "At least 1 uppercase", isValid: validation.hasUppercase },
    { label: "At least 1 number", isValid: validation.hasNumber },
    { label: "At least 1 special character", isValid: validation.hasSpecialChar },
  ];

  return (
    <form onSubmit={handleSubmit} className="w-full lg:max-w-[526px] mx-auto px-4 md:px-0">
      <h1 className="text-[24px] md:text-[32px] font-bold text-yellow-400 mb-6 lg:mb-[53px]">
        Create New Password
      </h1>
      <p className="text-gray-300 text-sm md:text-base mb-8">
        Create a new password that you can easily remember
      </p>

      <div className="mb-4">
        <AuthInput
          label="Create Password"
          type="password"
          placeholder="Enter your new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
          showPasswordToggle
          required
        />
        {password && <PasswordValidation requirements={requirements} />}
      </div>

      <div className="mb-6">
        <AuthInput
          label="Re-enter Password"
          type="password"
          placeholder="Confirm your new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          error={errors.confirmPassword}
          showPasswordToggle
          required
        />
      </div>

      <div className="mb-4">
        <AuthButton
          type="submit"
          variant="primary"
          isLoading={isLoading}
          className="bg-[#0A2625] hover:bg-teal-700"
        >
          Recover Password
        </AuthButton>
      </div>
    </form>
  );
}



