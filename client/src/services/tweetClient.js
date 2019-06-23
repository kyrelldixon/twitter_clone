import client from './apiClient';

const TWEETS_ENDPOINT = 'v1/tweets';


const getTweet = (params) => client(`${TWEETS_ENDPOINT}`, { params });
const postTweet = (tweet) => client(`${TWEETS_ENDPOINT}`, { data: tweet });
const getHomeTimeline = () => client(`${TWEETS_ENDPOINT}/home_timeline`);
const getUserTimeline = (params) => client(`${TWEETS_ENDPOINT}/user_timeline`, { params });

export { getTweet, postTweet, getHomeTimeline, getUserTimeline };