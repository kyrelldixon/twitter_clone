import client, { handleSuccess, handleFailure } from './apiClient';

const USER_ENDPOINT = 'v1/users';

const createUser = (user) => {
  return client(USER_ENDPOINT, { data: user }, false)
  .catch(handleFailure);
}
const getUser = (params) => {
  return client(`${USER_ENDPOINT}/show`, { params })
  .then(handleSuccess)
  .catch(handleFailure);
}
const getUsers = () => {
  return client(USER_ENDPOINT)
  .then(handleSuccess)
  .catch(handleFailure);
}
const deleteUser = (params) => {
  return client(USER_ENDPOINT, { params })
  .catch(handleFailure);
}

export { createUser, getUser, getUsers, deleteUser };