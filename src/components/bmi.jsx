import React, { useState } from "react";
import "../App.css";

const BmiCalculator = () => {
  const [age, setAge] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [system, setSystem] = useState("metric"); 
  const [bmi, setBmi] = useState();
  const [msg, setMsg] = useState();
  const [gender, setGender] = useState("male");
  const reload = () => {
    window.location.reload();
  };

  const handleCalculation = (e) => {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Enter a valid number!");
    } else {
      let heightInMeters = height;
      if (system === "metric") {
        heightInMeters = height / 100;
      }

      let weightInKg = weight;
      if (system === "imperial") {
        weightInKg = weight / 2.20462;
      }


      let bmiFormula = weightInKg / (heightInMeters * heightInMeters);
      setBmi(bmiFormula.toFixed(2));

      if (bmiFormula < 18.5) {
        setMsg("You are Underweight");
      } else if (bmiFormula >= 18.5 && bmiFormula <= 24.9) {
        setMsg("You are Normal");
      } else if (bmiFormula >= 25.0 && bmiFormula <= 29.9) {
        setMsg("You are Overweight");
      } else if (bmiFormula >= 30.0 && bmiFormula <= 34.9) {
        setMsg("You are Obese");
      } else if (bmiFormula > 35.0) {
        setMsg("You are Extremely Obese");
      }
    }
  };

  const handleSystemToggle = () => {
    setSystem(system === "metric" ? "imperial" : "metric");
  };

  return (
    <>
    <div className="maindiver">
      <h1 className="header">BMI Calculator</h1>
      <div className="selector">
        Metric{" "}
        <label className="switch">
          <input
            type="checkbox"
            checked={system === "imperial"}
            onChange={handleSystemToggle}
          />
          <span className="slider round"></span>
        </label>{" "}
        Imperial
      </div>
      <br />
      <form onSubmit={handleCalculation}>
      <div className="txt">
          <label>Gender</label>
          <br />
          <select
            className="input inp"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <br />
        <div className="txt">
          <label>Age</label>
          <br />
          <input
            type="number"
            placeholder="Age"
            className="inp"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        
        <br />
        <div className="txt">
          <label>Weight {system === "metric" ? "(kg)" : "(lb)"}</label>
          <br />
          <input
            type="number"
            className="inp"
            placeholder={`Weight ${system === "metric" ? "(kg)" : "(lb)"}`}
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <br />
        <div className="txt">
          <label>Height {system === "metric" ? "(cm)" : "(inches)"}</label>
          <br />
          <input
            type="number"
            className="inp"
            placeholder={`Height ${system === "metric" ? "(cm)" : "(inches)"} ` }
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <br />
        <div className="butq">
          <button type="submit" className="button-62">Calculate!</button>{" "}
          <button type="button" className="button-62" onClick={reload}>
            Reload
          </button>
        </div>

        <br />

        <div>
          <h3>Age: {age}</h3>
          <h3>Your BMI is: {bmi}</h3>
          <span>{msg}</span>
        </div>
      </form>
      </div>
      <br /><br />
      <div className="erdemlabel"><a href="https://github.com/erdemonal11" target="_blank" className="erdemlabel">erdemapps.</a></div>  
    </>
  );
};

export default BmiCalculator;
