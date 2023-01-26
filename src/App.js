import { useState, useRef } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
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
                <p ref={resultRef}>
                    Current total: <b>{result}</b>
                </p>
                <input
                    pattern="[0-9]"
                    ref={inputRef}
                    type="number"
                    placeholder="Type a number"
                />
                <div className="buttons">
                    <div>
                        <button onClick={plus}>
                            <FontAwesomeIcon icon={solid("plus")} />
                        </button>
                        <button onClick={minus}>
                            <FontAwesomeIcon icon={solid("minus")} />
                        </button>
                        <button onClick={times}>
                            <FontAwesomeIcon icon={solid("xmark")} />
                        </button>
                        <button onClick={divide}>
                            <FontAwesomeIcon icon={solid("divide")} />
                        </button>
                    </div>
                    <div className="reset">
                        <button onClick={resetInput}>reset Input</button>
                        <button onClick={resetResult}>reset Result</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default App;
