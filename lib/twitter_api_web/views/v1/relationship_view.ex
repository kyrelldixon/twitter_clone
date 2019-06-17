defmodule TwitterApiWeb.V1.RelationshipView do
  use TwitterApiWeb, :view
  alias TwitterApiWeb.V1.RelationshipView

  def render("show.json", %{relationship: relationship}) do
    %{data: render_one(relationship, RelationshipView, "relationship.json")}
  end

  def render("relationship.json", %{relationship: relationship}) do
    %{id: relationship.id}
  end
end
