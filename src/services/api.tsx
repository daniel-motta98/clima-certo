import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather',
  headers: {
    'App-Token': 'url',
    Referer: 'https://api.openweathermap.org/data/2.5/weather',
  },
});

export default api;