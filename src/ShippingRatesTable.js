// src/components/ShippingRatesTable.js
import React from 'react';

const ShippingRatesTable = ({ rates }) => {
  const serviceMappings = {
    'Overnight Shipping': 'PRIORITY_OVERNIGHT',
    'Two-Day Shipping': 'FEDEX_2_DAY',
    'Three-Day Shipping': 'FEDEX_EXPRESS_SAVER',
    'Ground Shipping': 'FEDEX_GROUND',
  };

  const getFedExRate = (serviceType) => {
    const rate = rates.find(rate => rate.serviceType === serviceType);
    return rate ? `$${rate.ratedShipmentDetails[0].totalNetCharge}` : '-';
  };

  return (
    <table className="rate-comparison-table">
      <thead>
        <tr>
          <th>Services</th>
          <th>UPS</th>
          <th>FedEx</th>
          <th>USPS</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(serviceMappings).map((service, index) => (
          <tr key={index}>
            <td>{service}</td>
            <td>-</td> {/* Placeholder for UPS rate */}
            <td>{getFedExRate(serviceMappings[service])}</td>
            <td>-</td> {/* Placeholder for USPS rate */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ShippingRatesTable;
