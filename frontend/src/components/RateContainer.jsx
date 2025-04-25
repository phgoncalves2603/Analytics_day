import React from "react";
import "../App.css";

function RateContainer({
  id,
  loanAmount,
  purpose,
  term,
  yield: yieldRate,
  probabilityOfDefault,
}) {
  return (
    <div className="rateContainer">
      <div className="rateItem">
        <div className="item-container">
          <span className="label">Loan Id:</span> {id}
        </div>
        <div className="item-container">
          <span className="label">Amount:</span>${loanAmount.toLocaleString()}
        </div>
        <div className="item-container">
          <span className="label">Purpose:</span> {purpose}
        </div>
        <div className="item-container">
          <span className="label">Loan Term:</span> {term}
        </div>
        <div className="item-container">
          <span className="label">Yield:</span> {yieldRate}%
        </div>
        <div className="item-container">
          <span className="label">Default Probability:</span>
          {probabilityOfDefault}
        </div>
      </div>
    </div>
  );
}

export default RateContainer;
