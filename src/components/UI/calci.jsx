import React, { useState } from "react";
import "../../styles/calci.css";

const calciData = [
  {
    icon: "ri-apps-line",
  }
];


    const Calci = () => {
        const [number, setNumber] = useState('');
        const [dividends, setDividends] = useState([]);
      
        const handleInputChange = (e) => {
          setNumber(e.target.value);
        };
      
        const handleCalculate = () => {
          const num = parseFloat(number);
          if (!isNaN(num)) {
            setDividends([
              { label: 'Half', value: num / 2 },
              { label: 'Third', value: num / 3 },
              { label: 'Quarter', value: num / 4 },
              { label: 'Fifth', value: num / 5 }
            ]);
          } else {
            setDividends([]);
          }
        };

  return (
    <section id="service">
      <div className="container">
        <div className="services__top-content">
          <h6 className="subtitle">Our Calculator</h6>
          <h2>Save time. Let us define</h2>
          <h2 className="highlight">Your budget</h2>
        </div>



        <div className="number-input-form">
          <input
            type="number"
            value={number}
            onChange={handleInputChange}
            placeholder="Enter a number"
          />
          <button onClick={handleCalculate}>Calculate Dividends</button>
        </div>

        {dividends.length > 0 && (
          <div className="dividends-output">
            <h3>Dividends:</h3>
            <ul>
              {dividends.map((dividend, index) => (
                <li key={index}>{dividend}</li>
              ))}
            </ul>
          </div>
        )}
      </div> 
    </section>
  );
};

export default Calci;