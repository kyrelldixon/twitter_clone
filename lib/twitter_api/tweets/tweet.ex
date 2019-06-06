defmodule TwitterApi.Tweets.Tweet do
  use Ecto.Schema
  import Ecto.Changeset

  schema "tweets" do
    field :text, :string
    belongs_to :user, TwitterApi.Accounts.User

    timestamps()
  end

  @doc false
  def changeset(tweet, attrs) do
    tweet
    |> cast(attrs, [:text])
    |> validate_required([:text])
  end
end
