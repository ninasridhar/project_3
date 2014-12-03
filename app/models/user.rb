class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :name, :username, :bio, :avatar, :email, :password, :password_confirmation, :remember_me
  # attr_accessible :title, :body

  has_many :bookmarks
  has_many :comments
  has_many :posts
  has_many :photos, through: :posts
end
