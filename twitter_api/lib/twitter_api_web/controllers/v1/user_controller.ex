defmodule TwitterApiWeb.V1.UserController do
  use TwitterApiWeb, :controller

  alias TwitterApi.Accounts
  alias TwitterApi.Accounts.User

  action_fallback TwitterApiWeb.FallbackController

  def index(conn, _params) do
    users = Accounts.list_users()
    render(conn, "index.json", users: users)
  end

  def create(conn, %{"user" => user_params}) do
    with {:ok, %User{} = user} <- Accounts.register_user(user_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.v1_user_path(conn, :show, user))
      |> render("show.json", user: user)
    end
  end

  def show(conn, %{"user_id" => id}) do
    user = Accounts.get_user!(id)
    render(conn, "show.json", user: user)
  end

  def show(conn, %{"username" => username}) do
    user = Accounts.get_user_by_username!(username)
    render(conn, "show.json", user: user)
  end

  def update(conn, %{"user_id" => id, "user" => user_params}) do
    user = Accounts.get_user!(id)

    with {:ok, %User{} = user} <- Accounts.update_user(user, user_params) do
      render(conn, "show.json", user: user)
    end
  end

  def update(conn, %{"username" => username, "user" => user_params}) do
    user = Accounts.get_user_by_username!(username)

    with {:ok, %User{} = user} <- Accounts.update_user(user, user_params) do
      render(conn, "show.json", user: user)
    end
  end

  def delete(conn, %{"user_id" => id}) do
    user = Accounts.get_user!(id)

    with {:ok, %User{}} <- Accounts.delete_user(user) do
      send_resp(conn, :no_content, "")
    end
  end

  def me(conn, _) do
    render(conn, "show.json", user: conn.assigns.current_user)
  end
end
