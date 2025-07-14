import axios from 'axios';

const baseURL = 'http://192.168.15.39:3333';

export const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});