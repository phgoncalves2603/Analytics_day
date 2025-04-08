import React, { useState } from "react";
import RateContainer from "./components/RateContainer";
import "./App.css";

function App() {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [depositAmount, setDepositAmount] = useState("10000");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Sample rate data
  const rates = [
    {
      bankName: "Chase Bank",
      product: "Savings Account",
      apy: "4.50",
      earning: "450.00",
    },
    {
      bankName: "Bank of America",
      product: "High-Yield Savings",
      apy: "4.75",
      earning: "475.00",
    },
    {
      bankName: "Wells Fargo",
      product: "Premium Savings",
      apy: "4.25",
      earning: "425.00",
    },
  ];

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
    setShowMobileFilters(false);
  };

  const calculateEarnings = (apy) => {
    const amount = parseFloat(depositAmount) || 0;
    const rate = parseFloat(apy) || 0;
    return ((amount * rate) / 100).toFixed(2);
  };

  const sortedRates = [...rates].sort((a, b) => {
    if (!sortBy) return 0;

    let comparison = 0;
    switch (sortBy) {
      case "bankName":
        comparison = a.bankName.localeCompare(b.bankName);
        break;
      case "product":
        comparison = a.product.localeCompare(b.product);
        break;
      case "apy":
        comparison = parseFloat(a.apy) - parseFloat(b.apy);
        break;
      case "earning":
        comparison = parseFloat(a.earning) - parseFloat(b.earning);
        break;
      default:
        return 0;
    }
    return sortOrder === "asc" ? comparison : -comparison;
  });

  const getSortLabel = () => {
    if (!sortBy) return "Sort by";
    const labels = {
      bankName: "Bank name",
      product: "Product",
      apy: "APY",
      earning: "Annualized Earnings",
    };
    return `${labels[sortBy]} ${sortOrder === "asc" ? "↑" : "↓"}`;
  };

  return (
    <div className="app">
      <h1>Rates</h1>
      <div className="deposit-input">
        <label htmlFor="deposit">Deposit Amount: $</label>
        <input
          type="number"
          id="deposit"
          value={depositAmount}
          onChange={(e) => setDepositAmount(e.target.value)}
          min="0"
          step="1000"
        />
      </div>

      {/* Desktop Header */}
      <div className="rateHeader desktop-only">
        <div
          className="inner-container sortable"
          onClick={() => handleSort("bankName")}
        >
          Bank name {sortBy === "bankName" && (sortOrder === "asc" ? "↑" : "↓")}
        </div>
        <div
          className="inner-container sortable"
          onClick={() => handleSort("product")}
        >
          Product {sortBy === "product" && (sortOrder === "asc" ? "↑" : "↓")}
        </div>
        <div
          className="inner-container sortable"
          onClick={() => handleSort("apy")}
        >
          APY* {sortBy === "apy" && (sortOrder === "asc" ? "↑" : "↓")}
        </div>
        <div
          className="inner-container sortable"
          onClick={() => handleSort("earning")}
        >
          Annualized Earnings{" "}
          {sortBy === "earning" && (sortOrder === "asc" ? "↑" : "↓")}
        </div>
        <div className="inner-container"></div>
      </div>

      {/* Mobile Filter Toggle */}
      <div className="mobile-filter">
        <button
          className="filter-toggle"
          onClick={() => setShowMobileFilters(!showMobileFilters)}
        >
          {getSortLabel()}
        </button>
        {showMobileFilters && (
          <div className="filter-dropdown">
            <div
              className="filter-option"
              onClick={() => handleSort("bankName")}
            >
              Bank name{" "}
              {sortBy === "bankName" && (sortOrder === "asc" ? "↑" : "↓")}
            </div>
            <div
              className="filter-option"
              onClick={() => handleSort("product")}
            >
              Product{" "}
              {sortBy === "product" && (sortOrder === "asc" ? "↑" : "↓")}
            </div>
            <div className="filter-option" onClick={() => handleSort("apy")}>
              APY {sortBy === "apy" && (sortOrder === "asc" ? "↑" : "↓")}
            </div>
            <div
              className="filter-option"
              onClick={() => handleSort("earning")}
            >
              Annualized Earnings{" "}
              {sortBy === "earning" && (sortOrder === "asc" ? "↑" : "↓")}
            </div>
          </div>
        )}
      </div>

      {sortedRates.map((rate, index) => (
        <RateContainer
          key={index}
          bankName={rate.bankName}
          product={rate.product}
          apy={rate.apy + "%"}
          earning={calculateEarnings(rate.apy)}
        />
      ))}
    </div>
  );
}

export default App;
