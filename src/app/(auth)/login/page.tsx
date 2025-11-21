"use client";

import React, { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import SignInForm, { SignInFormData } from "../components/SignInForm";

export default function SignInPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (data: SignInFormData) => {
    setIsLoading(true);
    try {
      console.log("Sign in data:", { ...data, rememberMe });
      await new Promise((resolve) => setTimeout(resolve, 1500));
    } catch (error) {
      console.error("Sign in error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="w-full lg:max-w-[526px] mx-auto px-4 md:px-0">
        <h1 className="text-[24px] md:text-[32px] font-bold text-yellow-400 mb-6 lg:mb-[53px]">
          Welcome Back
        </h1>
        <SignInForm
          onSubmit={handleSubmit}
          isLoading={isLoading}
          rememberMe={rememberMe}
          onRememberMeChange={setRememberMe}
        />
      </div>
    </AuthLayout>
  );
}