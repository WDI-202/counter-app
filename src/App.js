import "./App.css";
import { useState } from "react";
import Form from "./Components/Form";

function App() {
	const [number, setNumber] = useState(0);

	const plus = () => {
		setNumber(number + 1);
	};
	const minus = () => {
		setNumber(number - 1);
	};
	return (
		<div className="App">
			<h1>{number}</h1>
			<button onClick={minus}>-</button>
			<button onClick={plus}>+</button>
			<Form />
		</div>
	);
}

export default App;
