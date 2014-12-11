class Post < ActiveRecord::Base
  attr_accessible :category_id, :course_id, :servings, :summary, :title, :user_id, :bookmarks, :method, :photo, :course, :user, :category, :id, :comment_attributes, :created_at

  has_many :photos
  has_many :ingredients
  has_many :comments 
  has_many :bookmarks
  belongs_to :user
  belongs_to :category
  belongs_to :course

  accepts_nested_attributes_for :comments

  def as_json(options = nil)
    super({only: [:id, :category_id, :course_id, :servings, :summary, :title, :user_id, :method, :photo ]}.merge(options || {}))
  end

  def current_user_posts(current_user)
    posts.where("user_id == ?", current_user.id)
  end

end
