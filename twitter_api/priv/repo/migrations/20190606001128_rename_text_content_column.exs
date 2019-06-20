defmodule TwitterApi.Repo.Migrations.RenameTextContentColumn do
  use Ecto.Migration

  def change do
    rename table(:tweets), :text_content, to: :text
  end
end
