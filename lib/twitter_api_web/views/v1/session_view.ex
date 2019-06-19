defmodule TwitterApiWeb.V1.SessionView do
  use TwitterApiWeb, :view

  def render("login.json", %{auth_token: auth_token}) do
    %{
      data: %{
        token: auth_token.token,
        user_id: auth_token.user_id
      }
    }
  end
end
