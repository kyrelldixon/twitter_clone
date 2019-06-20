defmodule TwitterApiWeb.V1.FollowerController do
  use TwitterApiWeb, :controller

  alias TwitterApi.Accounts

  action_fallback TwitterApiWeb.FallbackController

  def follower_ids(conn, %{"user_id" => id}) do
    follower_ids = Accounts.follower_ids(id)
    render_follow_ids(conn, follower_ids)
  end

  def follower_ids(conn, _params) do
    follower_ids = Accounts.follower_ids(conn.assigns.current_user.id)
    render_follow_ids(conn, follower_ids)
  end

  def following_ids(conn, %{"user_id" => id}) do
    following_ids = Accounts.following_ids(id)
    render_follow_ids(conn, following_ids)
  end

  def following_ids(conn, _params) do
    following_ids = Accounts.following_ids(conn.assigns.current_user.id)
    render_follow_ids(conn, following_ids)
  end

  def followers(conn, %{"user_id" => id}) do
    followers =
    id
    |> Accounts.get_user!()
    |> Accounts.followers()

    render_follows(conn, followers)
  end

  def followers(conn, _params) do
    followers =
    conn.assigns.current_user.id
    |> Accounts.get_user!()
    |> Accounts.followers()

    render_follows(conn, followers)
  end

  def following(conn, %{"user_id" => id}) do
    followers =
    id
    |> Accounts.get_user!()
    |> Accounts.following()

    render_follows(conn, followers)
  end

  def following(conn, _params) do
    followers =
    conn.assigns.current_user.id
    |> Accounts.get_user!()
    |> Accounts.following()

    render_follows(conn, followers)
  end

  defp render_follows(conn, users) do
    conn
    |> put_view(TwitterApiWeb.V1.UserView)
    |> render("index.json", users: users)
  end

  defp render_follow_ids(conn, user_ids) do
    conn
    |> put_view(TwitterApiWeb.V1.UserView)
    |> render("ids.json", user_ids: user_ids)
  end
end
