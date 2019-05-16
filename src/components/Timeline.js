import React from 'react';
import Tweet from './Tweet';

const tweets = [
  {
    content: "How about instead of commenting on how skinny a skinny person is you could SHUT THE FUCK UP about your unwanted opinions on any person’s body type",
    username: "Mirakle"
  },
  {
    content: "If a bitch comments on my weight I’m hurting her donut stuffed feelings. Leave me alone",
    username: "Bob"
  },
  {
    content: "Two job offers, a Bachelor of Arts Degree and an empty bank account. What am I",
    username: "Sean"
  },
]

const Timeline = () => (
  <div>
    { tweets.map(tweet => <Tweet tweet={tweet} />) }
  </div>
);

export default Timeline;