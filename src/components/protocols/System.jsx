import { useState, useEffect } from 'react';
import PieChart from '../data/PieChart';
import Checklist from '../data/Checklist';

const System = () => {
  const [weight, setWeight] = useState('');
  const [weightInPounds, setWeightInPounds] = useState(0);
  const [weightInKg, setWeightInKg] = useState(0);

  useEffect(() => {
    const storedWeight = localStorage.getItem('weight');
    if (storedWeight) {
      setWeightInKg(parseFloat(storedWeight));
      setWeightInPounds(parseFloat(storedWeight) * 2.20462);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const weightInKg = parseFloat(weight);
    const weightInPounds = weightInKg * 2.20462;
    setWeightInPounds(weightInPounds);
    setWeightInKg(weightInKg);
    localStorage.setItem('weight', weightInKg);
    setWeight('');
  };

  const getShreddedData = [
    { value: Math.round(weightInPounds) },
    { value: Math.round(weightInPounds * 0.65) },
    { value: Math.round(weightInPounds * 0.4) },
  ];

  const maintainData = [
    { value: Math.round(weightInPounds) },
    { value: Math.round(weightInPounds * 0.3) },
    { value: Math.round(weightInPounds * 0.8) },
  ];

  return (
    <div className="systemContainer">
      <h3>Benchmarks</h3>
      <div className="list" style={{ maxWidth: "400px" }}>
        <ul className="systemColorList">
          <li><b>Sit-Ups</b> (feet pinned): 60 / 2min</li>
          <li><b>Push-Ups</b>: 40 / 2min</li>
          <li><b>Pull-Ups</b>: 6 / set</li>
          <li><b>2.5km Run</b>: 10min 30sec</li>
          <li><b>Beep Test</b> (20m): 10.1</li>
        </ul>
      </div>
      <p>Download beep test audio <a href="./src/assets/beeptest.mp3" target="_blank">here</a>.</p>
      <h3>Lifestyle</h3>
      <Checklist />
      <p className="subText"><span className="systemP">*</span>Persistent data relies on the browser's local storage.</p>
      <h3>Nutrition</h3>
      <form id="setWeight" onSubmit={handleSubmit}>
        <label htmlFor="weight">Set Desired Weight (kg):</label>
        <input type="number" id="weight" name="weight" value={weight} onChange={(event) => setWeight(event.target.value)} />
        <input type="submit" id="submitWeight" form="setWeight" value="Set" /><br />
      </form>
      <p style={{ marginTop: "0px" }}><b>Desired Weight: {isNaN(weightInKg) || weightInKg === 0 ? ("Not Set") : (weightInKg + "kg")}</b></p>
      {isNaN(weightInKg) || weightInKg === 0 ? <></> :
        <div>
          <div>
            <h4>Get Shredded</h4>
            <p className="nutritionData">
              Protein: 1g/lb of BW = <b>{Math.round(weightInPounds)}</b>g<br />
              Fats: 0.65g/lb of BW = <b>{Math.round(weightInPounds * 0.65)}</b>g<br />
              Carbs: 0.4g/lb of BW = <b>{Math.round(weightInPounds * 0.4)}</b>g<br />
            </p>
            <PieChart data={getShreddedData} />
            <p>Total Calories per Day: <b>{Math.round(weightInPounds * 4 + (weightInPounds * 0.4 * 4) + (weightInPounds * 0.65 * 9))}</b></p>
          </div>
          <div>
            <h4>Maintain</h4>
            <p className="nutritionData">
              Protein: 1g/lb of BW = <b>{Math.round(weightInPounds)}</b>g<br />
              Fats: 0.3g/lb of BW = <b>{Math.round(weightInPounds * 0.3)}</b>g<br />
              Carbs: 0.8g/lb of BW = <b>{Math.round(weightInPounds * 0.8)}</b>g<br />
            </p>
            <PieChart data={maintainData} />
            <p>Total Calories per Day: <b>{Math.round(weightInPounds * 4 + (weightInPounds * 0.8 * 4) + (weightInPounds * 0.3 * 9))}</b></p>
          </div>
        </div>
      }
      <p className="subText"><span className="systemP">*</span>Persistent data relies on the browser's local storage.</p>
      <h3>Rules</h3>
      <div className="list" style={{ maxWidth: "400px" }}>
        <ol className="systemOrderedList">
          <li><b>Be consistent</b>. Work out at least 3 times per week with a rest day after workout days. Stick with a workout program for a minimum of 30 days before evaluating if it's working for you.</li>
          <li><b>Need no witness</b>. Don't work out for any other reason than your own development and wellbeing.</li>
          <li><b>Track your stats</b>. Journal notes about your workouts, take regular progress pics, and occasionally max-out your deadlift, squat and bench-press to build self-knowledge and understand progression needs.</li>
          <li><b>Prioritize sleep and rest</b>. High-quality and consistent sleep is critical for maintaining energy and focus throughout the day, as well as a well-functioning metabolism, and rest days are crucial for recovery, healing, and good mental health.</li>
        </ol>
      </div>
    </div>
  );
};

export default System;