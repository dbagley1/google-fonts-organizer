class User < ApplicationRecord
  has_secure_password
  validates :username, presence: true, uniqueness: true

  has_many :collections
  has_many :fonts, through: :collections
  has_many :themes

  after_create :create_default_collection

  def create_default_collection
    self.collections.create(name: "Favorites")
  end
end
