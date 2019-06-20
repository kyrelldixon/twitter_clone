defmodule TwitterApiWeb.Auth do

  alias TwitterApi.Accounts
  alias TwitterApi.Services.Authenticator

  def login(user) do
    token = Authenticator.generate_token(user)
    { :ok, token } = TwitterApi.Repo.insert(Ecto.build_assoc(user, :auth_tokens, %{token: token}))
    %{user: user, auth_token: token}
  end

  def login_by_email_and_password(email, given_password) do
    case Accounts.authenticate_by_email_and_password(email, given_password) do
      { :ok, user } -> { :ok, login(user) }
      { :error, :unauthorized } -> { :error, :unauthorized }
      { :error, :not_found } -> { :error, :not_found }
    end
  end

  def logout(conn) do
    case Authenticator.get_auth_token(conn) do
      { :ok, token } ->
        case TwitterApi.Repo.get_by(TwitterApi.AuthToken, %{token: token}) do
          nil -> {:error, :not_found}
          auth_token -> TwitterApi.Repo.delete(auth_token)
        end
      error -> error
    end
  end
end
