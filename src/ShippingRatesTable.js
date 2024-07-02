import React from 'react';



  const ShippingRatesTable = ({ rates }) => {
    const serviceMappings = [
      { name: 'Next Day Air Early', ups: '14', fedex: 'FIRST_OVERNIGHT' },
      { name: '3 Day Select', ups: '12', fedex: 'FEDEX_EXPRESS_SAVER' },
      { name: 'Ground (1-5)', ups: '03', fedex: 'FEDEX_GROUND' }
    ];

    /*
    const ShippingRatesTable = ({ rates }) => {
  const serviceMappings = [
    { name: 'Next Day Air Early', ups: '14', fedex: 'FIRST_OVERNIGHT' },
    { name: 'Next Day Air', ups: '01', fedex: 'PRIORITY_OVERNIGHT' },
    { name: 'Next Day Air Saver', ups: '13', fedex: 'STANDARD_OVERNIGHT' },
    { name: '2nd Day Air A.M.', ups: '59', fedex: 'FEDEX_2_DAY_AM' },
    { name: '2nd Day Air', ups: '02', fedex: 'FEDEX_2_DAY' },
    { name: '3 Day Select', ups: '12', fedex: 'FEDEX_EXPRESS_SAVER' },
    { name: 'Ground', ups: '03', fedex: 'FEDEX_GROUND' }
  ];
  */
 
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
            <td>-</td> {/* Placeholder for USPS rate */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ShippingRatesTable;
