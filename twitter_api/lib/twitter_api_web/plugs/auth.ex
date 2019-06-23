defmodule TwitterApiWeb.Plugs.Auth do
  import Plug.Conn

  def init(default), do: default

  def call(conn, _default) do
    case TwitterApi.Services.Authenticator.get_auth_token(conn) do
      {:ok, token} ->
        case TwitterApi.Repo.get_by(TwitterApi.AuthToken, %{token: token, revoked: false}) |> TwitterApi.Repo.preload(:user) do
          nil -> unauthorized(conn)
          auth_token -> authorized(conn, auth_token.user)
        end
      _ -> unauthorized(conn)
    end
  end

  defp authorized(conn, user) do
    conn
    |> assign(:signed_in, true)
    |> assign(:current_user, user)
  end

  defp unauthorized(conn) do
    conn
    |> put_status(:unauthorized)
    |> send_resp(401, "Unauthorized user")
    |> halt()
  end
end
