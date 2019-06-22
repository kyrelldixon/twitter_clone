defmodule TwitterApi.Tweets do
  @moduledoc """
  The Tweets context.
  """

  import Ecto.Query, warn: false
  alias TwitterApi.Repo

  alias TwitterApi.Tweets.Tweet
  alias TwitterApi.Accounts

  @doc """
  Returns the list of tweets.

  ## Examples

      iex> list_tweets()
      [%Tweet{}, ...]

  """
  def list_tweets do
    Tweet
    |> Repo.all()
    |> Repo.preload(:user)
  end

  def list_user_tweets(%Accounts.User{} = user) do
    Tweet
    |> user_tweets_query(user)
    |> Repo.all()
    |> Repo.preload(:user)
  end

  def list_following_tweets(%Accounts.User{} = user) do
    Tweet
    |> following_tweets_query(user)
    |> Repo.all()
  end

  def list_user_and_following_tweets(%Accounts.User{} = user) do
    user_and_following_tweets_query(user)
    |> Repo.all()
  end

  @doc """
  Gets a single tweet.

  Raises `Ecto.NoResultsError` if the Tweet does not exist.

  ## Examples

      iex> get_tweet!(123)
      %Tweet{}

      iex> get_tweet!(456)
      ** (Ecto.NoResultsError)

  """
  def get_tweet!(id) do
    Tweet
    |> Repo.get!(id)
    |> Repo.preload(:user)
  end

  def get_user_tweet!(%Accounts.User{} = user, id) do
    from(t in Tweet, where: t.id == ^id)
    |> user_tweets_query(user)
    |> Repo.one!()
    |> Repo.preload(:user)
  end

  @doc """
  Creates a tweet.

  ## Examples

      iex> create_tweet(%{field: value})
      {:ok, %Tweet{}}

      iex> create_tweet(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_tweet(%Accounts.User{} = user, attrs \\ %{}) do
    %Tweet{}
    |> Tweet.changeset(attrs)
    |> put_user(user)
    |> Repo.insert()
  end

  @doc """
  Updates a tweet.

  ## Examples

      iex> update_tweet(tweet, %{field: new_value})
      {:ok, %Tweet{}}

      iex> update_tweet(tweet, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_tweet(%Tweet{} = tweet, attrs) do
    tweet
    |> Tweet.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a Tweet.

  ## Examples

      iex> delete_tweet(tweet)
      {:ok, %Tweet{}}

      iex> delete_tweet(tweet)
      {:error, %Ecto.Changeset{}}

  """
  def delete_tweet(%Tweet{} = tweet) do
    Repo.delete(tweet)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking tweet changes.

  ## Examples

      iex> change_tweet(tweet)
      %Ecto.Changeset{source: %Tweet{}}

  """
  def change_tweet(%Accounts.User{} = user, %Tweet{} = tweet) do
    tweet
    |> Tweet.changeset(%{})
    |> put_user(user)
  end

  defp put_user(changeset, user) do
    Ecto.Changeset.put_assoc(changeset, :user, user)
  end

  defp user_tweets_query(query, %Accounts.User{id: user_id}) do
    from t in query, where: t.user_id == ^user_id
  end

  defp following_tweets_query(query, %Accounts.User{id: user_id}) do
    from t in query,
      join: r in Accounts.Relationship,
      on: r.followed_id == t.user_id,
      where: r.follower_id == ^user_id,
      order_by: t.inserted_at,
      preload: [:user]
  end

  defp user_and_following_tweets_query(%Accounts.User{} = user) do
    query =
    user_tweets_query(Tweet, user)
    |> union_all(^following_tweets_query(Tweet, user))

    from q in subquery(query), order_by: [desc: q.inserted_at]
  end
end
