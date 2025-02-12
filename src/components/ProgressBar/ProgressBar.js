import React, { useEffect, useState } from "react";
import "./ProgressBar.css";

export const ProgressBar = () => {
  const [percentageComplete, setPercentageComplete] = useState(0);

  useEffect(() => {
    if (percentageComplete < 100) {
      const interval = setInterval(() => {
        setPercentageComplete((prev) => prev + 1);
      }, 100);

      return () => clearInterval(interval);
    } 
    // else if (percentageComplete === 100) {
    //   alert("Progress bar is complete");
    // }
  }, [percentageComplete]);

  return (
    <div className="progress-bar-container">
      <h1>ProgressBar</h1>
      <div className="progress-bar">
        <span className="percentage-complete">{percentageComplete + "%"}</span>
        <div style={{ width: `${percentageComplete}%` }} role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={percentageComplete} />
      </div>
    </div>
  );
};
