class Blog < ApplicationRecord
    validates :title, :genre, :network, :image, :year, :seasons, :rating, :about, presence: true
    validates :about, length: { minimum: 100 }
    validates :title, uniqueness: true
    validates :year, length: { is: 4 }
    validates :seasons, length: { maximum: 2 }
end
