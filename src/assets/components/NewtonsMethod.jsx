import './NewtonsMethod.css';
import React, { useState } from "react";

const NewtonsMethod = () => {
  const [guess, setGuess] = useState("");
  const [result, setResult] = useState("");
  const calculateNewton = () => {
    let x = parseFloat(guess);
    const maxIterations = 10;
    const tolerance = 0.0001;

    if (isNaN(x)) {
      setResult("Invalid input");
      return;
    }

    for (let i = 0; i < maxIterations; i++) {
      const f_x = 6 * Math.pow(x, 4) - 13 * Math.pow(x, 3) - 18 * Math.pow(x, 2) + 7 * x + 6;
      const f_prime_x = 24 * Math.pow(x, 3) - 39 * Math.pow(x, 2) - 36 * x + 7;
      const nextGuess = x - f_x / f_prime_x;

      if (Math.abs(f_prime_x) < tolerance) {
        break;
      } else if (Math.abs(nextGuess - x) < tolerance) {
        x = nextGuess;
        break;
      }
      x = nextGuess;
    }

    setResult(x.toFixed(4));
  };

  return (
    <div className="box">
      <h2>Newton's Method</h2>
      <label>Root Guess:</label>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <label>Root Approximation (Result):</label>
      <input type="text" value={result} readOnly />
      <button onClick={calculateNewton}>Calculate</button>
    </div>
  );
};

export default NewtonsMethod;