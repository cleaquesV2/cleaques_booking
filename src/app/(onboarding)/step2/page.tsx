"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

export default function OnboardingStep2() {
  const router = useRouter();
  const [selected, setSelected] = useState<string[]>([]);

  const experiences = [
    "Water Adventures",
    "Fashion",
    "Festivals",
    "Adventure & Outdoor",
    "History & Monuments",
    "Beach Escapes",
    "Local Guide Tour",
    "Food",
    "Arts & Culture",
    "Urban Exploration",
    "Sport",
    "Photography Spots",
    "Nature & Wildlife",
    "Nightlife",
    "Music",
  ];

  const toggle = (item: string) => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]
    );
  };

  const handleContinue = () => {
    router.push("/step3");
  };

  const handlePrevious = () => {
    router.push("/step1");
  };

  const handleSkip = () => {
    router.push("/step3");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-[#10180d] text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none border-[0.1px] border-[#6b550e] rounded-[30px] mx-[20px] my-[20px] sm:mx-[25px] sm:my-[26px] lg:mx-[30px] lg:my-[31px]"></div>

      <div className="hidden lg:block">
        <div className="py-[80px] px-[74px] flex items-center justify-between">
          <Image
            src="/assets/svgs/CleaquesLogo.svg"
            alt="CLEAQUES logo"
            width={210}
            height={32}
            className="w-auto h-auto"
          />
          <button
            onClick={handleSkip}
            className="text-[#FDF3E2] hover:text-cyan-300 font-medium text-[24px] transition-colors"
          >
            Skip
          </button>
        </div>
        <div className="mx-8 md:mt-8 p-12">
          <div className="relative w-full max-w-3xl mx-auto mb-12">
            <div className="w-full h-1 bg-gray-700 rounded"></div>

            <motion.div
              className="absolute top-0 h-1 bg-[#F7C31F] rounded"
              initial={{ width: "33%" }}
              animate={{ width: "66%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            ></motion.div>

            <div className="flex justify-between mt-4 text-sm text-gray-400">
              <span>Basic Info</span>
              <span className="text-[#F7C31F]">Travel Interest</span>
              <span>Travel Info</span>
            </div>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <h1 className="text-[32px] font-[400] text-[#F7C31F] mb-2">
              What kind of experiences do you enjoy?
            </h1>
            <p className="text-[#FDF3E2] text-[16px]">
              Select the categories that excite you the most
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto grid grid-cols-3 gap-4"
          >
            {experiences.map((item, index) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.03 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggle(item)}
                className={`
                  w-full px-4 py-3 rounded-[100px] border text-sm transition-all
                  ${
                    selected.includes(item)
                      ? "border-[#F7C31F] bg-[#F7C31F]/10 text-[#F7C31F]"
                      : "border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-300"
                  }
                `}
              >
                {item}
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-between max-w-3xl mx-auto mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrevious}
              className="px-8 py-3 border border-gray-600 rounded-[100px] text-gray-300 hover:border-cyan-300 transition-colors"
            >
              Previous
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContinue}
              className="px-8 py-3 bg-[#0D3B45] hover:bg-cyan-600 text-black font-semibold rounded-[100px] transition-all"
            >
              Continue
            </motion.button>
          </motion.div>
        </div>
      </div>

      <div className="lg:hidden min-h-screen flex flex-col px-[20px] py-[24px]">
        <div className="flex items-center justify-between mb-6 px-5 pt-5">
          <Image
            src="/assets/svgs/Cleaques.svg"
            alt="CLEAQUES logo"
            width={150}
            height={28}
            className="w-auto h-auto"
          />
          <button
            onClick={handleSkip}
            className="text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors"
          >
            Skip
          </button>
        </div>

        <div className="relative w-full max-w-md mx-auto mb-8 mt-2 px-5">
          <div className="w-full h-1 bg-gray-700 rounded"></div>

          <motion.div
            className="absolute top-0 h-1 bg-[#F7C31F] rounded"
            initial={{ width: "33%" }}
            animate={{ width: "66%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>

          <div className="flex justify-between mt-4 text-[10px] text-gray-400">
            <span>Basic Info</span>
            <span className="text-[#F7C31F]">Travel Interest</span>
            <span>Travel Info</span>
          </div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex-1 flex flex-col px-5 py-5"
        >
          <h1 className="text-xl font-light text-[#f4c430] mb-2 text-center">
            What kind of experiences do you enjoy?
          </h1>
          <p className="text-gray-400 text-xs text-center mb-6">
            Select the categories that excite you the most
          </p>

          <div className="grid grid-cols-2 gap-3 flex-1 overflow-y-auto">
            {experiences.map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggle(item)}
                className={`
                  w-full px-3 py-2 rounded border text-xs transition-all
                  ${
                    selected.includes(item)
                      ? "border-[#F7C31F] bg-[#F7C31F]/10 text-[#F7C31F]"
                      : "border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-300"
                  }
                `}
              >
                {item}
              </motion.button>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleContinue}
            className="w-full mt-6 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-2 rounded text-sm transition-colors"
          >
            Continue
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}
