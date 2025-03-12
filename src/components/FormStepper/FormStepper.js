import React, { useState } from "react";
import "./FormStepper.css";
import { formStepperConfig } from "../../helpers/formStepperConfig";

export const FormStepper = () => {
  const [currentStepper, setCurrentStepper] = useState(1);

  return (
    <div className="form-wrapper">
      {/* <h1>FormStepper</h1> */}
      <div className="stepper-wrapper">
        {formStepperConfig.map((item) => (
          <div className="step" key={item.id}>
            <div className="step-number">1</div>
            <div className="step-title">{item.title}</div>
          </div>
        ))}
      </div>
      <div className={`component-container `}>
        <h2>{formStepperConfig[currentStepper].element}</h2>
        <button className="button">Next</button>
      </div>
    </div>
  );
};
