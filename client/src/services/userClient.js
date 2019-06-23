import client from './apiClient';

const USER_ENDPOINT = 'v1/users'
const handleResponseFailure = ({ response }) => {
  return Promise.reject(response.data.errors.detail);
}

const createUser = (user) => {
  client(USER_ENDPOINT, { data: user }, false)
  .catch(handleResponseFailure);
}
const getUser = (params) => {
  client(`${USER_ENDPOINT}/show`, { params })
  .catch(handleResponseFailure);;
}
const getUsers = (params) => {
  client(USER_ENDPOINT, { params })
  .catch(handleResponseFailure);;
}
const deleteUser = (params) => {
  client(USER_ENDPOINT, { params })
  .catch(handleResponseFailure);;
}

export { createUser, getUser, getUsers, deleteUser };