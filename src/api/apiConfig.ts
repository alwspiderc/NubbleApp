import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MQ.vdZ3D-XXBgQc7FQfveg0m9WIDtzErVLSb7LXdNYNh9ngTJRAw0cK70qEmb90',
  },
});
