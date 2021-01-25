import React, { useState } from "react";
import "./Calculator.css";

export default function Calculator() {
	const [firstInput, setFirstInput] = useState("");
	const [secondInput, setSecondInput] = useState("");
    const [result, setResult] = useState("");

	return (
		<div className="container">
			<div className="input-fields">
				<input type="number" placeholder="First input" onChange={(e) => setFirstInput(e.target.value)} />
				<input type="number" placeholder="Second input" onChange={(e) => setSecondInput(e.target.value)} />
			</div>
			<div className="operators">
				<button onClick={() => setResult(Number(firstInput) + Number(secondInput))}>+</button>
				<button onClick={() => setResult(Number(firstInput) - Number(secondInput))}>-</button>
				<button onClick={() => setResult(Number(firstInput) * Number(secondInput))}>*</button>
				<button onClick={() => setResult(Number(firstInput) / Number(secondInput))}>/</button>
				<button onClick={() => setResult(Number(firstInput) % Number(secondInput))}>%</button>
                <button id="clear" onClick={() => setResult("")}>C</button>
			</div>
			<h1>{result}</h1>
		</div>
	);
}
