"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Country } from "country-state-city";
import { motion } from "framer-motion";
import OnboardingLayout from "@/components/onboarding/OnboardingLayout";
import Dropdown from "@/components/onboarding/Dropdown";

const STEP_LABELS = ["Basic Info", "Travel Interest", "Travel Info"];

export default function OnboardingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);

  const [country, setCountry] = useState("");
  const [visited, setVisited] = useState("");

  const [selectedExperiences, setSelectedExperiences] = useState<string[]>([]);

  const [tripCountry, setTripCountry] = useState("");
  const [travelTime, setTravelTime] = useState("");

  const countries = Country.getAllCountries();
  const countryOptions = countries.map((c) => ({
    value: c.name,
    label: c.name,
  }));

  const visitedOptions = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ];

  const travelTimeOptions = [
    { value: "Within 1 month", label: "Within 1 month" },
    { value: "1-3 months", label: "1-3 months" },
    { value: "3-6 months", label: "3-6 months" },
    { value: "6-12 months", label: "6-12 months" },
    { value: "More than 1 year", label: "More than 1 year" },
  ];

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

  const toggleExperience = (item: string) => {
    setSelectedExperiences((prev) =>
      prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]
    );
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      router.push("/bookings-loading-screen");
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    router.push("/bookings-loading-screen");
  };

  const isStep1Complete = Boolean(country && visited);
  const isStep2Complete = selectedExperiences.length > 0;
  const isStep3Complete = Boolean(tripCountry && travelTime);

  const canContinue =
    (currentStep === 1 && isStep1Complete) ||
    (currentStep === 2 && isStep2Complete) ||
    (currentStep === 3 && isStep3Complete);

  const renderStep1 = () => (
    <>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="max-w-2xl mx-auto space-y-8"
      >
        <Dropdown
          label="Where do you currently reside?"
          value={country}
          options={countryOptions}
          placeholder="Select country"
          searchable
          onSelect={setCountry}
        />

        <Dropdown
          label="Have you visited Nigeria or Caribbean before?"
          value={visited}
          options={visitedOptions}
          placeholder="Select an option"
          onSelect={setVisited}
        />

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleNext}
          disabled={!isStep1Complete}
          className={`w-full mt-12 text-[#0a0e14] font-semibold py-3 rounded-[12px] transition-colors ${
            isStep1Complete
              ? "bg-[#00AEEF] hover:bg-[#05c0ff]"
              : "bg-[#0D3B45] opacity-70 cursor-not-allowed"
          }`}
        >
          Continue
        </motion.button>
      </motion.div>
    </>
  );

  const renderStep1Mobile = () => (
    <div className="space-y-6 flex-1">
      <Dropdown
        label="Where do you currently reside?"
        value={country}
        options={countryOptions}
        placeholder="Select country"
        searchable
        onSelect={setCountry}
        mobile
      />

      <Dropdown
        label="Have you visited Nigeria or Caribbean before?"
        value={visited}
        options={visitedOptions}
        placeholder="Select an option"
        onSelect={setVisited}
        mobile
      />

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleNext}
        disabled={!isStep1Complete}
        className={`w-full mt-6 text-[#0a0e14] font-semibold py-2 rounded-[12px] transition-colors text-sm ${
          isStep1Complete
            ? "bg-[#00AEEF] hover:bg-[#05c0ff]"
            : "bg-[#0D3B45] opacity-70 cursor-not-allowed"
        }`}
      >
        Continue
      </motion.button>
    </div>
  );

  const renderStep2 = () => (
    <div className="max-w-4xl mx-auto">
      <div className="mb-[30px]">
        <p className="text-[16px] text-[#FDF3E2]">What kind of experiences do you enjoy?</p>
      </div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap gap-x-4 gap-y-5"
      >
        {experiences.map((item, index) => (
          <motion.button
            key={item}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.03 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => toggleExperience(item)}
            className={`px-6 py-3 rounded-full border text-sm font-medium tracking-wide transition-all duration-200 ${
              selectedExperiences.includes(item)
                ? "bg-[#F7C31F] border-[#F7C31F] text-[#0B1309]"
                : "bg-[#0e1410] border-[#2A2F25] text-[#FDF3E2]/80 hover:border-[#F7C31F] hover:text-[#F7C31F]"
            }`}
          >
            {item}
          </motion.button>
        ))}
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col md:flex-row justify-between max-w-4xl gap-[52px] w-full mx-auto mt-12"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePrevious}
          className="px-8 py-3 border border-gray-600 rounded-[12px] text-gray-300 hover:border-cyan-300 transition-colors w-full"
        >
          Previous
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNext}
          disabled={!isStep2Complete}
          className={`px-8 w-full py-3 font-semibold rounded-[12px] transition-all ${
            isStep2Complete
              ? "bg-[#00AEEF] text-[#041411] hover:bg-[#05c0ff]"
              : "bg-[#0D3B45] text-[#041411] opacity-70 cursor-not-allowed"
          }`}
        >
          Continue
        </motion.button>
      </motion.div>
    </div>
  );

  const renderStep2Mobile = () => (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {experiences.map((item) => (
          <motion.button
            key={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => toggleExperience(item)}
            className={`px-2 py-2 rounded-full border text-[12px] font-medium transition-all ${
              selectedExperiences.includes(item)
                ? "bg-[#F7C31F] border-[#F7C31F] text-[#0B1309]"
                : "bg-[#0e1410] border-[#2A2F25] text-gray-300 hover:border-[#F7C31F] hover:text-[#F7C31F]"
            }`}
          >
            {item}
          </motion.button>
        ))}
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col items-center mt-[37px] gap-[18px]"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePrevious}
          className="px-8 py-3 border border-gray-600 rounded-[12px] text-[16px] text-[#FDF3E2] hover:border-cyan-300 transition-colors w-full"
        >
          Previous
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNext}
          disabled={!isStep2Complete}
          className={`px-8 w-full py-3 font-semibold text-[16px] rounded-[12px] transition-all ${
            isStep2Complete
              ? "bg-[#00AEEF] text-[#EFF1F3] hover:bg-[#05c0ff]"
              : "bg-[#0D3B45] text-[#FDF3E2] opacity-70 cursor-not-allowed"
          }`}
        >
          Continue
        </motion.button>
      </motion.div>
    </>
  );

  const renderStep3 = () => (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="max-w-2xl mx-auto space-y-8"
    >
      <Dropdown
        label="Where do you plan to spend your trip?"
        value={tripCountry}
        options={countryOptions}
        placeholder="Select country"
        searchable
        onSelect={setTripCountry}
      />

      <Dropdown
        label="When are you planning to travel?"
        value={travelTime}
        options={travelTimeOptions}
        placeholder="Select an option"
        onSelect={setTravelTime}
      />

      <div className="flex justify-between mt-12">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handlePrevious}
          className="px-8 py-3 border border-gray-600 rounded-[12px] text-gray-300 hover:border-cyan-300 transition-colors"
        >
          Previous
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleNext}
          disabled={!isStep3Complete}
          className={`px-8 py-3 font-semibold rounded-[12px] transition-colors ${
            isStep3Complete
              ? "bg-[#00AEEF] hover:bg-[#05c0ff] text-[#0a0e14]"
              : "bg-[#0D3B45] opacity-70 cursor-not-allowed text-[#0a0e14]"
          }`}
        >
          Continue
        </motion.button>
      </div>
    </motion.div>
  );

  const renderStep3Mobile = () => (
    <div className="space-y-6 flex-1">
      <Dropdown
        label="Where do you plan to spend your trip?"
        value={tripCountry}
        options={countryOptions}
        placeholder="Select country"
        searchable
        onSelect={setTripCountry}
        mobile
      />

      <Dropdown
        label="When are you planning to travel?"
        value={travelTime}
        options={travelTimeOptions}
        placeholder="Select an option"
        onSelect={setTravelTime}
        mobile
      />

      <div className="flex flex-col items-center mt-6 gap-[18px]">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePrevious}
          className="px-8 py-3 border border-gray-600 rounded-[12px] text-[16px] text-[#FDF3E2] hover:border-cyan-300 transition-colors w-full"
        >
          Previous
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleNext}
          disabled={!isStep3Complete}
          className={`w-full font-semibold py-3 rounded-[12px] transition-colors text-sm ${
            isStep3Complete
              ? "bg-[#00AEEF] hover:bg-[#05c0ff] text-[#0a0e14]"
              : "bg-[#0D3B45] opacity-70 cursor-not-allowed text-[#0a0e14]"
          }`}
        >
          Continue
        </motion.button>
      </div>
    </div>
  );

  const getStepContent = () => {
    switch (currentStep) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      default:
        return null;
    }
  };

  const getMobileStepContent = () => {
    switch (currentStep) {
      case 1:
        return renderStep1Mobile();
      case 2:
        return renderStep2Mobile();
      case 3:
        return renderStep3Mobile();
      default:
        return null;
    }
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return "Let's personalize your travel experience";
      case 2:
        return "Let's personalize your travel experience";
      case 3:
        return "Let's personalize your travel experience";
      default:
        return "";
    }
  };

  const getStepSubtitle = () => {
    switch (currentStep) {
      case 1:
        return "Kindly answer a few questions so we can plan your next trip";
      case 2:
        return "Kindly answer a few questions so we can plan your next trip.";
      case 3:
        return "Kindly answer a few questions so we can plan your next trip";
      default:
        return "";
    }
  };

  const getMobileTitle = () => {
    switch (currentStep) {
      case 2:
        return "What kind of experiences do you enjoy?";
      default:
        return getStepTitle();
    }
  };

  const getMobileSubtitle = () => {
    switch (currentStep) {
      case 2:
        return "Select the categories that excite you the most";
      default:
        return getStepSubtitle();
    }
  };

  return (
    <OnboardingLayout
      currentStep={currentStep}
      totalSteps={3}
      stepLabels={STEP_LABELS}
      onSkip={handleSkip}
      title={getStepTitle()}
      subtitle={getStepSubtitle()}
      mobileTitle={getMobileTitle()}
      mobileSubtitle={getMobileSubtitle()}
      mobileChildren={getMobileStepContent()}
    >
      {getStepContent()}
    </OnboardingLayout>
  );
}

