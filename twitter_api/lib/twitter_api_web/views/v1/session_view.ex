defmodule TwitterApiWeb.V1.SessionView do
  use TwitterApiWeb, :view

  def render("login.json", %{user: user}) do
    %{
      data: %{
        user: %{
          id: user.id,
          name: user.name,
          email: user.credential.email
        }
      }
    }
  end
end
