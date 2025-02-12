import React, { useEffect, useState } from "react";
import "./CountDownTimer.css";

export const CountDownTimer = () => {
  const [startTimer, setStartTimer] = useState(false);
  const [currentTime, setCurrentTime] = useState({
    hrs: 0,
    mins: 0,
    secs: 0,
  });

  useEffect(() => {
    setCurrentTime({
      hrs: 0,
      mins: 0,
      secs: 0,
    });
  }, []);

  useEffect(() => {
    if (startTimer) {
      const intervalId = setInterval(() => {
        handleStartTimer();
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [currentTime, startTimer]);

  const handleStartTimer = () => {
    setStartTimer(true);

    let { hrs, mins, secs } = currentTime;
    let updatedHours, updatedMins, updatedSecs;
    if (secs < 60) {
      updatedSecs = secs + 1;
      updatedMins = mins;
      updatedHours = hrs;
    } else if (secs === 60 && mins < 60) {
      updatedSecs = 0;
      updatedMins = mins + 1;
      updatedHours = hrs;
    } else if (hrs < 24 && mins === 60) {
      updatedMins = 0;
      updatedHours = hrs + 1;
      updatedSecs = secs + 1;
    } else if (hrs === 24) {
      updatedHours = 0;
      updatedMins = 0;
      updatedSecs = 0;
    }

    setCurrentTime({
      hrs: updatedHours,
      mins: updatedMins,
      secs: updatedSecs,
    });
  };

  const handleStopTimer = () => {
    setStartTimer(false);
  }

  const handleResetTimer = () => {
    setStartTimer(false);
    setCurrentTime({
      hrs: 0,
      mins: 0,
      secs: 0,
    });
  };

  return (
    <div className="container-outer">
      <h1>CountDownTimer</h1>
      <h3 className="timer">
        {currentTime.hrs} : {currentTime.mins} : {currentTime.secs}
      </h3>
      <div className="button-container">
        <button className="btn" onClick={handleStartTimer}>
          Start
        </button>
        <button className="btn" onClick={handleStopTimer}>
          Stop
        </button>
        <button className="btn" onClick={handleResetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
};
