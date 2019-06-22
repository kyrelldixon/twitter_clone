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
    delete "/relationships", RelationshipController, :delete
    resources "/relationships", RelationshipController, only: [:create, :show, :index]

    scope "/users" do
      get "/me", UserController, :me
      get "/show", UserController, :show
      resources "/", UserController, except: [:new, :edit, :create, :show]
    end

    scope "/tweets" do
      get "/user_timeline", TweetController, :user_timeline
      get "/home_timeline", TweetController, :home_timeline
      get "/show", TweetController, :show
      delete "/", TweetController, :delete
      resources "/", TweetController, only: [:create, :index]
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
