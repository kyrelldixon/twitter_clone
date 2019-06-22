defmodule TwitterApiWeb.V1.RelationshipController do
  use TwitterApiWeb, :controller

  alias TwitterApi.Accounts
  alias TwitterApi.Accounts.Relationship

  action_fallback TwitterApiWeb.FallbackController

  def index(conn, _) do
    relationships = Accounts.list_relationships()
    render(conn, "index.json", relationships: relationships)
  end

  def create(conn, %{"user_id" => user_id}) do
    relationship_params = %{
      "follower_id" => conn.assigns.current_user.id,
      "followed_id" => user_id
    }
    with {:ok, %Relationship{} = relationship} <- Accounts.follow(relationship_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.v1_relationship_path(conn, :show, relationship))
      |> render("show.json", relationship: relationship)
    end
  end

  def create(conn, %{"username" => username}) do
    followed_user = Accounts.get_user_by_username!(username)

    relationship_params = %{
      "follower_id" => conn.assigns.current_user.id,
      "followed_id" => followed_user.id
    }
    with {:ok, %Relationship{} = relationship} <- Accounts.follow(relationship_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.v1_relationship_path(conn, :show, relationship))
      |> render("show.json", relationship: relationship)
    end
  end

  def delete(conn, %{"user_id" => id}) do
    relationship = Accounts.get_relationship_by_follower_followed_id!(conn.assigns.current_user.id, id)

    with {:ok, %Relationship{}} <- Accounts.unfollow(relationship) do
      send_resp(conn, :no_content, "")
    end
  end

  def delete(conn, %{"username" => username}) do
    user = Accounts.get_user_by_username!(username)
    relationship = Accounts.get_relationship_by_follower_followed_id!(conn.assigns.current_user.id, user.id)

    with {:ok, %Relationship{}} <- Accounts.unfollow(relationship) do
      send_resp(conn, :no_content, "")
    end
  end
end
