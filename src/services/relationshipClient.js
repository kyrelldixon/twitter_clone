import client, { handleSuccess, handleFailure } from './apiClient';

const RELATIONSHIPS_ENDPOINT = 'v1/relationships';
const FOLLOWERS_ENDPOINT = 'v1/followers';
const FOLLOWING_ENDPOINT = 'v1/following';

const handleFollowFailure = ({ response }) => {
  return Promise.reject('You are already following this user')
}

const getFollowerList = (params) => {
  return client(`${FOLLOWERS_ENDPOINT}/list`, { params })
  .then(handleSuccess)
  .catch(handleFailure);
}

const getFollowerIds = (params) => {
  return client(`${FOLLOWERS_ENDPOINT}/ids`, { params })
  .then(handleSuccess)
  .catch(handleFailure);
}

const getFollowingList = (params) => {
  return client(`${FOLLOWING_ENDPOINT}/list`, { params })
  .then(handleSuccess)
  .catch(handleFailure);
}

const getFollowingIds = (params) => {
  return client(`${FOLLOWING_ENDPOINT}/ids`, { params })
  .then(handleSuccess)
  .catch(handleFailure);
}

const follow = (params) => {
  return client(RELATIONSHIPS_ENDPOINT, { params, 'method': 'post' })
  .then(handleSuccess)
  .catch(handleFollowFailure);
}

const unfollow = (params) => {
  return client(RELATIONSHIPS_ENDPOINT, { params, 'method': 'delete' })
  .catch(handleFailure);
}

const isFollowing = (params) => {
  return client(`${RELATIONSHIPS_ENDPOINT}/lookup`, { params })
  .catch(handleFailure);
}

export { 
  getFollowerIds,
  getFollowerList,
  getFollowingIds,
  getFollowingList,
  follow,
  unfollow,
  isFollowing
};