defmodule TwitterApiWeb.SessionController do
  use TwitterApiWeb, :controller

  def create(conn, %{"session" => %{"email" => email, "password" => password}}) do
    case TwitterApiWeb.Auth.login_by_email_and_password(conn, email, password) do
      {:ok, conn} ->
        conn
        |> put_status(:ok)
        |> render("login.json", user: conn.assigns.current_user)
      {:error, _reason, conn} ->
        conn
        |> put_status(:unauthorized)
        |> render("401.json", message: "Invalid email/password combination")
    end
  end

  def delete(conn, _) do
    TwitterApiWeb.Auth.logout(conn)
    send_resp(conn, :no_content, "")
  end
end
