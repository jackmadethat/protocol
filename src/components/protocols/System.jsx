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
    <>
      <h3>Nutrition</h3>
      <form id="setWeight" onSubmit={handleSubmit}>
        <label htmlFor="weight">Set Desired Weight (kg):</label>
        <input type="number" id="weight" name="weight" value={weight} onChange={(event) => setWeight(event.target.value)} />
        <input type="submit" id="submitWeight" form="setWeight" value="Set" /><br />
      </form>
      <p>Desired Weight: {isNaN(weightInKg) || weightInKg === 0 ? ("Not Set") : (weightInKg + "kg")}</p>
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
      <h3>Lifestyle</h3>
      <Checklist />
      <p className="subText"><span>*</span>Persistent data relies on the browser's local storage</p>
    </>
  );
};

export default System;