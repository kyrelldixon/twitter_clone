defmodule TwitterApiWeb.Router do
  use TwitterApiWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
    plug :fetch_session
  end

  pipeline :api_auth do
    plug TwitterApiWeb.Plugs.Auth
  end

  scope "/v1", TwitterApiWeb.V1, as: :v1 do
    pipe_through :api

    post "/sessions", SessionController, :create
    post "/users", UserController, :create
  end

  scope "/v1", TwitterApiWeb.V1, as: :v1 do
    pipe_through [:api, :api_auth]

    delete "/sessions", SessionController, :delete
    resources "/relationships", RelationshipController, only: [:create, :delete, :show, :index]

    get "/users/me", UserController, :me
    resources "/users", UserController, except: [:new, :edit, :create]

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
end
