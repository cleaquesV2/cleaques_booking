"use client";

import React from "react";
import Image from "next/image";

export type AccountType = "traveler" | "vendor";

interface AccountTypeSelectorProps {
  selectedType: AccountType;
  onSelect: (type: AccountType) => void;
}

export default function AccountTypeSelector({
  selectedType,
  onSelect,
}: AccountTypeSelectorProps) {
  return (
    <div className="relative w-full">
      <h1 className="text-[16px] font-[500] text-[#FDF3E2] mb-3">Account type</h1>
      <div className="flex flex-col sm:flex sm:flex-row gap-4 mb-6">
        {/* Traveler */}
        <button
          type="button"
          onClick={() => onSelect("traveler")}
          className={`flex-1 p-4 rounded-xl cursor-pointer transition-all border-2 ${
            selectedType === "traveler"
              ? "bg-[#00AEEF]/30 border-[#00AEEF]"
              : "bg-transparent border-gray-700"
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span
            className={`text-[16px] text-left max-w-[146px] ${
            selectedType === "traveler"
              ? "text-[#00AEEF]"
              : "text-white"
          }`}
           >Traveler</span>

            <Image
              src={
                selectedType === "traveler"
               ? "/assets/svgs/Selectedswitch.svg"
                : "/assets/svgs/UnselectedSwitch.svg"
              }
              width={16}
              height={16}
              alt="Traveler"
            />
          </div>

          <p  className={`text-[12px] text-left max-w-[146px] ${
            selectedType === "traveler"
              ? "text-[#00AEEF]"
              : "text-white"
          }`} >
            Book and manage your trips easily.
          </p>
        </button>

        {/* Vendor */}
        <button
          type="button"
          onClick={() => onSelect("vendor")}
          className={`flex-1 p-4 rounded-xl cursor-pointer transition-all border-2 ${
            selectedType === "vendor"
              ? "bg-[#00AEEF]/30 border-[#00AEEF]"
              : "bg-transparent border-gray-700"
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className={`text-[16px] text-left max-w-[146px] ${
            selectedType === "vendor"
              ? "text-[#00AEEF]"
              : "text-white"
          }`}>Vendor</span>

            <Image
              src={
                selectedType === "vendor"
                  ? "/assets/svgs/Selectedswitch.svg"
                : "/assets/svgs/UnselectedSwitch.svg"
              }
              width={16}
              height={16}
              alt="Vendor"
            />
          </div>

          <p className={`text-[12px] text-left max-w-[146px] ${
            selectedType === "vendor"
              ? "text-[#00AEEF]"
              : "text-white"
          }`} >
            List your services and reach travelers.
          </p>
        </button>
      </div>
    </div>
  );
}
