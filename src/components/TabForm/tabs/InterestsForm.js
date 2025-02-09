import "../TabForm.css";

export const InterestForm = ({ formData, setFormData, errors }) => {
  const { interests } = formData;

  const handleCheckboxChange = (e, newInterest) => {
    setFormData({ ...formData, interests: interests.includes(newInterest) ? interests.filter((i) => i !== newInterest) : [...interests, newInterest] });
  };

  return (
    <div className="interest-form-container">
      <div className="interest-checkbox">
        <label>
          <input type="checkbox" checked={interests.includes("coding")} onClick={(e) => handleCheckboxChange(e, "coding")} />
          coding
        </label>
        <label>
          <input type="checkbox" checked={interests.includes("sports")} onClick={(e) => handleCheckboxChange(e, "sports")} />
          sports
        </label>
        <label>
          <input type="checkbox" checked={interests.includes("cooking")} onClick={(e) => handleCheckboxChange(e, "cooking")} />
          cooking
        </label>
        <label>
          <input type="checkbox" checked={interests.includes("gardening")} onClick={(e) => handleCheckboxChange(e, "gardening")} />
          gardening
        </label>
        {errors.interests && <p className="error">{errors.interests}</p>}

      </div>
    </div>
  );
};
