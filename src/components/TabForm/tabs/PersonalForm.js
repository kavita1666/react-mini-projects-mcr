import React from "react";
import "../TabForm.css";

export const PersonalForm = ({ formData, setFormData, errors }) => {
  const { name, age, email } = formData;

  return (
    <div className="personal-form-container">
      <div className="input-field">
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div className="input-field">
        <label>Age</label>
        <input type="number" value={age} onChange={(e) => setFormData({ ...formData, age: e.target.value })} />
        {errors.age && <p className="error">{errors.age}</p>}
      </div>
      <div className="input-field">
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
    </div>
  );
};
