import axios from 'axios';


const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Credentials': 'true'
  }
});


export default instance;