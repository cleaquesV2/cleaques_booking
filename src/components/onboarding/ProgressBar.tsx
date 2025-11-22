"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  stepLabels: string[];
}

export default function ProgressBar({ currentStep, totalSteps, stepLabels }: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="relative w-full">
      <div className="w-full h-[7px] bg-gray-700 rounded"></div>
      <motion.div
        className="absolute top-0 h-[7px] rounded"
        style={{
          background: "linear-gradient(to right, #d4a017 0%, #f7c31f 50%, #f7c31f 100%)",
        }}
        initial={{ width: `${((currentStep - 1) / totalSteps) * 100}%` }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: "easeInOut" }} 
      ></motion.div>

      <div className="flex justify-between mt-4 text-[10px] text-gray-400 lg:hidden">
        {stepLabels.map((label, index) => (
          <span
            key={index}
            className={index + 1 === currentStep ? "text-[#F7C31F] font-medium" : ""}
          >
            {label}
          </span>
        ))}
      </div>
      <div className="hidden lg:flex justify-between mt-4 text-sm text-gray-400">
        {stepLabels.map((label, index) => (
          <span
            key={index}
            className={index + 1 === currentStep ? "text-[#F7C31F] font-medium" : ""}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

