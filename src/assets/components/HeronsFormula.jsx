import './HeronsFormula.css';
import { useState } from 'react';

function heronsFormula(e) {
    e.preventDefault();
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [h, setH] = useState(0);
    const [result, setResult] = useState("Calculate");

    const angleA = parseFloat(document.getElementById('angleA').value);
    const angleARad = angleA * (Math.PI / 180);
    // const h = b * Math.sin(angleARad);

    if (angleA < 90) {
        if (a < h) {
          result = "No triangle";
        } else if (a === h) {
          result = "Right triangle";
        } else if (a > b) {
          result = "One triangle";
        } else if (h < a && a < b) {
          result = "Two triangles (ambiguous case)";
        }
      } else {
        if (a <= b) {
          result = "No triangle";
        } else {
          result = "One triangle";
        }
      }
    
      return (
        <form onSubmit={(e) => heronsFormulaFormula(e)}>
            <h1>Heron's Formula</h1>
            <label>Side A:</label>
            <input type="number" value={a} onChange={(event) => { setA(event.target.value) }} required />
            <label>Side B:</label>
            <input type="number" value={b} onChange={(event) => { setB(event.target.value) }} required />
            <label>Side C:</label>
            <input type="number" value={h} onChange={(event) => { setH(event.target.value) }} required />
            <label>Area (Result):</label>
            <input type="text" value={result} readOnly />
            <input type="submit" value="Calculate" />
        </form>
      )
}