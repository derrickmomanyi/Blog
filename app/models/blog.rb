class Blog < ApplicationRecord
    validates :title, :genre, :network, :image, :year, :seasons, :rating, :about, presence: true
    validates :title, uniqueness: true
    validates :year, length: { is: 4 }
    validates :seasons, length: { maximum: 2 }
end
