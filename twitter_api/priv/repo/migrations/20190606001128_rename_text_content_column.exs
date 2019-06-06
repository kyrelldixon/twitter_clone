defmodule TwitterApi.Repo.Migrations.RenameTextContentColumn do
  use Ecto.Migration

  def change do
    rename table(:tweets), :text, to: :text
  end
end
