class Collection < ApplicationRecord
  belongs_to :user
  has_many :collections_fonts
  has_many :fonts, through: :collections_fonts
end
