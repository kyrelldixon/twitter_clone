import axios from 'axios';

export const LOCAL_STORAGE_KEY = '__twitter_api_token__';
const API_URL = process.env.API_URL || 'http://localhost:4000';

const client = (endpoint, {data, ...customConfig} = {}, useToken = true) => {
  const headers = {'content-type': 'application/json'};
  
  const token = window.localStorage.getItem(LOCAL_STORAGE_KEY);
  if (token && useToken) headers.Authorization = `Bearer ${token}`;
  
  const config = {
    method: data ? 'post' : 'get',
    url: `${API_URL}/${endpoint}`,
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    }
  };

  if (data) config.data = data;

  return axios(config);
}

export const handleSuccess = ({ data: { data } }) => {
  return Promise.resolve(data);
}

export const handleFailure = ({ response }) => {
  return Promise.reject(response.data.errors.detail);
}

export default client;