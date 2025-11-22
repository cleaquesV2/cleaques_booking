"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ProgressBar from "./ProgressBar";

interface OnboardingLayoutProps {
  currentStep: number;
  totalSteps: number;
  stepLabels: string[];
  onSkip?: () => void;
  children: React.ReactNode;
  mobileChildren?: React.ReactNode;
  title: string;
  subtitle: string;
  mobileTitle?: string;
  mobileSubtitle?: string;
}

export default function OnboardingLayout({
  currentStep,
  totalSteps,
  stepLabels,
  onSkip,
  children,
  mobileChildren,
  title,
  subtitle,
  mobileTitle,
  mobileSubtitle,
}: OnboardingLayoutProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-[#10180d] text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none border-[0.1px] border-[#6b550e] rounded-[30px] mx-[20px] my-[20px] sm:mx-[25px] sm:my-[26px] lg:mx-[30px] lg:my-[31px]"></div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="pt-[80px] pb-[65px] px-[74px] flex items-center justify-between">
          <Image
            src="/assets/svgs/CleaquesLogo.svg"
            alt="CLEAQUES logo"
            width={210}
            height={32}
            className="w-auto h-auto"
            priority
          />

          {onSkip && (
            <button
              onClick={onSkip}
              className="text-[#FDF3E2] hover:text-cyan-300 font-medium text-[24px] transition-colors"
            >
              Skip
            </button>
          )}
        </div>

        <div className="mx-8 md:mt-8 px-12">
          <div className="relative w-full mx-auto mb-24">
            <ProgressBar
              currentStep={currentStep}
              totalSteps={totalSteps}
              stepLabels={stepLabels}
            />
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <h1 className="text-[32px] font-[600] text-[#F7C31F] mb-2">
              {title}
            </h1>
            <p className="text-[#FDF3E2] text-[16px]">
              {subtitle}
            </p>
          </motion.div>

          {children}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden min-h-screen flex flex-col px-[20px] py-[24px] relative">
        <div className="flex items-center justify-between mb-6 px-5 pt-5">
          <Image
            src="/assets/svgs/Cleaques.svg"
            alt="CLEAQUES logo"
            width={150}
            height={28}
            className="w-auto h-auto"
            priority
          />
          {onSkip && (
            <button
              onClick={onSkip}
              className="text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors"
            >
              Skip
            </button>
          )}
        </div>

        <div className="relative w-full mx-auto mb-8 mt-2 px-5">
          <ProgressBar
            currentStep={currentStep}
            totalSteps={totalSteps}
            stepLabels={stepLabels}
          />
        </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-1 flex flex-col px-5 py-5"
          >
          <h1 className="text-xl font-[600] text-[#f4c430] mb-2 text-center">
            {mobileTitle || title}
          </h1>
          <p className="text-[#FDF3E2] font-[400] text-[12px] text-center mb-6">
            {mobileSubtitle || subtitle}
          </p>

          {mobileChildren || children}
        </motion.div>
      </div>
    </motion.div>
  );
}

