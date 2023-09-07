import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.API_URL || 'http://:localhost:3333',
  // baseURL: 'http://192.168.1.106:3333',
  // headers: {
  //   "Content-Type": "application/json"
  // }
});