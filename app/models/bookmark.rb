class Bookmark < ActiveRecord::Base
  attr_accessible :bookmarked, :favourited, :post_id, :user_id, :created_at, :id, :updated_at

  belongs_to :user
  belongs_to :post
end
