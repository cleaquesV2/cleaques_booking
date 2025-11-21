"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import AuthLayout from "../components/AuthLayout";
import CreateNewPasswordForm from "../components/CreateNewPasswordForm";

export default function CreateNewPasswordPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data: { password: string; confirmPassword: string }) => {
    setIsLoading(true);
    try {
      console.log("New password:", data.password);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      router.push("/booking/auth/signin");
    } catch (error) {
      console.error("Password reset error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout>
      <CreateNewPasswordForm onSubmit={handleSubmit} isLoading={isLoading} />
    </AuthLayout>
  );
}