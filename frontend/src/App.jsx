import React, { useState } from "react";
import RateContainer from "./components/RateContainer";
import "./App.css";

function App() {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const [rates, setRates] = useState([
    {
      id: "1",
      loanAmount: 50000,
      yield: 7.5,
      purpose: "Business Expansion",
      fundingStatus: 60,
      daysRemaining: 90,
      term: 36,
      grade: "A",
      probabilityOfDefault: 0.02,
    },
    {
      id: "2",
      loanAmount: 100000,
      yield: 9.2,
      purpose: "Real Estate Investment",
      fundingStatus: 85,
      daysRemaining: 120,
      term: 48,
      grade: "AA",
      probabilityOfDefault: 0.01,
    },
    {
      id: "3",
      loanAmount: 25000,
      yield: 6.8,
      purpose: "Debt Consolidation",
      fundingStatus: 45,
      daysRemaining: 60,
      term: 24,
      grade: "B",
      probabilityOfDefault: 0.05,
    },
    {
      id: "4",
      loanAmount: 60000,
      yield: 8.0,
      purpose: "Business Expansion",
      fundingStatus: 70,
      daysRemaining: 100,
      term: 30,
      grade: "A",
      probabilityOfDefault: 0.025,
    },
    {
      id: "5",
      loanAmount: 120000,
      yield: 9.5,
      purpose: "Real Estate Investment",
      fundingStatus: 90,
      daysRemaining: 130,
      term: 54,
      grade: "AA",
      probabilityOfDefault: 0.008,
    },
    {
      id: "6",
      loanAmount: 30000,
      yield: 7.0,
      purpose: "Debt Consolidation",
      fundingStatus: 50,
      daysRemaining: 70,
      term: 18,
      grade: "B",
      probabilityOfDefault: 0.04,
    },
    {
      id: "7",
      loanAmount: 70000,
      yield: 8.2,
      purpose: "Business Expansion",
      fundingStatus: 75,
      daysRemaining: 110,
      term: 42,
      grade: "A",
      probabilityOfDefault: 0.022,
    },
    {
      id: "8",
      loanAmount: 140000,
      yield: 9.8,
      purpose: "Real Estate Investment",
      fundingStatus: 95,
      daysRemaining: 140,
      term: 60,
      grade: "AA",
      probabilityOfDefault: 0.005,
    },
    {
      id: "9",
      loanAmount: 35000,
      yield: 7.2,
      purpose: "Debt Consolidation",
      fundingStatus: 55,
      daysRemaining: 80,
      term: 12,
      grade: "B",
      probabilityOfDefault: 0.035,
    },
    {
      id: "10",
      loanAmount: 80000,
      yield: 8.5,
      purpose: "Green Energy Project",
      fundingStatus: 80,
      daysRemaining: 150,
      term: 48,
      grade: "A",
      probabilityOfDefault: 0.015,
    },
    {
      id: "11",
      loanAmount: 40000,
      yield: 6.5,
      purpose: "Agricultural Loan",
      fundingStatus: 40,
      daysRemaining: 75,
      term: 24,
      grade: "B",
      probabilityOfDefault: 0.06,
    },
    {
      id: "12",
      loanAmount: 150000,
      yield: 10.0,
      purpose: "Startup Funding",
      fundingStatus: 98,
      daysRemaining: 180,
      term: 60,
      grade: "AA",
      probabilityOfDefault: 0.003,
    },
    {
      id: "13",
      loanAmount: 55000,
      yield: 7.8,
      purpose: "Education Loan",
      fundingStatus: 65,
      daysRemaining: 95,
      term: 30,
      grade: "A",
      probabilityOfDefault: 0.023,
    },
    {
      id: "14",
      loanAmount: 110000,
      yield: 9.3,
      purpose: "Commercial Property",
      fundingStatus: 88,
      daysRemaining: 125,
      term: 54,
      grade: "AA",
      probabilityOfDefault: 0.009,
    },
    {
      id: "15",
      loanAmount: 27000,
      yield: 6.9,
      purpose: "Credit Card Refinance",
      fundingStatus: 48,
      daysRemaining: 65,
      term: 18,
      grade: "B",
      probabilityOfDefault: 0.045,
    },
    {
      id: "16",
      loanAmount: 65000,
      yield: 8.1,
      purpose: "Home Improvement",
      fundingStatus: 72,
      daysRemaining: 105,
      term: 42,
      grade: "A",
      probabilityOfDefault: 0.027,
    },
    {
      id: "17",
      loanAmount: 130000,
      yield: 9.6,
      purpose: "Luxury Goods Financing",
      fundingStatus: 92,
      daysRemaining: 135,
      term: 66,
      grade: "AA",
      probabilityOfDefault: 0.006,
    },
    {
      id: "18",
      loanAmount: 32000,
      yield: 7.1,
      purpose: "Personal Use",
      fundingStatus: 52,
      daysRemaining: 75,
      term: 24,
      grade: "B",
      probabilityOfDefault: 0.038,
    },
    {
      id: "19",
      loanAmount: 75000,
      yield: 8.3,
      purpose: "Renewable Energy",
      fundingStatus: 77,
      daysRemaining: 115,
      term: 48,
      grade: "A",
      probabilityOfDefault: 0.021,
    },
    {
      id: "20",
      loanAmount: 145000,
      yield: 9.9,
      purpose: "High-Tech Investment",
      fundingStatus: 96,
      daysRemaining: 145,
      term: 72,
      grade: "AA",
      probabilityOfDefault: 0.004,
    },
    {
      id: "21",
      loanAmount: 37000,
      yield: 7.3,
      purpose: "Small Business",
      fundingStatus: 57,
      daysRemaining: 85,
      term: 30,
      grade: "B",
      probabilityOfDefault: 0.032,
    },
    {
      id: "22",
      loanAmount: 85000,
      yield: 8.6,
      purpose: "Sustainable Farming",
      fundingStatus: 82,
      daysRemaining: 155,
      term: 60,
      grade: "A",
      probabilityOfDefault: 0.014,
    },
  ]);

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
    setShowMobileFilters(false);
  };

  const sortedRates = [...rates].sort((a, b) => {
    if (!sortBy) return 0;

    let comparison = 0;
    switch (sortBy) {
      case "loanAmount":
        comparison = a.loanAmount - b.loanAmount;
        break;
      case "purpose":
        comparison = a.purpose.localeCompare(b.purpose);
        break;
      case "term":
        comparison = a.term - b.term;
        break;
      case "yield":
        comparison = a.yield - b.yield;
        break;
      case "probabilityOfDefault":
        comparison = a.probabilityOfDefault - b.probabilityOfDefault;
        break;
      default:
        return 0;
    }
    return sortOrder === "asc" ? comparison : -comparison;
  });

  const getSortLabel = () => {
    if (!sortBy) return "Sort By";
    const labelMap = {
      loanAmount: "Loan Amount",
      purpose: "Purpose",
      term: "Term",
      yield: "Yield",
      probabilityOfDefault: "Probability of Default",
    };
    const label = labelMap[sortBy] || "Sort By";
    return `${label} ${sortOrder === "asc" ? "↑" : "↓"}`;
  };

  const headerColumns = [
    { field: "id", label: "Loan Id" },
    { field: "loanAmount", label: "Loan Amount" },
    { field: "purpose", label: "Purpose" },
    { field: "term", label: "Term" },
    { field: "yield", label: "Yield" },
    { field: "probabilityOfDefault", label: "Probability of Default" },
  ];

  return (
    <div className="app">
      <h1 className="title">Loan Rates</h1>

      {/* Desktop Header */}
      <div className="rateHeader desktop-only">
        {headerColumns.map((column) => (
          <div
            key={column.field}
            className="inner-container sortable"
            onClick={() => handleSort(column.field)}
          >
            {column.label}
            {sortBy === column.field && (sortOrder === "asc" ? " ↑" : " ↓")}
          </div>
        ))}
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
          <div className="filter-options">
            {headerColumns.map((column) => (
              <div
                key={column.field}
                className="filter-option"
                onClick={() => handleSort(column.field)}
              >
                {column.label}
                {sortBy === column.field && (sortOrder === "asc" ? " ↑" : " ↓")}
              </div>
            ))}
          </div>
        )}
      </div>

      {sortedRates.map((rate, index) => (
        <RateContainer key={index} {...rate} />
      ))}
    </div>
  );
}

export default App;
