import './AmbiguousCase.css';
import { useState } from "react";

const AmbiguousCase = () => {
    const [angleA, setAngleA] = useState("");
    const [sideA, setSideA] = useState("");
    const [sideB, setSideB] = useState("");
    const [result, setResult] = useState("");
    const calculateAmbiguous = () => {
        const a = parseFloat(sideA);
        const b = parseFloat(sideB);
        const angle = parseFloat(angleA);
        const angleRad = (angle * Math.PI) / 180;
        const h = b * Math.sin(angleRad);

        if (angle < 90) {
            if (a < h) {
                setResult("No triangle");
            } else if (a === h) {
                setResult("Right triangle");
            } else if (a > b) {
                setResult("One triangle");
            } else {
                setResult("Two triangles (ambiguous case)");
            }
        } else {
            setResult(a <= b ? "No triangle" : "One triangle");
        }
    };

    return (
        <div className="box">
            <h2>Ambiguous Case</h2>
            <label>Angle A:</label>
            <input
                type="number"
                value={angleA}
                onChange={(e) => setAngleA(e.target.value)}
            />
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
            <label>Triangle Type (Result):</label>
            <input type="text" value={result} readOnly />
            <button onClick={calculateAmbiguous}>Calculate</button>
        </div>
    );
};

export default AmbiguousCase;