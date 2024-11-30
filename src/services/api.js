import axios from 'axios';

const BASE_URL = 'https://api.tvmaze.com';

export const getSchedule = async () => {
  const response = await axios.get(`${BASE_URL}/schedule?country=US`);
  return response.data;
};

export const getShowDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}/shows/${id}`);
  return response.data;
};
