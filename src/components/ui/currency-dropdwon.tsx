"use client";

import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { useCurrency } from "@/hooks/use-currency";
import { useCreatorCurrency } from "@/hooks/use-creator-currency";

interface CurrencyDropdownProps {
    context?: "default" | "creator" | "promotions";
    baseCurrencyCode?: string;
}

export const CurrencyDropdown = ({ context = "default", baseCurrencyCode }: CurrencyDropdownProps) => {
    const defaultCurrencyHook = useCurrency();
    const creatorCurrencyHook = useCreatorCurrency(baseCurrencyCode);

    let selectedCurrency, setSelectedCurrency, currencies;

    if (context === "creator") {
        selectedCurrency = creatorCurrencyHook.selectedCurrency;
        setSelectedCurrency = creatorCurrencyHook.setSelectedCurrency;
        currencies = creatorCurrencyHook.currencies;
    } else {
        selectedCurrency = defaultCurrencyHook.selectedCurrency;
        setSelectedCurrency = defaultCurrencyHook.setSelectedCurrency;
        currencies = defaultCurrencyHook.currencies;
    }

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen((prev) => !prev);
    const handleSelect = (currency: typeof currencies[number]) => {
        setSelectedCurrency(currency);
        setIsOpen(false);
    };

    const isPromotions = context === "promotions";

    // Check for the 'creator' context and render a non-interactive element
    if (context === "creator") {
        return (
            <div className="flex items-center gap-1 bg-[#1A1A] text-white px-4 py-2 rounded-md text-sm">
                <span>{selectedCurrency.code}</span>
            </div>
        );
    }

    // Render the interactive dropdown for other contexts
    return (
        <div className={`relative ${isPromotions ? "w-full" : "inline-block text-left"}`}>
            <button
                onClick={toggleDropdown}
                className={
                    isPromotions
                        ? "flex items-center gap-1 bg-[#0E0F0F] border border-[#B3B3B3] text-white px-4 py-2 rounded-md text-sm w-full"
                        : "flex items-center gap-1 bg-[#1A1A] text-white px-4 py-2 rounded-md text-sm focus:outline-none"
                }
            >
                {selectedCurrency.code}
                <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <MdKeyboardArrowDown size={18} />
                </motion.span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className={`absolute right-0 z-20 mt-2 ${
                            isPromotions
                                ? "bg-[#0E0F0F] border border-[#B3B3B3] text-white rounded-md w-full shadow-lg"
                                : "bg-white text-black rounded shadow-md w-40"
                        }`}
                    >
                        {currencies.map((currency) => (
                            <button
                                key={currency.code}
                                onClick={() => handleSelect(currency)}
                                className={
                                    isPromotions
                                        ? "px-4 py-2 text-sm w-full text-left hover:bg-[#1A1B1B]"
                                        : "px-4 py-2 text-sm w-full text-left hover:bg-gray-100"
                                }
                            >
                                {currency.code} ({currency.symbol})
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
