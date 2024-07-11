import React, { useState } from 'react';

const states = ["Select", "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];

const PackageForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    originStreet: '',
    originApt: '',
    originCity: '',
    originState: '',
    originZip: '',
    destStreet: '',
    destApt: '',
    destCity: '',
    destState: '',
    destZip: '',
    weight: '',
    packageLength: '',
    packageWidth: '',
    packageHeight: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      onSubmit(formData);
    }
  };

  const validateForm = (data) => {
    const newErrors = {};
    Object.keys(data).forEach(key => {
      if (!data[key] && key !== 'originApt' && key !== 'destApt') {
        newErrors[key] = 'This field is required';
      }
    });
    return newErrors;
  };

  const renderError = (field) => {
    return errors[field] ? { border: '1px solid red' } : {};
  };

  return (
    <form onSubmit={handleSubmit} className="package-form">
      <h3>Origin Address</h3>
      <input
        type="text"
        name="originStreet"
        placeholder="Street address or P.O. Box *"
        onChange={handleChange}
        style={renderError('originStreet')}
      />
      <input
        type="text"
        name="originApt"
        placeholder="Apt, suite, unit, building, floor, etc."
        onChange={handleChange}
      />
      <div className="address-row">
        <input
          type="text"
          name="originCity"
          placeholder="City *"
          onChange={handleChange}
          style={renderError('originCity')}
        />
        <input
          type="text"
          name="originZip"
          placeholder="ZIP Code *"
          onChange={handleChange}
          style={renderError('originZip')}
        />
        <select
          name="originState"
          onChange={handleChange}
          style={renderError('originState')}
        >
          {states.map(state => <option key={state} value={state}>{state}</option>)}
        </select>
      </div>

      <h3>Package Details</h3>
      <input
        type="text"
        name="packageLength"
        placeholder="Please enter the length of the package (IN) *"
        onChange={handleChange}
        style={renderError('packageLength')}
      />
      <input
        type="text"
        name="packageWidth"
        placeholder="Please enter the width of the package (IN) *"
        onChange={handleChange}
        style={renderError('packageWidth')}
      />
      <input
        type="text"
        name="packageHeight"
        placeholder="Please enter the height of the package (IN) *"
        onChange={handleChange}
        style={renderError('packageHeight')}
      />
      <input
        type="text"
        name="weight"
        placeholder="Enter the weight of the package (LB) *"
        onChange={handleChange}
        style={renderError('weight')}
      />

      <h3>Destination Address</h3>
      <input
        type="text"
        name="destStreet"
        placeholder="Street address or P.O. Box *"
        onChange={handleChange}
        style={renderError('destStreet')}
      />
      <input
        type="text"
        name="destApt"
        placeholder="Apt, suite, unit, building, floor, etc."
        onChange={handleChange}
      />
      <div className="address-row">
        <input
          type="text"
          name="destCity"
          placeholder="City *"
          onChange={handleChange}
          style={renderError('destCity')}
        />
        <input
          type="text"
          name="destZip"
          placeholder="ZIP Code *"
          onChange={handleChange}
          style={renderError('destZip')}
        />
        <select
          name="destState"
          onChange={handleChange}
          style={renderError('destState')}
        >
          {states.map(state => <option key={state} value={state}>{state}</option>)}
        </select>
      </div>

      <button type="submit">Compare Rates</button>
    </form>
  );
};

export default PackageForm;
