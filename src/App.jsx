import React, { useState } from "react";
import "./App.css";

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = () => {
    if (height && weight) {
      const bmiValue = (weight / (height / 100) ** 2).toFixed(1);
      setBmi(bmiValue);
      if (bmiValue < 18.5) {
        setMessage("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        setMessage("Healthy");
      } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        setMessage("Overweight");
      } else {
        setMessage("Obese");
      }
    } else {
      alert("Please enter valid height and weight!");
    }
  };

  const resetFields = () => {
    setHeight('');
    setWeight('');
    setBmi(null);
    setMessage('');
  };

  return (
    <div className="bmi-container">
      <div className="bmi-header">
        <img src="/path-to-icon.png" alt="BMI Icon" />
        <h1>BMI Calculator for Adults</h1>
      </div>
      <div className="bmi-inputs">
        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div className="bmi-buttons">
        <button onClick={resetFields}>Reset</button>
        <button onClick={calculateBMI}>Calculate</button>
      </div>
      {bmi && (
        <div className="bmi-result">
          <h2>{bmi}</h2>
          <p>You are <span className={message.toLowerCase()}>{message}!</span></p>
        </div>
      )}
      <div className="bmi-chart">
        <p><span className="underweight">Underweight</span> Below 18.5</p>
        <p><span className="healthy">Healthy</span> 18.5 - 24.9</p>
        <p><span className="overweight">Overweight</span> 25 - 29.9</p>
        <p><span className="obese">Obese</span> 30 and Above</p>
      </div>
    </div>
  );
};

export default BMICalculator;
