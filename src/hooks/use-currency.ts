import { useCurrencyContext } from "@/contexts/currency-provider";

export const useCurrency = () => {
  const { selectedCurrency, setSelectedCurrency, rates, formatAmount, supportedCurrencies, convertAmount } = useCurrencyContext();

  const formatWithBaseCurrency = (amount: number, baseCurrencyCode: string) => {
    return formatAmount(amount, baseCurrencyCode);
  };

  const formatWithoutSymbol = (amount: number, baseCurrencyCode?: string) => {
    return formatAmount(amount, baseCurrencyCode).replace(/[^\d.,-]/g, "");
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

    // Convert from selected currency to USD
    return amount / rate;
  };

  return {
    selectedCurrency,
    setSelectedCurrency,
    rates,
    formatAmount,
    formatWithBaseCurrency,
    convertAmount,
    formatWithoutSymbol,
    convertUSDTo,
    convertToUSD,
    currencies: supportedCurrencies,
  };
};