class Photo < ActiveRecord::Base
  attr_accessible :image, :post_id

  belongs_to :post
end
