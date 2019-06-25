import axios from 'axios';

export const LOCAL_STORAGE_TOKEN_KEY = '__twitter_api_token__';
export const LOCAL_STORAGE_USER_KEY = '__twitter_api_user__';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

const client = (endpoint, {data, ...customConfig} = {}, useToken = true) => {
  const headers = {'content-type': 'application/json'};
  
  const token = window.localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);
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
  return Promise.reject(response);
}

export default client;