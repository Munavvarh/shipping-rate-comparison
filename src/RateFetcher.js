// src/RateFetcher.js
import React, { useState } from 'react';
import axios from 'axios';
import PackageForm from './PackageForm';
import ShippingRatesTable from './ShippingRatesTable';

const RateFetcher = () => {
  const [rates, setRates] = useState([]);
  const [error, setError] = useState(null);

  const getAccessToken = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/fedex/token');
      const accessToken = response.data.access_token;
      if (!accessToken) {
        throw new Error('Failed to retrieve FedEx access token');
      }
      return accessToken;
    } catch (error) {
      console.error('Error fetching access token:', error.response?.data || error.message);
      setError(error.response?.data?.message || 'Failed to retrieve FedEx access token');
      throw error;
    }
  };

  const getRateQuote = async (accessToken, formData) => {
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
        return response.data.output.rateReplyDetails;
      } else {
        setError('No rate details found');
        return [];
      }
    } catch (error) {
      console.error('Error fetching rate quotes:', error.response?.data || error.message);
      setError(error.response?.data?.message || 'Failed to fetch rate quotes');
      throw error;
    }
  };

  const fetchRates = async (formData) => {
    setError(null); // Reset error state before starting new request
    try {
      const accessToken = await getAccessToken();
      const rateDetails = await getRateQuote(accessToken, formData);
      setRates(rateDetails);
    } catch (error) {
      // The error is already handled in the getAccessToken or getRateQuote function
    }
  };

  return (
    <div>
      <PackageForm onSubmit={fetchRates} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {rates.length > 0 && (
        <ShippingRatesTable rates={rates} />
      )}
    </div>
  );
};

export default RateFetcher;
