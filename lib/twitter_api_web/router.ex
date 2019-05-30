defmodule TwitterApiWeb.Router do
  use TwitterApiWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
    plug :fetch_session
    plug TwitterApiWeb.Auth
  end

  pipeline :api_auth do
    plug :ensure_authenticated
  end

  scope "/api", TwitterApiWeb do
    pipe_through :api
    resources "/users", UserController, except: [:new, :edit]
    resources "/sessions", SessionController, only: [:create, :delete]
  end

  # Plug function
  defp ensure_authenticated(conn, _opts) do
    current_user_id = get_session(conn, :current_user_id)

    if current_user_id do
      conn
    else
      conn
      |> put_status(:unauthorized)
      |> render(MyAppWeb.ErrorView, "401.json", message: "Unauthenticated user")
      |> halt()
    end
  end
end
