"use client";
import { useCurrencyContext } from "@/contexts/currency-provider";
import { useEffect } from "react";

/**
 * A specialized hook for creators that ensures the selected currency defaults to the event's base currency.
 * The user can still change the currency, but it will always start with the base currency if provided.
 * @param baseCurrencyCode The base currency code for the current event.
 */
export const useCreatorCurrency = (baseCurrencyCode: string | undefined) => {
    const { selectedCurrency, setSelectedCurrency, rates, formatAmount, formatBaseCurrency, supportedCurrencies } = useCurrencyContext();

    // Use an effect to automatically set the currency when baseCurrencyCode is provided.
    // This will only run once the baseCurrencyCode is no longer undefined.
    useEffect(() => {
        if (baseCurrencyCode && selectedCurrency.code !== baseCurrencyCode) {
            const baseCurrency = supportedCurrencies.find(c => c.code === baseCurrencyCode);
            if (baseCurrency) {
                setSelectedCurrency(baseCurrency);
            }
        }
    }, [baseCurrencyCode, selectedCurrency, setSelectedCurrency, supportedCurrencies]);

    const formatWithoutSymbol = (amount: number) => {
        return formatAmount(amount).replace(/[^\d.,-]/g, "");
    };

    const convertUSDTo = (amount: number, toCurrencyCode: string) => {
        const rate = rates[toCurrencyCode] || 1;
        return amount * rate;
    };

    const convertToUSD = (amount: number) => {
        const currencyCode = selectedCurrency.code;
        if (currencyCode === "USD") return amount;

        const rate = rates[currencyCode];
        if (!rate || rate === 0) {
            console.warn(`Exchange rate for ${currencyCode} not available.`);
            return amount;
        }
        return amount / rate;
    };

    return {
        selectedCurrency,
        setSelectedCurrency,
        rates,
        formatAmount,
        formatBaseCurrency,
        formatWithoutSymbol,
        convertUSDTo,
        convertToUSD,
        currencies: supportedCurrencies,
    };
};
