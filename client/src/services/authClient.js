import client, { LOCAL_STORAGE_TOKEN_KEY, LOCAL_STORAGE_USER_KEY } from './apiClient';
import { createUser } from './userClient';

const handleLoginSuccess = (response) => {
  const { data: { data } } = response;
  window.localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, data.token);
  window.localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(data.user));
  return data.user;
}

const handleLoginFailure = ({ response }) => {
  return Promise.reject(response.data.errors.detail);
}

const getCurrentUser = () => {
  const token = getToken();
  if (!token) {
    return Promise.resolve(null);
  }
  return client('v1/users/me')
  .then(({ data }) => Promise.resolve(data.data))
  .catch(({ response }) => {
    logout();
    return Promise.reject(response.data.errors.detail);
  });
}

const login = (credentials) => {
  return client('v1/sessions', { data: credentials }, false)
  .then(handleLoginSuccess)
  .catch(handleLoginFailure);
}

const logout = () => {
  window.localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
  window.localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
}

const signup = (user) => {
  return createUser(user)
}

const getToken = () => window.localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);

export default {
  getCurrentUser,
  login,
  logout,
  signup,
  getToken
}