"use client";
import { useState, useEffect } from "react";

const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState<string[]>([]);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("PKR");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState<number | null>(null);

  useEffect(() => {
    // Fetch available currencies (same as the initial code)
    const availableCurrencies = [
      "USD",
      "EUR",
      "GBP",
      "JPY",
      "PKR",
      "INR",
      "AUD",
      "CAD",
      "CHF",
      "CNY",
      "HKD",
      "NZD",
      "SEK",
      "KRW",
      "SGD",
      "NOK",
      "MXN",
      "ZAR",
      "BRL",
      "RUB",
      "TRY",
      "MYR",
      "PHP",
      "IDR",
      "THB",
      "VND",
      "CZK",
      "PLN",
      "DKK",
      "HUF",
      "ILS",
      "CLP",
      "COP",
      "EGP",
      "MAD",
      "NGN",
      "KWD",
      "AED",
      "SAR",
      "QAR",
      "TWD",
      "UAH",
      "ARS",
      "PEN",
      "LKR",
      "BGN",
      "RON",
      "HRK",
      "ISK",
      "BHD",
      "OMR",
      "DZD",
      "LBP",
      "JOD",
      "BAM",
      "GEL",
      "MKD",
      "RSD",
      "BSD",
      "BZD",
      "KYD",
      "SBD",
      "TTD",
      "BWP",
      "NAD",
      "XOF",
      "XAF",
      "ZMW",
      "ETB",
      "GHS",
      "KES",
      "UGX",
      "TND",
      "MUR",
      "SCR",
      "MZN",
      "BND",
      "FJD",
      "PGK",
      "SBD",
      "TOP",
      "WST",
      "KZT",
      "UZS",
      "AZN",
      "AMD",
      "BYN",
      "KGS",
      "MDL",
      "TJS",
      "IRR",
      "IQD",
      "AFN",
      "SYP",
      "LYD",
      "SDG",
      "DJF",
      "SOS",
      "MGA",
      "KMF",
      "GNF",
      "SLL",
      "MWK",
      "MVR",
      "BND",
      "BTN",
      "ERN",
      "CUP",
      "JMD",
      "GMD",
      "HTG",
      "LRD",
      "MNT",
      "NPR",
      "AOA",
      "BIF",
      "CVE",
      "DOP",
      "FJD",
      "GIP",
      "HNL",
      "LAK",
      "MMK",
      "MOP",
      "PAB",
      "PYG",
      "RWF",
      "STN",
      "SZL",
      "TMT",
      "UYU",
      "YER",
      "ZWL",
    ];

    setCurrencies(availableCurrencies);
  }, []);

  useEffect(() => {
    // Trigger conversion when the amount or currencies change
    if (amount > 0) {
      const handleConvert = async () => {
        try {
          const response = await fetch(
            `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
          );
          const data = await response.json();
          const rate = data.rates[toCurrency];
          setResult(amount * rate);
        } catch (error) {
          console.error("Error fetching exchange rate:", error);
        }
      };

      handleConvert();
    }
  }, [amount, fromCurrency, toCurrency]);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-3xl text-center font-bold mb-6 text-gray-800">
          Currency Converter
        </h1>
        <div className="flex flex-col space-y-4">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter amount"
          />
          <div className="flex space-x-4">
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="w-1/2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="w-1/2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
          {result !== null && (
            <div className="text-center text-xl font-semibold mt-4">
              {amount} {fromCurrency} = {result.toFixed(2)} {toCurrency}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
