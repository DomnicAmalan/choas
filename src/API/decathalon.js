import Axios from 'axios';

const DecathalonInstance = Axios.create({
  baseURL: 'https://sports.api.decathlon.com',
});

export const allSports = async () => {
  const { data } = await DecathalonInstance.get('/sports');
  return data.data;
};

export const locationBasedSports = async () => {
  const { data } = await DecathalonInstance.get(
    '/sports/recommendations/geolocation', { params: { coordinates: '102.5528,14.2350' } },
  );
  return data;
};
