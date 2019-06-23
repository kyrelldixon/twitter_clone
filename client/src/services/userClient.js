import client from './apiClient';

const USER_ENDPOINT = 'v1/users'

const getUser = (params) => client(`${USER_ENDPOINT}/show`, { params });
const getUsers = (params) => client(USER_ENDPOINT, { params });
const deleteUser = (params) => client(USER_ENDPOINT, { params });

export { getUser, getUsers, deleteUser };