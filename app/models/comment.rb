class Comment < ActiveRecord::Base
  attr_accessible :comment, :post_id, :user_id

  belongs_to :user
  belongs_to :post
end
