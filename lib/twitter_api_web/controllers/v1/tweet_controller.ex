defmodule TwitterApiWeb.V1.TweetController do
  use TwitterApiWeb, :controller

  alias TwitterApi.Tweets
  alias TwitterApi.Tweets.Tweet

  action_fallback TwitterApiWeb.FallbackController

  def index(conn, _params) do
    tweets = Tweets.list_tweets()
    render(conn, "index.json", tweets: tweets)
  end

  def create(conn, %{"tweet" => tweet_params}) do
    with {:ok, %Tweet{} = tweet} <- Tweets.create_tweet(conn.assigns.current_user, tweet_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.v1_tweet_path(conn, :show, tweet))
      |> render("show.json", tweet: tweet)
    end
  end

  def show(conn, %{"id" => id}) do
    tweet = Tweets.get_tweet!(id)
    render(conn, "show.json", tweet: tweet)
  end

  def delete(conn, %{"id" => id}) do
    tweet = Tweets.get_tweet!(id)

    with {:ok, %Tweet{}} <- Tweets.delete_tweet(tweet) do
      send_resp(conn, :no_content, "")
    end
  end

  def user_timeline(conn, _) do
    tweets = Tweets.list_user_tweets(conn.assigns.current_user)
    render(conn, "index.json", tweets: tweets)
  end
end
