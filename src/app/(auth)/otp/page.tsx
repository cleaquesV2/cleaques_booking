"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import AuthLayout from "../components/AuthLayout";
import RecoverPasswordOTPForm from "../components/RecoverPasswordOTPForm";

export default function OTPPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data: { otp: string; trustDevice: boolean }) => {
    setIsLoading(true);
    try {
      console.log("OTP:", data.otp, "Trust device:", data.trustDevice);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      router.push("/booking/auth/create-new-password");
    } catch (error) {
      console.error("OTP verification error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = () => {
    console.log("Resend OTP");
    // Handle resend logic
  };

  return (
    <AuthLayout>
      <RecoverPasswordOTPForm
        onSubmit={handleSubmit}
        isLoading={isLoading}
        onResend={handleResend}
        countdown={54}
      />
    </AuthLayout>
  );
}
