defmodule TwitterApiWeb.V1.UserView do
  use TwitterApiWeb, :view
  alias TwitterApiWeb.V1.UserView

  def render("index.json", %{users: users}) do
    %{data: render_many(users, UserView, "user.json")}
  end

  def render("show.json", %{user: user}) do
    %{data: render_one(user, UserView, "user.json")}
  end

  def render("user.json", %{user: user}) do
    %{id: user.id,
      name: user.name,
      username: user.username}
  end

  def render("ids.json", %{user_ids: user_ids}) do
    %{data: user_ids}
  end
end
