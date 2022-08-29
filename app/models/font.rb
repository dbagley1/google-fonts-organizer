class Font < ApplicationRecord
  has_many :collections_fonts
  has_many :collections, through: :collections_fonts
end
