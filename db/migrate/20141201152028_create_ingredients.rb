class CreateIngredients < ActiveRecord::Migration
  def change
    create_table :ingredients do |t|
      t.integer :post_id
      t.string :ingredient

      t.timestamps
    end
  end
end
