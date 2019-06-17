defmodule TwitterApiWeb.V1.RelationshipControllerTest do
  use TwitterApiWeb.ConnCase

  alias TwitterApi.Accounts
  alias TwitterApi.Accounts.Relationship

  @create_attrs %{

  }
  @update_attrs %{

  }
  @invalid_attrs %{}

  def fixture(:relationship) do
    {:ok, relationship} = Accounts.create_relationship(@create_attrs)
    relationship
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all relationships", %{conn: conn} do
      conn = get(conn, Routes.v1_relationship_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create relationship" do
    test "renders relationship when data is valid", %{conn: conn} do
      conn = post(conn, Routes.v1_relationship_path(conn, :create), relationship: @create_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.v1_relationship_path(conn, :show, id))

      assert %{
               "id" => id
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.v1_relationship_path(conn, :create), relationship: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update relationship" do
    setup [:create_relationship]

    test "renders relationship when data is valid", %{conn: conn, relationship: %Relationship{id: id} = relationship} do
      conn = put(conn, Routes.v1_relationship_path(conn, :update, relationship), relationship: @update_attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.v1_relationship_path(conn, :show, id))

      assert %{
               "id" => id
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, relationship: relationship} do
      conn = put(conn, Routes.v1_relationship_path(conn, :update, relationship), relationship: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete relationship" do
    setup [:create_relationship]

    test "deletes chosen relationship", %{conn: conn, relationship: relationship} do
      conn = delete(conn, Routes.v1_relationship_path(conn, :delete, relationship))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.v1_relationship_path(conn, :show, relationship))
      end
    end
  end

  defp create_relationship(_) do
    relationship = fixture(:relationship)
    {:ok, relationship: relationship}
  end
end
