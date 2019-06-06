defmodule TwitterApiWeb.TweetView do
  use TwitterApiWeb, :view
  alias TwitterApiWeb.TweetView

  def render("index.json", %{tweets: tweets}) do
    %{data: render_many(tweets, TweetView, "tweet.json")}
  end

  def render("show.json", %{tweet: tweet}) do
    %{data: render_one(tweet, TweetView, "tweet.json")}
  end

  def render("tweet.json", %{tweet: tweet}) do
    %{tweet_id: tweet.id,
      text: tweet.text,
      user_id: tweet.user_id
    }
  end
end
