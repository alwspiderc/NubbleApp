import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MQ.D8mFlkSGvHpVQ5CnfWMdjXdq71NyrzA4frU3lGGzFk8yZs0lhTDH873ugOqM',
  },
});
