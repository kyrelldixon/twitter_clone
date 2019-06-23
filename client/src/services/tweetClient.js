import client from './apiClient';

const TWEETS_ENDPOINT = 'v1/tweets';


const getTweet = (params) => client(TWEETS_ENDPOINT, { params });
const getTweets = (params) => client(TWEETS_ENDPOINT, { params });
const postTweet = (tweet) => client(TWEETS_ENDPOINT, { data: tweet });
const deleteTweet = (params) => client(TWEETS_ENDPOINT, { params });
const getHomeTimeline = () => client(`${TWEETS_ENDPOINT}/home_timeline`);
const getUserTimeline = (params) => client(`${TWEETS_ENDPOINT}/user_timeline`, { params });

export { getTweet, getTweets, postTweet, deleteTweet, getHomeTimeline, getUserTimeline };