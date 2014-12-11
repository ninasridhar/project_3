class Bookmark < ActiveRecord::Base
  attr_accessible :bookmarked, :favourited, :post_id, :user_id, :created_at, :id, :updated_at, :search_b, :search_f

  belongs_to :user
  belongs_to :post
end
