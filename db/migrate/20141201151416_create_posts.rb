class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.integer :user_id
      t.string :summary
      t.string :title
      t.integer :servings
      t.text :method
      t.integer :course_id
      t.integer :category_id

      t.timestamps
    end
  end
end
