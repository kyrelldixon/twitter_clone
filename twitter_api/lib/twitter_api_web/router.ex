defmodule TwitterApiWeb.Router do
  use TwitterApiWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", TwitterApiWeb do
    pipe_through :api
    resources "/users", UserController, except: [:new, :edit]
  end
end
