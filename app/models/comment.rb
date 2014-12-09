class Comment < ActiveRecord::Base
  attr_accessible :comment, :post_id, :user_id, :user

  belongs_to :user
  belongs_to :post
end
