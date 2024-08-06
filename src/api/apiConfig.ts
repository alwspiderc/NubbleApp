import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer Mg.33gTmspwpJDR5s_gMn54tpsWYuPkZ1PcEFdTSS8khvCqeE7DkFWyVJ8wBIwI',
  },
});
