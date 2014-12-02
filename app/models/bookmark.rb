class Bookmark < ActiveRecord::Base
  attr_accessible :bookmarked, :favourited, :post_id, :user_id

  belongs_to :user
end
