
import React from 'react';

const ShippingRatesTable = ({ rates }) => {
  const serviceMappings = [
    { name: 'Ground Shipping (1-5)', ups: '03', fedex: 'FEDEX_GROUND', usps: 'PRIORITY' },
    { name: 'Three-Day Shipping', ups: '12', fedex: 'FEDEX_EXPRESS_SAVER', usps: 'PRIORITY' },
    { name: 'Two-Day Shipping', ups: '02', fedex: 'FEDEX_2_DAY', usps: 'PRIORITY EXPRESS' },
    { name: 'Overnight Shipping', ups: '01', fedex: 'PRIORITY_OVERNIGHT', usps: 'PRIORITY EXPRESS' }
  ];

  const getRate = (carrierRates, serviceType) => {
    if (carrierRates[serviceType]) {
      return `$${carrierRates[serviceType]}`;
    }
    return '-';
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
        {serviceMappings.map((service, index) => (
          <tr key={index}>
            <td>{service.name}</td>
            <td>{getRate(rates.ups, service.ups)}</td>
            <td>{getRate(rates.fedex, service.fedex)}</td>
            <td>{getRate(rates.usps, service.usps)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ShippingRatesTable;