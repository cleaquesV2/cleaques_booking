"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useCurrency } from "@/hooks/use-currency";
import { AUTH_CLIENT_ROUTE } from "@/app/(auth)/constants";
import { MAIN_CLIENT_ROUTE } from "@/app/(bookings)/constants";

const currencyFlagIcons: Record<string, string> = {
  GBP: "/assets/svgs/UKFlag.svg",
  NGN: "/assets/svgs/NigeriaFlag.svg",
};

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const pathname = usePathname();
  const { selectedCurrency, setSelectedCurrency, currencies } = useCurrency();

  // Only allow NGN and GBP
  const allowedCurrencies = currencies.filter((c) =>
    ["NGN", "GBP"].includes(c.code)
  );

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCurrency = () => setIsCurrencyOpen(!isCurrencyOpen);

  const handleCurrencySelect = (currency: typeof currencies[number]) => {
    setSelectedCurrency(currency);
    setIsCurrencyOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".currency-dropdown")) {
        setIsCurrencyOpen(false);
      }
    };

    if (isCurrencyOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCurrencyOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsCurrencyOpen(false);
  }, [pathname]);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="absolute top-0 left-0 right-0 z-50"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(11, 19, 9, 0.52) 0%, rgba(70, 121, 57, 0) 100%)",
          height: "255px",
        }}
      />

      <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-4">
        <div className="flex items-center justify-between gap-3">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 z-10 transition-opacity hover:opacity-90"
            aria-label="CLEAQUES Home"
          >
            <Image
              src="/assets/svgs/CleaquesLogo.svg"
              alt="CLEAQUES logo"
              width={210}
              height={32}
              className="hidden md:block h-auto w-auto max-w-[180px] lg:max-w-[210px]"
              priority
            />
            <Image
              src="/assets/svgs/Cleaques.svg"
              alt="CLEAQUES compact logo"
              width={120}
              height={32}
              className="md:hidden h-auto w-auto max-w-[140px]"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {/* Currency Selector */}
            <div className="relative currency-dropdown">
              <button
                onClick={toggleCurrency}
                className="flex items-center space-x-2 text-white hover:opacity-80 transition-opacity focus:outline-none rounded px-2 py-1"
              >
                <Image
                  src={currencyFlagIcons[selectedCurrency.code]}
                  alt={`${selectedCurrency.code} flag`}
                  width={20}
                  height={20}
                  className="rounded-sm"
                />
                <span className="text-sm font-medium">
                  {selectedCurrency.code}
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isCurrencyOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isCurrencyOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 bg-white text-black rounded-md shadow-lg w-48 py-2 z-50"
                  >
                    {allowedCurrencies.map((currency) => (
                      <button
                        key={currency.code}
                        onClick={() => handleCurrencySelect(currency)}
                        className="w-full px-4 py-2 text-sm text-left hover:bg-gray-100 transition-colors flex items-center space-x-2"
                      >
                        <Image
                          src={currencyFlagIcons[currency.code]}
                          alt={`${currency.code} flag`}
                          width={20}
                          height={20}
                          className="rounded-sm"
                        />
                        <span>
                          {currency.code} ({currency.symbol})
                        </span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href={MAIN_CLIENT_ROUTE.MY_TICKET_PURCHASES}
              className="text-white hover:opacity-80 transition-opacity text-sm font-medium"
            >
              My Trips
            </Link>

            <Link href={AUTH_CLIENT_ROUTE.LOGIN}>
              <button className="border border-white text-white hover:bg-white/10 transition-colors px-4 py-2 rounded-full text-sm font-medium">
                Sign In
              </button>
            </Link>

            <button className="bg-[#00AEEF] hover:bg-[#0099D6] active:bg-[#0088C0] text-white py-2 px-6 rounded-full text-sm font-medium">
              Plan Your Trip
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-3">
            <Link href={AUTH_CLIENT_ROUTE.LOGIN}>
              <button className="border border-white/70 text-white text-xs font-medium px-3 py-1.5 rounded-full hover:bg-white/10 transition-colors">
                Sign In
              </button>
            </Link>
            <button
              onClick={toggleMenu}
              className="text-white text-2xl focus:outline-none rounded p-1 z-10"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-full left-0 right-0 mt-4 bg-black/90 backdrop-blur-lg px-6 py-4 rounded-lg shadow-lg border border-white/10 z-50"
            >
              <div className="flex flex-col space-y-4">
                {/* Currency */}
                <div className="border-b border-white/20 pb-4">
                  <button
                    onClick={toggleCurrency}
                    className="flex items-center justify-between w-full text-white"
                  >
                    <div className="flex items-center space-x-2">
                      <Image
                        src={currencyFlagIcons[selectedCurrency.code]}
                        alt={`${selectedCurrency.code} flag`}
                        width={20}
                        height={20}
                        className="rounded-sm"
                      />
                      <span>{selectedCurrency.code}</span>
                    </div>

                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isCurrencyOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isCurrencyOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-2 space-y-2 overflow-hidden"
                      >
                        {allowedCurrencies.map((currency) => (
                          <button
                            key={currency.code}
                            onClick={() => handleCurrencySelect(currency)}
                            className="w-full px-4 py-2 text-sm text-left text-white hover:bg-white/10 rounded flex items-center space-x-2"
                          >
                            <Image
                              src={currencyFlagIcons[currency.code]}
                              alt={`${currency.code} flag`}
                              width={20}
                              height={20}
                              className="rounded-sm"
                            />
                            <span>
                              {currency.code} ({currency.symbol})
                            </span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href={MAIN_CLIENT_ROUTE.MY_TICKET_PURCHASES}
                  onClick={toggleMenu}
                  className="text-white hover:opacity-80 py-2 border-b border-white/20"
                >
                  My Trips
                </Link>

                <Link href={AUTH_CLIENT_ROUTE.LOGIN} onClick={toggleMenu}>
                  <button className="w-full border border-white text-white hover:bg-white/10 px-4 py-2 rounded-md text-sm">
                    Sign In
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
