import client, { LOCAL_STORAGE_KEY } from './apiClient';

const login = async (credentials, onSuccess, onFailure) => {
  try {
    const response = await client('v1/sessions', { data: credentials }, false);
    window.localStorage.setItem(LOCAL_STORAGE_KEY, response.data.data.token);
    onSuccess();
  } catch (error) {
    onFailure(error);
  }
}

const logout = () => {
  window.localStorage.removeItem(LOCAL_STORAGE_KEY);
}

const signup = async (user, onSuccess, onFailure) => {
  try {
    await client('v1/users', { data: user }, false);
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