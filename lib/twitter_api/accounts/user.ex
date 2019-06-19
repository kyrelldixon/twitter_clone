defmodule TwitterApi.Accounts.User do
  use Ecto.Schema
  import Ecto.Changeset

  alias TwitterApi.Accounts.{Credential, Relationship}

  schema "users" do
    field :name, :string
    field :username, :string

    has_one :credential, Credential
    has_many :active_relationships, Relationship, foreign_key: :follower_id
    has_many :passive_relationships, Relationship, foreign_key: :followed_id
    has_many :following, through: [:active_relationships, :followed]
    has_many :followers, through: [:passive_relationships, :follower]
    has_many :auth_tokens, TwitterApi.AuthToken

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:name, :username])
    |> validate_required([:name, :username])
    |> unique_constraint(:username)
  end

  def registration_changeset(user, params) do
    user
    |> changeset(params)
    |> cast_assoc(:credential, with: &Credential.changeset/2, required: true)
  end
end
