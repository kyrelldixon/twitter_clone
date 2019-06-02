defmodule TwitterApi.AccountsTest do
  use TwitterApi.DataCase

  alias TwitterApi.Accounts
  alias TwitterApi.Accounts.User

  describe "users" do

    @valid_attrs %{
      name: "My Name",
      username: "my_username",
      credential: %{
        email: "some@email.com",
        password: "my_password"
      }
    }
    @update_attrs %{name: "some updated name", username: "some updated username", credential: %{
      email: "someother@email.com",
      password: "my_password"
    }}
    @invalid_attrs %{name: nil, username: nil, credential: nil}

    test "with valid data inserts user" do
      assert {:ok, %User{id: id} = user} = Accounts.register_user(@valid_attrs)
      assert user.name == "My Name"
      assert user.username == "my_username"
      assert user.credential.email == "some@email.com"
      assert [%User{id: ^id}] = Accounts.list_users()
    end

    test "with invalid data does not insert user" do
      assert {:error, _changeset} = Accounts.register_user(@invalid_attrs)
      assert Accounts.list_users() == []
    end

    test "enforces unique usernames" do
      assert {:ok, %User{id: id} = user} = Accounts.register_user(@valid_attrs)
      assert {:error, changeset} = Accounts.register_user(@valid_attrs)
      assert %{username: ["has already been taken"]} = errors_on(changeset)
      assert [%User{id: ^id}] = Accounts.list_users()
    end

    test "list_users/0 returns all users" do
      %User{id: id} = user_fixture()
      assert [%User{id: ^id}] = Accounts.list_users()
    end

    test "get_user!/1 returns the user with given id" do
      user = user_fixture()
      test_user = Accounts.get_user!(user.id)
      assert test_user.id == user.id
    end

    test "create_user/1 with valid data creates a user" do
      assert {:ok, %User{} = user} = Accounts.create_user(@valid_attrs)
      assert user.name == "My Name"
      assert user.username == "my_username"
    end

    test "create_user/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Accounts.create_user(@invalid_attrs)
    end

    test "update_user/2 with valid data updates the user" do
      user = user_fixture()
      assert {:ok, updated_user} = Accounts.update_user(user, @update_attrs)
      assert updated_user.name == "some updated name"
      assert updated_user.username == "some updated username"
      assert user.id == updated_user.id
    end

    test "update_user/2 with invalid data returns error changeset" do
      user = user_fixture()
      assert {:error, %Ecto.Changeset{}} = Accounts.update_user(user, @invalid_attrs)
      assert user.id == Accounts.get_user!(user.id).id
    end

    test "delete_user/1 deletes the user" do
      user = user_fixture()
      assert {:ok, %User{}} = Accounts.delete_user(user)
      assert_raise Ecto.NoResultsError, fn -> Accounts.get_user!(user.id) end
    end

    test "change_user/1 returns a user changeset" do
      user = user_fixture()
      assert %Ecto.Changeset{} = Accounts.change_user(user)
    end
  end

  describe "authenticate_by_email_and_password" do
    @email "user@localhost.com"
    @password "secretc928"

    setup do
      {:ok, user: user_fixture(email: @email, password: @password)}
    end

    test "returns user with correct password", %{user: %User{id: id}} do
      assert {:ok, %User{id: ^id}} = Accounts.authenticate_by_email_and_password(@email, @password)
    end

    test "return unauthorized error with invalid password" do
      assert {:error, :unauthorized} = Accounts.authenticate_by_email_and_password(@email, "wrongpassword")
    end

    test "returns not found error with no matching user for email" do
      assert {:error, :not_found} = Accounts.authenticate_by_email_and_password("bademail@mail.com", @password)
    end
  end
end
