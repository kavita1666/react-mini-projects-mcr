import React, { useEffect, useState } from "react";
import "./TabForm.css";
import { tabFormConfig } from "../../helpers/tabFormHelper";

export const TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    age: 0,
    email: "",
    interests: [],
    streetAddress: "",
    state: "",
    city: "",
    country: "",
    pincode: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name || formData.name.trim().length < 5) {
      newErrors.name = "Name is required";
    }
    if (!formData.age || formData.age < 18 || formData.age > 60) {
      newErrors.age = "Minimum age should be 18";
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is not valid";
    }
    if (formData.interests.length === 0) {
      newErrors.interests = "Atleast one interest is required";
    }
    if (!formData.streetAddress) {
      newErrors.streetAddress = "Street Address is required";
    }
    if (!formData.state) {
      newErrors.state = "State is required";
    }
    if (!formData.city) {
      newErrors.city = "City is required";
    }
    if (!formData.country) {
      newErrors.country = "Country is required";
    }
    if (!formData.pincode) {
      newErrors.pincode = "Pincode is required";
    }
    setErrors(newErrors);
    console.log("newErrors", newErrors);
    return newErrors.length === 0;
  };

  const ActiveComponent = tabFormConfig[activeTab].component;

  const handleSubmitForm = () => {
    console.log(errors);
    if (Object.keys(errors).length === 0) {
      alert(`${formData.name} your form is submitted successfully`);
    }
  };

  useEffect(() => {
    validateForm();
  }, [formData]);

  const handleNextOrPrevBtn = () => {
    switch (activeTab) {
      case 0:
        return (
          <button className="switch-btn" onClick={() => setActiveTab(activeTab + 1)}>
            Next
          </button>
        );

      case tabFormConfig.length - 1:
        return (
          <button className="switch-btn" onClick={handleSubmitForm}>
            Submit
          </button>
        );

      default:
        return (
          <div className="btn-container">
            <button className="switch-btn" onClick={() => setActiveTab(activeTab - 1)}>
              Prev
            </button>
            <button className="switch-btn" onClick={() => setActiveTab(activeTab + 1)}>
              Next
            </button>
          </div>
        );
    }
  };

  return (
    <div className="outer-container">
      <div className="inner-container">
        <h1>Tab Form</h1>
        <div className="form-nav-container">
          {tabFormConfig.map((item, index) => {
            return (
              <button key={index} className={"tabs" + (activeTab === index ? " active" : "")} onClick={() => setActiveTab(index)}>
                {item.tabName}
              </button>
            );
          })}
        </div>
        <div className="form-container">
          <ActiveComponent formData={formData} setFormData={setFormData} errors={errors} />
        </div>
        {handleNextOrPrevBtn()}
        {errors.length > 0 && <p className="error">Please fill the required fields</p>}
      </div>
    </div>
  );
};
