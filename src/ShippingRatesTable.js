import React from 'react';

const ShippingRatesTable = ({ rates, formData }) => {
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

  const generateUPSUrl = (formData) => {
    const { originCity, originZip, destCity, destZip } = formData;
    return `https://wwwapps.ups.com/ctc/request?loc=en_US&origCity=${encodeURIComponent(originCity)}&origZip=${encodeURIComponent(originZip)}&destCity=${encodeURIComponent(destCity)}&destPostalCode=${encodeURIComponent(destZip)}`;
  };

  const generateFedExUrl = (formData) => {
    const { originCity, originZip, destCity, destZip } = formData;
    return `https://www.fedex.com/en-us/shipping/last-minute-rates.html?originCity=${encodeURIComponent(originCity)}&originZip=${encodeURIComponent(originZip)}&destCity=${encodeURIComponent(destCity)}&destZip=${encodeURIComponent(destZip)}`;
  };

  const generateUSPSUrl = (formData) => {
    const { originZip, destZip } = formData;
    return `https://postcalc.usps.com/?Origin=${encodeURIComponent(originZip)}&Destination=${encodeURIComponent(destZip)}`;
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
            <td className="clickable" onClick={() => window.open(generateUPSUrl(formData), '_blank')}>{getRate(rates.ups, service.ups)}</td>
            <td className="clickable" onClick={() => window.open(generateFedExUrl(formData), '_blank')}>{getRate(rates.fedex, service.fedex)}</td>
            <td className="clickable" onClick={() => window.open(generateUSPSUrl(formData), '_blank')}>{getRate(rates.usps, service.usps)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ShippingRatesTable;
