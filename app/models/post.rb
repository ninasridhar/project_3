class Post < ActiveRecord::Base
  attr_accessible :category, :course, :servings, :summary, :title, :user_id

  has_many :photos
  has_many :ingredients
  has_many :comments 
  belongs_to :user
end
