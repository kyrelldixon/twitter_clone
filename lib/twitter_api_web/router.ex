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
    resources "/users", UserController, except: [:new, :edit]
    resources "/tweets", TweetController, only: [:create, :index, :delete, :show]
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
