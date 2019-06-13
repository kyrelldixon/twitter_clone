defmodule TwitterApiWeb.V1.SessionController do
  use TwitterApiWeb, :controller

  def create(conn, %{"email" => email, "password" => password}) do
    case TwitterApiWeb.Auth.login_by_email_and_password(conn, email, password) do
      {:ok, conn} ->
        conn
        |> put_status(:ok)
        |> render("login.json", user: conn.assigns.current_user)
      {:error, _reason, conn} ->
        conn
        |> delete_session(:user_id)
        |> put_status(:unauthorized)
        |> put_view(TwitterApiWeb.ErrorView)
        |> render("401.json", message: "Invalid email/password combination")
    end
  end

  def delete(conn, _) do
    TwitterApiWeb.Auth.logout(conn)
    send_resp(conn, :no_content, "")
  end
end
