class Post < ActiveRecord::Base
  attr_accessible :category_id, :course_id, :servings, :summary, :title, :user_id, :method

  has_many :photos
  has_many :ingredients
  has_many :comments 
  belongs_to :user
  belongs_to :category
  belongs_to :course
end
