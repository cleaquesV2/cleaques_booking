"use client";

import React, { useState } from "react";
import AuthInput from "./AuthInput";
import AuthButton from "./AuthButton";

interface ForgotPasswordFormProps {
  onSubmit?: (data: { email: string }) => void;
  isLoading?: boolean;
}

export default function ForgotPasswordForm({
  onSubmit,
  isLoading = false,
}: ForgotPasswordFormProps) {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});

  const validate = (): boolean => {
    const newErrors: Partial<Record<string, string>> = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    onSubmit?.({ email: email.trim() });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full lg:max-w-[526px] mx-auto px-4 md:px-0">
      <h1 className="text-[24px] md:text-[32px] font-bold text-yellow-400 mb-6">
        Recover Your Password
      </h1>
      <p className="text-gray-300 text-sm md:text-base mb-8">
        Enter your email account to recover your password
      </p>

      <div className="mb-6">
        <AuthInput
          label="Email Address"
          type="email"
          placeholder="Enter your email address e.g Johndoe@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
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



