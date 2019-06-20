defmodule TwitterApiWeb.TweetControllerTest do
  use TwitterApiWeb.ConnCase

  alias TwitterApi.Tweets
  alias TwitterApi.Tweets.Tweet

  @create_attrs %{
    text: "some text"
  }
  @update_attrs %{
    text: "some updated text"
  }
  @invalid_attrs %{text: nil}

  def fixture(:tweet) do
    {:ok, tweet} = Tweets.create_tweet(@create_attrs)
    tweet
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all tweets", %{conn: conn} do
      conn = get(conn, Routes.tweet_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create tweet" do
    test "renders tweet when data is valid", %{conn: conn} do
      conn = post(conn, Routes.tweet_path(conn, :create), tweet: @create_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.tweet_path(conn, :show, id))

      assert %{
               "id" => id,
               "text" => "some text"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.tweet_path(conn, :create), tweet: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update tweet" do
    setup [:create_tweet]

    test "renders tweet when data is valid", %{conn: conn, tweet: %Tweet{id: id} = tweet} do
      conn = put(conn, Routes.tweet_path(conn, :update, tweet), tweet: @update_attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.tweet_path(conn, :show, id))

      assert %{
               "id" => id,
               "text" => "some updated text"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, tweet: tweet} do
      conn = put(conn, Routes.tweet_path(conn, :update, tweet), tweet: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete tweet" do
    setup [:create_tweet]

    test "deletes chosen tweet", %{conn: conn, tweet: tweet} do
      conn = delete(conn, Routes.tweet_path(conn, :delete, tweet))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.tweet_path(conn, :show, tweet))
      end
    end
  end

  defp create_tweet(_) do
    tweet = fixture(:tweet)
    {:ok, tweet: tweet}
  end
end
