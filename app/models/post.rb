class Post < ActiveRecord::Base
  attr_accessible :category, :course, :servings, :summary, :title, :user_id
end
