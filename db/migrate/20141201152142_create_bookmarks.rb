class CreateBookmarks < ActiveRecord::Migration
  def change
    create_table :bookmarks do |t|
      t.integer :user_id
      t.integer :post_id
      t.boolean :bookmarked
      t.boolean :favourited
      t.string :search
      t.timestamps
    end
  end
end
