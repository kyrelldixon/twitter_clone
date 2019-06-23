defmodule TwitterApiWeb.V1.SessionController do
  use TwitterApiWeb, :controller

  def create(conn, %{"email" => email, "password" => password}) do
    case TwitterApiWeb.Auth.login_by_email_and_password(email, password) do
      { :ok, user_data } ->
        conn
        |> assign(:signed_in, true)
        |> assign(:current_user, user_data.user)
        |> put_status(:ok)
        |> render("login.json", auth_token: user_data.auth_token, user: user_data.user)
      {:error, _reason} ->
        conn
        |> put_status(:unauthorized)
        |> put_view(TwitterApiWeb.ErrorView)
        |> render("401.json", message: "Invalid email/password combination")
    end
  end

  def delete(conn, _) do
    case TwitterApiWeb.Auth.logout(conn) do
      { :ok, _ } -> send_resp(conn, :no_content, "")
      { :error, reason } -> send_resp(conn, 400, reason)
    end
  end
end
