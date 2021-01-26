import axios from 'axios';

const cepapi = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
});

export default cepapi;
