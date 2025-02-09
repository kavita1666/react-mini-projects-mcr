import "../TabForm.css";

export const SettingsForm = ({ formData, setFormData, errors }) => {
  const { streetAddress, city, state, country, pincode } = formData;

  return (
    <div className="address-form-container">
      <div className="input-field">
        <label>Street Address</label>
        <input type="text" value={streetAddress} onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })} />
        {errors.streetAddress && <p className="error">{errors.streetAddress}</p>}
      </div>
      <div className="input-field">
        <label>City</label>
        <input type="text" value={city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} />
        {errors.city && <p className="error">{errors.city}</p>}
      </div>
      <div className="input-field">
        <label>State</label>
        <input type="text" value={state} onChange={(e) => setFormData({ ...formData, state: e.target.value })} />
        {errors.state && <p className="error">{errors.state}</p>}
      </div>
      <div className="input-field">
        <label>Country</label>
        <input type="text" value={country} onChange={(e) => setFormData({ ...formData, country: e.target.value })} />
        {errors.country && <p className="error">{errors.country}</p>}
      </div>
      <div className="input-field">
        <label>Pincode</label>
        <input type="number" value={pincode} onChange={(e) => setFormData({ ...formData, pincode: e.target.value })} />
        {errors.pincode && <p className="error">{errors.pincode}</p>}
      </div>
    </div>
  );
};
