import './PolynomialFunction.css';
import React, { useState } from "react";

const PolynomialFunction = () => {
  const [coefficients, setCoefficients] = useState("");
  const [exponents, setExponents] = useState("");
  const [xValue, setXValue] = useState("");
  const [polynomialString, setPolynomialString] = useState("");
  const [result, setResult] = useState("");
  const calculatePolynomial = () => {
    const coeffs = coefficients.split(" ").map(Number);
    const exps = exponents.split(" ").map(Number);
    const x = parseFloat(xValue);
    let polynomial = "f(x) = ";
    let evaluationResult = 0;

    coeffs.forEach((coeff, index) => {
      const term = coeff * Math.pow(x, exps[index]);
      polynomial += `${coeff} * x^${exps[index]}`;
      if (index < coeffs.length - 1) polynomial += " + ";
      evaluationResult += term;
    });

    setPolynomialString(polynomial);
    setResult(`f(${x}) = ${evaluationResult.toFixed(2)}`);
  };

  return (
    <div className="box">
      <h2>Polynomial Function</h2>
      <label>Coefficients:</label>
      <input
        type="text"
        value={coefficients}
        onChange={(e) => setCoefficients(e.target.value)}
      />
      <label>Exponents:</label>
      <input
        type="text"
        value={exponents}
        onChange={(e) => setExponents(e.target.value)}
      />
      <label>X Value:</label>
      <input
        type="number"
        value={xValue}
        onChange={(e) => setXValue(e.target.value)}
      />
      <label>Polynomial Function (Result):</label>
      <input type="text" value={polynomialString} readOnly />
      <label>Polynomial Evaluation (Result):</label>
      <input type="text" value={result} readOnly />
      <button onClick={calculatePolynomial}>Calculate</button>
    </div>
  );
};

export default PolynomialFunction;