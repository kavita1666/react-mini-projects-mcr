import React, { useState } from "react";
import "./FormStepper.css";
import { formStepperConfig } from "../../helpers/formStepperConfig";

export const FormStepper = () => {
  const [currentStepper, setCurrentStepper] = useState(1);

  const handleNext = () => {
    if (currentStepper < formStepperConfig.length) {
      setCurrentStepper(currentStepper + 1);
    }
  };

  return (
    <div className="form-wrapper">
      <div className="stepper-wrapper">
        {formStepperConfig.map((item) => (
          <div className={`step ${item.id < currentStepper ? "completed" : ""} ${item.id === currentStepper ? "active" : ""} `} key={item.id}>
            <div className="step-number">{item.id < currentStepper ? "✔" : item.id}</div>
            <h4 className="step-title">{item.title}</h4>
          </div>
        ))}
      </div>
      <div className={`component-container `}>
        <h2>{formStepperConfig[currentStepper-1]?.element}</h2>
        <button className="button" onClick={handleNext} disabled={currentStepper === formStepperConfig.length}>
          {currentStepper === formStepperConfig.length ? "Congratulations!" : "Next"}
        </button>
      </div>
    </div>
  );
};
