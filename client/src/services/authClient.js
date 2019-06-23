import axios from 'axios';

const LOCAL_STORAGE_KEY = '__twitter_api_token__';
const API_URL = process.env.API_URL || 'http://localhost:4000';

const login = async (credentials, onSuccess, onFailure) => {
  try {
    const response = await axios.post(`${API_URL}/v1/sessions`, credentials);
    window.localStorage.setItem(LOCAL_STORAGE_KEY, response.data.data.token);
    onSuccess();
  } catch (error) {
    onFailure(error);
  }
}

const logout = () => {
  window.localStorage.removeItem(LOCAL_STORAGE_KEY);
}

const signup = async (userDetails, onSuccess, onFailure) => {
  try {
    await axios.post(`${API_URL}/v1/users`, userDetails);
    onSuccess();
  } catch (error) {
    onFailure(error);
  }
}

export default {
  login,
  logout,
  signup
}