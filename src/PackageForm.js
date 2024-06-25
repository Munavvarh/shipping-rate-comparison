// src/components/PackageForm.js
import React, { useState } from 'react';

const states = ["Select", "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];

const PackageForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    originCountry: 'United States',
    originStreet: '',
    originApt: '',
    originCity: '',
    originState: 'Select',
    originZip: '',
    destCountry: 'United States',
    destStreet: '',
    destApt: '',
    destCity: '',
    destState: 'Select',
    destZip: '',
    packageWidth: '',
    packageHeight: '',
    packageLength: '',
    packageWeight: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="package-form-container">
      <form onSubmit={handleSubmit} className="package-form">
        <h3>Origin Address</h3>
        <select name="originCountry" value={formData.originCountry} onChange={handleChange}>
          <option value="United States">United States</option>
          {/* Add other countries if needed */}
        </select>
        <input type="text" name="originStreet" placeholder="Street address or P.O. Box" value={formData.originStreet} onChange={handleChange} />
        <input type="text" name="originApt" placeholder="Apt, suite, unit, building, floor, etc." value={formData.originApt} onChange={handleChange} />
        <div className="address-row">
          <input type="text" name="originCity" placeholder="City" value={formData.originCity} onChange={handleChange} />
          <input type="text" name="originZip" placeholder="ZIP Code" value={formData.originZip} onChange={handleChange} />
        </div>
        <select name="originState" value={formData.originState} onChange={handleChange}>
          {states.map(state => <option key={state} value={state}>{state}</option>)}
        </select>

        <h3>Package Details</h3>
        <input type="text" name="packageWidth" placeholder="Please enter the width of the package" value={formData.packageWidth} onChange={handleChange} />
        <input type="text" name="packageHeight" placeholder="Please enter the height of the package" value={formData.packageHeight} onChange={handleChange} />
        <input type="text" name="packageLength" placeholder="Please enter the length of the package" value={formData.packageLength} onChange={handleChange} />
        <input type="text" name="packageWeight" placeholder="Enter the weight of the package" value={formData.packageWeight} onChange={handleChange} />
        
        <h3>Destination Address</h3>
        <select name="destCountry" value={formData.destCountry} onChange={handleChange}>
          <option value="United States">United States</option>
          {/* Add other countries if needed */}
        </select>
        <input type="text" name="destStreet" placeholder="Street address or P.O. Box" value={formData.destStreet} onChange={handleChange} />
        <input type="text" name="destApt" placeholder="Apt, suite, unit, building, floor, etc." value={formData.destApt} onChange={handleChange} />
        <div className="address-row">
          <input type="text" name="destCity" placeholder="City" value={formData.destCity} onChange={handleChange} />
          <input type="text" name="destZip" placeholder="ZIP Code" value={formData.destZip} onChange={handleChange} />
        </div>
        <select name="destState" value={formData.destState} onChange={handleChange}>
          {states.map(state => <option key={state} value={state}>{state}</option>)}
        </select>

        
        <button type="submit">Compare Rates</button>

        
      </form>
    </div>
  );
};

export default PackageForm;
