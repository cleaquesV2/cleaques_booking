"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import AuthLayout from "../components/AuthLayout";
import ForgotPasswordForm from "../components/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data: { email: string }) => {
    setIsLoading(true);
    try {
      console.log("Forgot password for:", data.email);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      router.push("/otp");
    } catch (error) {
      console.error("Forgot password error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout>
      <ForgotPasswordForm onSubmit={handleSubmit} isLoading={isLoading} />
    </AuthLayout>
  );
}