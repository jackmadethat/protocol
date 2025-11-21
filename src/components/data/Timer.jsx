import { useState, useEffect } from 'react'

const Timer = () => {
  const [time, setTime] = useState(new Date());
  const [intervalTime, setIntervalTime] = useState(30);
  const [restTime, setRestTime] = useState(30);
  const [currentTime, setCurrentTime] = useState(intervalTime);
  const [isInterval, setIsInterval] = useState(true);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(new Date());
        if (currentTime > 0) {
          setCurrentTime((prevTime) => prevTime - 1);
        } else {
          if (isInterval) {
            setIsInterval(false);
            setCurrentTime(restTime);
          } else {
            setIsInterval(true);
            setCurrentTime(intervalTime);
          }
        }
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, currentTime, isInterval, intervalTime, restTime]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsInterval(true);
    setCurrentTime(intervalTime);
  };

  const handleIntervalTimeChange = (time) => {
    setIntervalTime(time);
    if (isInterval) {
      setCurrentTime(time);
    }
    setIsRunning(false);
    setIsInterval(true);
  };

  const handleRestTimeChange = (time) => {
    setRestTime(time);
    if (!isInterval) {
      setCurrentTime(time);
    }
  };

  const minutes = Math.floor(currentTime / 60).toString().padStart(2, '0');
  const seconds = (currentTime % 60).toString().padStart(2, '0');
  return (
    <>
        <p className="timer">{minutes}<span className="adjust">:</span>{seconds}</p>
        <h3 className="step">{isInterval ? 'Interval' : 'Rest'}</h3>
        <div className="timerButtons">
          <button onClick={handleStart}><span>Start</span></button>
          <button onClick={handleStop}><span>Stop</span></button>
          <button onClick={handleReset}><span>Reset</span></button>
          <h3>Interval Time</h3>
          <button className={intervalTime === 30 ? 'active' : ''} onClick={() => handleIntervalTimeChange(30)}>30s</button>
          <button className={intervalTime === 45 ? 'active' : ''} onClick={() => handleIntervalTimeChange(45)}>45s</button>
          <button className={intervalTime === 60 ? 'active' : ''} onClick={() => handleIntervalTimeChange(60)}>60s</button>
          <button className={intervalTime === 90 ? 'active' : ''} onClick={() => handleIntervalTimeChange(90)}>90s</button>
          <button className={intervalTime === 120 ? 'active' : ''} onClick={() => handleIntervalTimeChange(120)}>120s</button>
          <h3>Rest Time</h3>
          <button className={restTime === 30 ? 'active' : ''} onClick={() => handleRestTimeChange(30)}>30s</button>
          <button className={restTime === 45 ? 'active' : ''} onClick={() => handleRestTimeChange(45)}>45s</button>
          <button className={restTime === 60 ? 'active' : ''} onClick={() => handleRestTimeChange(60)}>60s</button>
          <button className={restTime === 90 ? 'active' : ''} onClick={() => handleRestTimeChange(90)}>90s</button>
          <button className={restTime === 120 ? 'active' : ''} onClick={() => handleRestTimeChange(120)}>120s</button>
        </div>
    </>
  )
}

export default Timer