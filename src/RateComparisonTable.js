// src/components/RateComparisonTable.js
import React from 'react';

const RateComparisonTable = ({ rates }) => {
  return (
    <table className="rate-comparison-table">
      <thead>
        <tr>
          <th>SERVICES</th>
          <th>UPS</th>
          <th>FEDEX</th>
          <th>USPS</th>
        </tr>
      </thead>
      <tbody>
        {rates.map((rate, index) => (
          <tr key={index}>
            <td>{rate.service}</td>
            <td>
              <a href="https://www.ups.com" target="_blank" rel="noopener noreferrer" className="rate-link">{rate.UPS}</a>
            </td>
            <td>
              <a href="https://www.fedex.com" target="_blank" rel="noopener noreferrer" className="rate-link">{rate.FedEx}</a>
            </td>
            <td>
              <a href="https://www.usps.com" target="_blank" rel="noopener noreferrer" className="rate-link">{rate.USPS}</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RateComparisonTable;
