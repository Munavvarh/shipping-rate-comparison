import React, { useState } from 'react';
import axios from 'axios';
import PackageForm from './PackageForm';
import ShippingRatesTable from './ShippingRatesTable';

const RateFetcher = () => {
  const [rates, setRates] = useState({ fedex: {}, ups: {} });
  const [error, setError] = useState(null);

  const getAccessToken = async (carrier) => {
    try {
      const method = carrier === 'ups' ? 'get' : 'post';
      const response = await axios[method](`http://127.0.0.1:5000/${carrier}/token`);
      const accessToken = response.data.access_token;
      if (!accessToken) {
        throw new Error(`Failed to retrieve ${carrier.toUpperCase()} access token`);
      }
      return accessToken;
    } catch (error) {
      console.error(`Error fetching ${carrier} access token:`, error.response?.data || error.message);
      setError(error.response?.data?.message || `Failed to retrieve ${carrier.toUpperCase()} access token`);
      throw error;
    }
  };

  const getFedExRateQuote = async (accessToken, formData) => {
    const payload = {
      accountNumber: { value: '740561073' },
      rateRequestControlParameters: { returnTransitTimes: true },
      requestedShipment: {
        shipper: {
          address: {
            streetLines: [formData.originStreet, formData.originApt],
            city: formData.originCity,
            stateOrProvinceCode: formData.originState,
            postalCode: formData.originZip,
            countryCode: 'US'
          }
        },
        recipient: {
          address: {
            streetLines: [formData.destStreet, formData.destApt],
            city: formData.destCity,
            stateOrProvinceCode: formData.destState,
            postalCode: formData.destZip,
            countryCode: 'US'
          }
        },
        pickupType: 'DROPOFF_AT_FEDEX_LOCATION',
        rateRequestType: ['ACCOUNT'],
        requestedPackageLineItems: [
          {
            groupPackageCount: 1,
            weight: { units: 'LB', value: parseFloat(formData.weight) },
            dimensions: {
              length: parseFloat(formData.packageLength),
              width: parseFloat(formData.packageWidth),
              height: parseFloat(formData.packageHeight),
              units: 'IN'
            }
          }
        ]
      }
    };

    try {
      const response = await axios.post(
        'https://apis-sandbox.fedex.com/rate/v1/rates/quotes',
        payload,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.data.output && response.data.output.rateReplyDetails) {
        const rateDetails = response.data.output.rateReplyDetails.reduce((acc, detail) => {
          acc[detail.serviceType] = detail.ratedShipmentDetails[0].totalNetCharge;
          return acc;
        }, {});
        return rateDetails;
      } else {
        setError('No rate details found');
        return {};
      }
    } catch (error) {
      console.error('Error fetching FedEx rate quotes:', error.response?.data || error.message);
      setError(error.response?.data?.message || 'Failed to fetch FedEx rate quotes');
      throw error;
    }
  };

  const getUPSRateQuote = async (accessToken, formData) => {
    const payload = {
      shipper_info: {
        account_number: 'J0469H',
        name: 'Shipper',
        address1: formData.originStreet,
        address2: formData.originApt,
        city: formData.originCity,
        state: formData.originState,
        zip: formData.originZip,
        country: 'US'
      },
      from_address_info: {
        name: 'Shipper',
        address1: formData.originStreet,
        address2: formData.originApt,
        city: formData.originCity,
        state: formData.originState,
        zip: formData.originZip,
        country: 'US'
      },
      to_address_info: {
        name: 'Recipient',
        address1: formData.destStreet,
        address2: formData.destApt,
        city: formData.destCity,
        state: formData.destState,
        zip: formData.destZip,
        country: 'US'
      },
      package_info: {
        Weight: formData.weight,
        length: formData.packageLength,
        width: formData.packageWidth,
        height: formData.packageHeight,
        package_type: '02'
      },
      service_codes: ['01', '02', '03', '12']
    };

    try {
      const response = await axios.post(
        'http://127.0.0.1:5000/ups/shipping-cost',
        payload,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      return response.data.total_charges || {};
    } catch (error) {
      console.error('Error fetching UPS rate quotes:', error.response?.data || error.message);
      setError(error.response?.data?.message || 'Failed to fetch UPS rate quotes');
      throw error;
    }
  };

  const fetchRates = async (formData) => {
    setError(null);
    try {
      const fedexAccessToken = await getAccessToken('fedex');
      const fedexRateDetails = await getFedExRateQuote(fedexAccessToken, formData);

      const upsAccessToken = await getAccessToken('ups');
      const upsRateDetails = await getUPSRateQuote(upsAccessToken, formData);

      setRates({ fedex: fedexRateDetails, ups: upsRateDetails });
    } catch (error) {
      // The error is already handled in the getAccessToken or getRateQuote function
    }
  };

  return (
    <div>
      <PackageForm onSubmit={fetchRates} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {(Object.keys(rates.fedex).length > 0 || Object.keys(rates.ups).length > 0) && (
        <ShippingRatesTable rates={rates} />
      )}
    </div>
  );
};

export default RateFetcher;
