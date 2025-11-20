"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import AuthLayout from "../components/AuthLayout";
import SignUpForm, { SignUpFormData } from "../components/SignUpForm";

export default function SignUpPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data: SignUpFormData) => {
    setIsLoading(true);
    try {
      console.log("Sign up data:", data);
      await new Promise((resolve) => setTimeout(resolve, 1500));
    } catch (error) {
      console.error("Sign up error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout>
      <SignUpForm onSubmit={handleSubmit} isLoading={isLoading} />
    </AuthLayout>
  );
}
