"use client";

import React, { useState } from "react";
import AccountTypeSelector, { AccountType } from "./AccountTypeSelector";
import AuthInput from "./AuthInput";
import AuthButton from "./AuthButton";
import Checkbox from "./Checkbox";

interface SignUpFormProps {
  onSubmit?: (data: SignUpFormData) => void;
  isLoading?: boolean;
}

export interface SignUpFormData {
  accountType: AccountType;
  fullName: string;
  email: string;
  password: string;
  agreeToTerms: boolean;
}

export default function SignUpForm({
  onSubmit,
  isLoading = false,
}: SignUpFormProps) {
  const [accountType, setAccountType] = useState<AccountType>("traveler");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof SignUpFormData, string>>>({});

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof SignUpFormData, string>> = {};

    if (!fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    onSubmit?.({
      accountType,
      fullName: fullName.trim(),
      email: email.trim(),
      password,
      agreeToTerms,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full lg:max-w-[526px] mx-auto px-4 md:px-0">
      <h1 className="text-[24px] md:text-[32px] font-bold text-yellow-400 mb-6 lg:mb-[53px]">
        Create an Account
      </h1>
      <AccountTypeSelector
        selectedType={accountType}
        onSelect={setAccountType}
      />
      <div className="mb-4">
        <AuthInput
          label="FullName"
          type="text"
          placeholder="Enter your full name e.g. John Doe"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          error={errors.fullName}
          required
        />
      </div>
      <div className="mb-4">
        <AuthInput
          label="Email Address"
          type="email"
          placeholder="Enter your email address e.g. johndoe@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
          required
        />
      </div>
      <div className="mb-[24px]">
        <AuthInput
        label="Create Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
          showPasswordToggle
          required
        />
      </div>

      <div className="mb-[30px]">
        <Checkbox
          checked={agreeToTerms}
          onChange={(e) => setAgreeToTerms(e.target.checked)}
          label="Agree to Cleaques Terms and Conditions and Use of Privacy Policy"
          error={errors.agreeToTerms}
        />
      </div>

      <div className="mb-4">
        <AuthButton
          type="submit"
          variant="primary"
          isLoading={isLoading}
          className="bg-[#0A2625] hover:bg-teal-700"
        >
          Sign Up
        </AuthButton>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <div className="flex-1 h-px bg-gray-700" />
        <span className="text-gray-400 text-sm">Or continue with</span>
        <div className="flex-1 h-px bg-gray-700" />
      </div>

      {/* Google Sign In Button */}
      <div className="mb-6">
        <AuthButton
          type="button"
          variant="google"
          onClick={() => {
            // Handle Google sign in
            console.log("Google sign in clicked");
          }}
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          Google
        </AuthButton>
      </div>

      {/* Sign In Link */}
      <p className="text-center text-[14px] sm:text-base text-gray-400">
        Already have an account?{" "}
        <a
          href="/login"
          className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
        >
          Sign In
        </a>
      </p>
    </form>
  );
}

