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

  scope "/v1", TwitterApiWeb.V1, as: :v1 do
    pipe_through :api

    resources "/sessions", SessionController, only: [:create, :delete]
    resources "/relationships", RelationshipController, only: [:create, :delete, :show, :index]

    get "/users/me", UserController, :me
    resources "/users", UserController, except: [:new, :edit]

    scope "/tweets" do
      get "/user_timeline", TweetController, :user_timeline
      get "/home_timeline", TweetController, :home_timeline
      resources "/", TweetController, only: [:create, :index, :delete, :show]
    end

    scope "/followers" do
      get "/ids", FollowerController, :follower_ids
      get "/list", FollowerController, :followers
    end

    scope "/following" do
      get "/ids", FollowerController, :following_ids
      get "/list", FollowerController, :following
    end
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
