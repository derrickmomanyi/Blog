class AddAboutToBlogs < ActiveRecord::Migration[7.0]
  def change
    add_column :blogs, :about, :string
  end
end
