class CreateStaticPages < ActiveRecord::Migration[6.1]
  def change
    create_table :static_pages do |t|
      t.string :home

      t.timestamps
    end
  end
end
