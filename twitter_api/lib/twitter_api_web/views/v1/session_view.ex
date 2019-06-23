defmodule TwitterApiWeb.V1.SessionView do
  use TwitterApiWeb, :view

  def render("login.json", %{auth_token: auth_token, user: user}) do
    %{
      data: %{
        token: auth_token.token,
        user: %{
          user_id: user.id,
          username: user.username,
          name: user.name
        }
      }
    }
  end
end
