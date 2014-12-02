class Ingredient < ActiveRecord::Base
  attr_accessible :ingredient, :post_id

  belongs_to :post
end
