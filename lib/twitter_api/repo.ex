defmodule TwitterApi.Repo do
  use Ecto.Repo,
    otp_app: :twitter_api,
    adapter: Ecto.Adapters.Postgres
end
