// src/App.js
import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import PackageForm from './PackageForm';
import RateComparisonTable from './RateComparisonTable';

function App() {
  const [rates, setRates] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const handleFormSubmit = (formData) => {
    // Fetch data from backend here and update rates state
    // For now, we'll use dummy data
    const dummyRates = [
      { service: 'Overnight Shipping', UPS: '$30.00', FedEx: '$32.00', USPS: '$31.00' },
      { service: 'Two-Day Shipping', UPS: '$20.00', FedEx: '$22.00', USPS: '$21.00' },
      { service: 'Three-Day Shipping', UPS: '$15.00', FedEx: '$17.00', USPS: '$16.00' },
      { service: 'Ground Shipping', UPS: '$10.00', FedEx: '$12.00', USPS: '$11.00' }
    ];
    setRates(dummyRates);
    setShowTable(true);
  };

  return (
    <div className="App">
      <Header />
      <div className="package-form-container">
        <PackageForm onSubmit={handleFormSubmit} />
      </div>
      {showTable && <RateComparisonTable rates={rates} />}
    </div>
  );
}

export default App;
