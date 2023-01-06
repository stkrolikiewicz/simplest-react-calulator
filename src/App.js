import { useState, useRef } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";
// import { regular } from "@fortawesome/fontawesome-svg-core";
function App() {
    const inputRef = useRef(null);
    const resultRef = useRef(null);
    const [result, setResult] = useState(0);

    function plus(e) {
        e.preventDefault();
        setResult((result) => result + Number(inputRef.current.value));
    }

    function minus(e) {
        // Add the code for the minus function
        e.preventDefault();
        setResult((result) => result - Number(inputRef.current.value));
    }

    function times(e) {
        // Add the code for the plus function
        e.preventDefault();
        setResult((result) => result * Number(inputRef.current.value));
    }

    function divide(e) {
        // Add the code for the divide function
        e.preventDefault();
        setResult((result) => result / Number(inputRef.current.value));
    }

    function resetInput(e) {
        // Add the code for the resetInput function
        e.preventDefault();
        inputRef.current.value = 0;
    }

    function resetResult(e) {
        // Add the code for the resetResult function
        e.preventDefault();
        setResult(0);
    }

    return (
        <div className="App">
            <div>
                <h1>Simplest Working Calculator</h1>
            </div>
            <form>
                <p ref={resultRef}>Current total: {result}</p>
                <input
                    pattern="[0-9]"
                    ref={inputRef}
                    type="number"
                    placeholder="Type a number"
                />
                <div className="buttons">
                    <button onClick={plus}>
                        <FontAwesomeIcon icon={solid("plus")} />
                    </button>
                    <button onClick={minus}>
                        <FontAwesomeIcon icon={regular("coffee")} />
                    </button>
                    <button onClick={times}>x</button>
                    <button onClick={divide}>:</button>
                    <button onClick={resetInput}>reset Input</button>
                    <button onClick={resetResult}>reset Result</button>
                </div>
            </form>
        </div>
    );
}

export default App;
