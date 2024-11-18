import './HeronsFormula.css';
import { useState } from "react";

const HeronsFormula = () => {
  const [sideA, setSideA] = useState("");
  const [sideB, setSideB] = useState("");
  const [sideC, setSideC] = useState("");
  const [result, setResult] = useState("");
  
  const calculateHeron = () => {
    const a = parseFloat(sideA);
    const b = parseFloat(sideB);
    const c = parseFloat(sideC);
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    setResult(area.toFixed(2));
  };

  return (
    <div className="box">
      <h2>Heron's Formula</h2>
      <label>Side a:</label>
      <input
        type="number"
        value={sideA}
        onChange={(e) => setSideA(e.target.value)}
      />
      <label>Side b:</label>
      <input
        type="number"
        value={sideB}
        onChange={(e) => setSideB(e.target.value)}
      />
      <label>Side c:</label>
      <input
        type="number"
        value={sideC}
        onChange={(e) => setSideC(e.target.value)}
      />
      <label>Area (Result):</label>
      <input type="text" value={result} readOnly />
      <button onClick={calculateHeron}>Calculate</button>
    </div>
  );
};

export default HeronsFormula;