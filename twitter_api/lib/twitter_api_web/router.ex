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

    resources "/sessions", SessionController, only: [:create, :delete]
    resources "/users", UserController, only: [:create]

  end

  scope "/api", TwitterApiWeb do
    pipe_through [:api, :api_auth]

    resources "/users", UserController, except: [:new, :edit, :create]
    resources "/tweets", TweetController, except: [:new, :edit]
  end

  # Plug function
  defp ensure_authenticated(conn, _opts) do
    user_id = get_session(conn, :user_id)

    if user_id do
      conn
    else
      conn
      |> put_status(:unauthorized)
      |> put_view(TwitterApiWeb.ErrorView)
      |> render("401.json", message: "Unauthenticated user")
      |> halt()
    end
  end
end
