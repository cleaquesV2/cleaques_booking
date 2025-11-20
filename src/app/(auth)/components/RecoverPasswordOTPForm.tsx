"use client";

import React, { useState, useEffect, useRef } from "react";
import AuthButton from "./AuthButton";
import Checkbox from "./Checkbox";

interface RecoverPasswordOTPFormProps {
  onSubmit?: (data: { otp: string; trustDevice: boolean }) => void;
  isLoading?: boolean;
  onResend?: () => void;
  countdown?: number;
}

export default function RecoverPasswordOTPForm({
  onSubmit,
  isLoading = false,
  onResend,
  countdown = 54,
}: RecoverPasswordOTPFormProps) {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [trustDevice, setTrustDevice] = useState(false);
  const [currentCountdown, setCurrentCountdown] = useState(countdown);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (currentCountdown > 0) {
      const timer = setTimeout(() => setCurrentCountdown(currentCountdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [currentCountdown]);

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d$/.test(value) && value !== "") return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const paste = e.clipboardData.getData("text");
    const pasteArray = paste.split("").slice(0, 6).filter((char) => /^\d$/.test(char));

    const newOtp = [...otp];
    pasteArray.forEach((char, index) => {
      if (index < 6) {
        newOtp[index] = char;
      }
    });
    setOtp(newOtp);

    // Focus the next empty input or the last one
    const nextIndex = pasteArray.length < 6 ? pasteArray.length : 5;
    inputRefs.current[nextIndex]?.focus();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const otpCode = otp.join("");
    if (otpCode.length !== 6) return;

    onSubmit?.({ otp: otpCode, trustDevice });
  };

  const handleResend = () => {
    setCurrentCountdown(54);
    onResend?.();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full lg:max-w-[526px] mx-auto px-4 md:px-0">
      <h1 className="text-[24px] md:text-[32px] text-center font-bold text-yellow-400 mb-6">
        Recover Your Password
      </h1>
      <p className="text-gray-300 text-center text-sm md:text-base mb-8">
        A 6-digit One Time Password (OTP) has been sent to your email address. Enter the code to
        recover your password.
      </p>

      <div className="mb-6">
        <label className="block text-[#7D7D7D] text-sm font-medium mb-3 text-center ">Enter 6-Digit Code</label>
        <div className="flex gap-2 justify-center">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              className="w-[76px] h-[76px] text-center text-xl font-bold bg-[#232a22] rounded-[10px] text-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 focus:outline-none transition-all"
              required
            />
          ))}
        </div>
      </div>

      {/* <div className="mb-6">
        <Checkbox
          checked={trustDevice}
          onChange={(e) => setTrustDevice(e.target.checked)}
          label="Trust this device"
        />
      </div> */}

      <div className="mb-4">
        <AuthButton
          type="submit"
          variant="primary"
          isLoading={isLoading}
          disabled={otp.join("").length !== 6}
          className="bg-[#0A2625] hover:bg-teal-700"
        >
          Continue
        </AuthButton>
      </div>

      <div className="text-center">
        <p className="text-gray-400 text-sm">
          Didn't get a code?{" "}
          {currentCountdown > 0 ? (
            <span className="text-gray-500">
              Resending in 0:{currentCountdown.toString().padStart(2, "0")}
            </span>
          ) : (
            <button
              type="button"
              onClick={handleResend}
              className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
            >
              Resend
            </button>
          )}
        </p>
      </div>
    </form>
  );
}

