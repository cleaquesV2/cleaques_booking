"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

type Currency = {
  code: string;
  symbol: string;
};

type Rates = Record<string, number>;

// The list of supported currencies. You can expand this as needed.
const supportedCurrencies = [
  { code: "USD", symbol: "$" },
  { code: "NGN", symbol: "₦" },
  { code: "EUR", symbol: "€" },
  { code: "GBP", symbol: "£" },
  { code: "JPY", symbol: "¥" },
  { code: "AUD", symbol: "A$" },
  { code: "CAD", symbol: "C$" },
  { code: "CHF", symbol: "CHF" },
  { code: "CNY", symbol: "¥" },
  { code: "SEK", symbol: "kr" },
  { code: "NZD", symbol: "NZ$" },
];

interface CurrencyContextProps {
  selectedCurrency: Currency;
  setSelectedCurrency: (currency: Currency) => void;
  rates: Rates;
  formatAmount: (amount: number, baseCurrencyCode?: string) => string;
  convertAmount: (amount: number, fromCurrency: string, toCurrency: string) => number;
  supportedCurrencies: Currency[];
  formatBaseCurrency: (amount: number, baseCurrencyCode: string) => string;
}

const CurrencyContext = createContext<CurrencyContextProps | undefined>(undefined);

const defaultCurrency = supportedCurrencies.find(c => c.code === "USD") || supportedCurrencies[0];

interface CurrencyProviderProps {
  children: React.ReactNode;
  // New optional prop to set the initial base currency.
  initialBaseCurrencyCode?: string;
}

export const CurrencyProvider: React.FC<CurrencyProviderProps> = ({ children, initialBaseCurrencyCode }) => {
  const [selectedCurrency, setSelectedCurrencyState] = useState<Currency>(() => {
    // Priority 1: Check for an initial base currency from props.
    if (initialBaseCurrencyCode) {
      return supportedCurrencies.find(c => c.code === initialBaseCurrencyCode) || defaultCurrency;
    }

    // Priority 2: Check localStorage for a saved currency.
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("currency");
      if (saved) {
        const parsed = JSON.parse(saved);
        return supportedCurrencies.find(c => c.code === parsed.code) || defaultCurrency;
      }
    }

    // Priority 3: Fallback to the default currency.
    return defaultCurrency;
  });

  // Auto-detect currency based on user's country via IP address
  useEffect(() => {
    // Only run if no currency is set in localStorage or via props
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("currency");
    if (saved || initialBaseCurrencyCode) return;

    // Only run on first load
    (async () => {
      try {
        // Use ipapi.co for free IP geolocation
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        const countryCode = data.country;

        // Map country code to currency code
        // You can expand this mapping as needed
        const countryToCurrency: Record<string, string> = {
          US: "USD",
          NG: "NGN",
          GB: "GBP",
          DE: "EUR",
          FR: "EUR",
          IT: "EUR",
          ES: "EUR",
          CA: "CAD",
          AU: "AUD",
          JP: "JPY",
          CN: "CNY",
          CH: "CHF",
          SE: "SEK",
          NZ: "NZD",
        };
        const detectedCurrencyCode = countryToCurrency[countryCode] || "USD";
        const detectedCurrency = supportedCurrencies.find(c => c.code === detectedCurrencyCode) || defaultCurrency;
        setSelectedCurrencyState(detectedCurrency);
        localStorage.setItem("currency", JSON.stringify(detectedCurrency));
      } catch (err) {
        // Fallback: do nothing, keep default
        console.error("Failed to auto-detect currency", err);
      }
    })();
  }, [initialBaseCurrencyCode]);

  const [rates, setRates] = useState<Rates>({});

  const setSelectedCurrency = (currency: Currency) => {
    setSelectedCurrencyState(currency);
    localStorage.setItem("currency", JSON.stringify(currency));
  };

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await fetch(
            "https://openexchangerates.org/api/latest.json?app_id=523a7cd98e5d43318b6743330f2508f0"
        );
        const data = await res.json();
        setRates(data.rates);
      } catch (err) {
        console.error("Failed to fetch rates", err);
      }
    };

    fetchRates();
  }, []);

  const convertAmount = (amount: number, fromCurrency: string, toCurrency: string) => {
    if (fromCurrency === toCurrency) return amount;
    
    const fromRate = rates[fromCurrency] || 1;
    const toRate = rates[toCurrency] || 1;
    
    // Convert to USD first (base currency for rates), then to target currency
    const amountInUSD = amount / fromRate;
    return amountInUSD * toRate;
  };

  const formatAmount = (amount: number, baseCurrencyCode?: string) => {
    if (baseCurrencyCode) {
      const convertedAmount = convertAmount(amount, baseCurrencyCode, selectedCurrency.code);
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: selectedCurrency.code,
      }).format(convertedAmount);
    }

    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: selectedCurrency.code,
    }).format(amount);
  };

  const formatBaseCurrency = (amount: number, baseCurrencyCode: string) => {
    const baseCurrency = supportedCurrencies.find(c => c.code === baseCurrencyCode);

    if (!baseCurrency) {
      console.warn(`Base currency code '${baseCurrencyCode}' not supported.`);
      // Fallback to formatting as is if the base currency is not found
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD", // Use a default for unsupported currencies
      }).format(amount);
    }

    // We don't convert the amount here, we just format it with the base currency's style
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: baseCurrency.code,
    }).format(amount);
  };


  return (
      <CurrencyContext.Provider
          value={{
            selectedCurrency,
            setSelectedCurrency,
            rates,
            formatAmount,
            formatBaseCurrency,
            convertAmount, // Make the new function available in the context
            supportedCurrencies,
          }}
      >
        {children}
      </CurrencyContext.Provider>
  );
};

export const useCurrencyContext = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrencyContext must be used within a CurrencyProvider");
  }
  return context;
};
