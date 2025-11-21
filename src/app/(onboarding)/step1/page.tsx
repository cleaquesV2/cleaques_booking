"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { Country } from "country-state-city";
import { motion, AnimatePresence } from "framer-motion";

export default function OnboardingPage() {
  const router = useRouter();
  const [country, setCountry] = useState("");
  const [visited, setVisited] = useState("");
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showVisitedDropdown, setShowVisitedDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const countries = Country.getAllCountries();
  const visitedOptions = ["Yes", "No"];


  const filteredCountries = countries.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowCountryDropdown(false);
        setShowVisitedDropdown(false);
        setSearchTerm("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleContinue = () => {
    router.push("/step2");
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
            priority
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
              animate={{ width: "33%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            ></motion.div>

            <div className="flex justify-between mt-4 text-sm text-gray-400">
              <span className="text-[#F7C31F] font-medium">Basic Info</span>
              <span>Travel Interest</span>
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
              Let&apos;s personalize your travel experience
            </h1>
            <p className="text-[#FDF3E2] text-[16px]">
              Kindly answer a few questions so we can plan your next trip
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto space-y-8"
          >
            <div ref={dropdownRef} className="relative">
              <label className="block text-[16px] text-[#FDF3E2] mb-3">
                Where do you currently reside?
              </label>
              <button
                onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-[12px] text-left text-gray-300 flex items-center justify-between hover:border-cyan-400 transition-colors"
              >
                <span>{country || "Select country"}</span>
                <ChevronDown size={20} className="text-gray-400" />
              </button>

              <AnimatePresence>
                {showCountryDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-[#0f1419] border border-gray-600 rounded shadow-lg z-10 max-h-[300px] overflow-hidden flex flex-col"
                  >
                    <input
                      type="text"
                      placeholder="Search country..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="px-4 py-2 bg-[#1a1f24] border-b border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                      onClick={(e) => e.stopPropagation()}
                    />
                    <div className="overflow-y-auto max-h-[250px]">
                      {filteredCountries.map((c) => (
                        <button
                          key={c.isoCode}
                          onClick={() => {
                            setCountry(c.name);
                            setShowCountryDropdown(false);
                            setSearchTerm("");
                          }}
                          className="w-full px-4 py-3 text-left text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors text-sm"
                        >
                          {c.name}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative">
              <label className="block text-[16px] text-[#FDF3E2] mb-3">
                Have you visited Nigeria or Caribbean before?
              </label>
              <button
                onClick={() => setShowVisitedDropdown(!showVisitedDropdown)}
                className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-[12px] text-left text-gray-300 flex items-center justify-between hover:border-cyan-400 transition-colors"
              >
                <span>{visited || "Select an option"}</span>
                <ChevronDown size={20} className="text-gray-400" />
              </button>

              <AnimatePresence>
                {showVisitedDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-[#0f1419] border border-gray-600 rounded shadow-lg z-10"
                  >
                    {visitedOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setVisited(option);
                          setShowVisitedDropdown(false);
                        }}
                        className="w-full px-4 py-3 text-left text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors text-sm"
                      >
                        {option}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleContinue}
              className="w-full mt-12 bg-[#0D3B45] hover:bg-cyan-600 text-[#0a0e14] font-semibold py-3 rounded transition-colors"
            >
              Continue
            </motion.button>
          </motion.div>
        </div>
      </div>

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
            animate={{ width: "33%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>

          <div className="flex justify-between mt-4 text-[10px] text-gray-400">
            <span className="text-[#F7C31F]">Basic Info</span>
            <span>Travel Interest</span>
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
            Let&apos;s personalize your travel experience
          </h1>
          <p className="text-gray-400 text-xs text-center mb-6">
            Kindly answer a few questions so we can plan your next trip
          </p>

          <div className="space-y-6 flex-1">
            <div ref={dropdownRef} className="relative">
              <label className="block text-xs text-gray-400 mb-2">
                Where do you currently reside?
              </label>
              <button
                onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                className="w-full px-3 py-2 bg-transparent border border-gray-600 rounded text-left text-gray-300 flex items-center justify-between hover:border-cyan-400 transition-colors text-sm"
              >
                <span>{country || "Select country"}</span>
                <ChevronDown size={16} className="text-gray-400" />
              </button>

              <AnimatePresence>
                {showCountryDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 right-0 mt-1 bg-[#0f1419] border border-gray-600 rounded shadow-lg z-20 max-h-[250px] overflow-hidden flex flex-col"
                  >
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="px-3 py-2 bg-[#1a1f24] border-b border-gray-600 text-white placeholder-gray-400 focus:outline-none text-xs"
                      onClick={(e) => e.stopPropagation()}
                    />
                    <div className="overflow-y-auto max-h-[200px]">
                      {filteredCountries.map((c) => (
                        <button
                          key={c.isoCode}
                          onClick={() => {
                            setCountry(c.name);
                            setShowCountryDropdown(false);
                            setSearchTerm("");
                          }}
                          className="w-full px-3 py-2 text-left text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors text-xs"
                        >
                          {c.name}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative">
              <label className="block text-xs text-gray-400 mb-2">
                Have you visited Nigeria or Caribbean before?
              </label>
              <button
                onClick={() => setShowVisitedDropdown(!showVisitedDropdown)}
                className="w-full px-3 py-2 bg-transparent border border-gray-600 rounded text-left text-gray-300 flex items-center justify-between hover:border-cyan-400 transition-colors text-sm"
              >
                <span>{visited || "Select an option"}</span>
                <ChevronDown size={16} className="text-gray-400" />
              </button>

              <AnimatePresence>
                {showVisitedDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 right-0 mt-1 bg-[#0f1419] border border-gray-600 rounded shadow-lg z-20"
                  >
                    {visitedOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setVisited(option);
                          setShowVisitedDropdown(false);
                        }}
                        className="w-full px-3 py-2 text-left text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors text-xs"
                      >
                        {option}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleContinue}
            className="w-full mt-6 bg-cyan-500 hover:bg-cyan-600 text-[#0a0e14] font-semibold py-2 rounded transition-colors text-sm"
          >
            Continue
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}
