import client, { handleSuccess, handleFailure } from './apiClient';

const TWEETS_ENDPOINT = 'v1/tweets';

const getTweet = (params) => {
  return client(`${TWEETS_ENDPOINT}/show`, { params })
  .then(handleSuccess)
  .catch(handleFailure);
}
const getTweets = (params) => {
  return client(TWEETS_ENDPOINT, { params })
  .then(handleSuccess)
  .catch(handleFailure);
}
const postTweet = (tweet) => {
  return client(TWEETS_ENDPOINT, { data: tweet })
  .then(handleSuccess)
  .catch(handleFailure);
}
const deleteTweet = (params) => {
  return client(TWEETS_ENDPOINT, { params, 'method': 'delete' })
  .catch(handleFailure);
}
const getHomeTimeline = () => {
  return client(`${TWEETS_ENDPOINT}/home_timeline`)
  .then(handleSuccess)
  .catch(handleFailure);
}
const getUserTimeline = (params) => {
  return client(`${TWEETS_ENDPOINT}/user_timeline`, { params })
  .then(handleSuccess)
  .catch(handleFailure);
}

export { getTweet, getTweets, postTweet, deleteTweet, getHomeTimeline, getUserTimeline };