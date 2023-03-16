class CreateBlogs < ActiveRecord::Migration[7.0]
  def change
    create_table :blogs do |t|
      t.string :title
      t.string :genre
      t.string :network
      t.string :image
      t.integer :year
      t.integer :seasons

      t.timestamps
    end
  end
end
