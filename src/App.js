import React, { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (/[+*/-]$/.test(result) && /[+*/-]/.test(value)) {
      return;
    }
    setResult((prevResult) => prevResult + value);
  };

  const handleCalculate = () => {
    try {
      const calculatedResult = eval(result).toString();
      setResult(calculatedResult);
    } catch (error) {
      setResult('Error');
    }
  };

  const handleClear = () => {
    setResult('');
  };

  return (
    <div className="container">
      <form>
        <input type="text" value={result} readOnly />
      </form>
      <div className="keypad">
        {['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '0', '.', '/'
        ].map(
          (item) => (
            <button key={item} onClick={() => handleButtonClick(item)}>
              {item}
            </button>
          )
        )}
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
}

export default App;
