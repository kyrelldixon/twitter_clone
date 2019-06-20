defmodule TwitterApiWeb.V1.RelationshipView do
  use TwitterApiWeb, :view
  alias TwitterApiWeb.V1.RelationshipView

  def render("index.json", %{relationships: relationships}) do
    %{data: render_many(relationships, RelationshipView, "relationship.json")}
  end

  def render("show.json", %{relationship: relationship}) do
    %{data: render_one(relationship, RelationshipView, "relationship.json")}
  end

  def render("relationship.json", %{relationship: relationship}) do
    %{
      id: relationship.id,
      follower_id: relationship.follower_id,
      followed_id: relationship.followed_id,
      created_at: relationship.inserted_at
    }
  end
end
