import React from "react";
import "../App.css";

function RateContainer(props) {
  const bankName = props.bankName;
  const product = props.product;
  const apy = props.apy;
  const earning = props.earning;

  return (
    <div className="rateContainer">
      <div className="inner-container">{bankName}</div>
      <div className="inner-container">{product}</div>
      <div className="inner-container">{apy}</div>
      <div className="inner-container">${earning}</div>
      <div className="inner-container">
        <button className="save">Save now</button>
      </div>
    </div>
  );
}

export default RateContainer;
