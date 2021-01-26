import axios from 'axios';

// baseURL: 'https://api.maisbaratoapp.com.br/',
const api = axios.create({
  baseURL: 'http://localhost:3333/',
});

export default api;
