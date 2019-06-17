defmodule TwitterApiWeb.V1.RelationshipController do
  use TwitterApiWeb, :controller

  alias TwitterApi.Accounts
  alias TwitterApi.Accounts.Relationship

  action_fallback TwitterApiWeb.FallbackController

  def create(conn, %{"relationship" => relationship_params}) do
    case Accounts.follow(relationship_params) do
      {:ok, %Relationship{} = relationship} ->
        conn
        |> put_status(:created)
        |> put_resp_header("location", Routes.v1_relationship_path(conn, :show, relationship))
        |> render("show.json", relationship: relationship)
      {:error, _} ->
        conn
        |> put_status(:unauthorized)
        |> put_view(TwitterApiWeb.ErrorView)
        |> render("401.json", message: "You are already following this user.")
    end
  end

  def delete(conn, %{"id" => id}) do
    relationship = Accounts.get_relationship!(id)

    with {:ok, %Relationship{}} <- Accounts.unfollow(relationship) do
      send_resp(conn, :no_content, "")
    end
  end
end
