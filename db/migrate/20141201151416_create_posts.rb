class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.integer :user_id
      t.string :summary
      t.string :title
      t.integer :servings
      t.string :course
      t.string :category

      t.timestamps
    end
  end
end
