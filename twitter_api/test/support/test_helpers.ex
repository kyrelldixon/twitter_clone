defmodule TwitterApi.TestHelpers do
  alias TwitterApi.{Accounts}

  def user_fixture(attrs \\ %{}) do
    username = "user#{System.unique_integer([:positive])}"
    {:ok, user} =
      attrs
      |> Enum.into(%{
        name: "some name",
        username: username,
        credential: %{
          email: attrs[:email] || "#{username}@testing.com",
          password: attrs[:password] || "asupersecret"
        }
      })
      |> Accounts.register_user()

    user
  end
end
