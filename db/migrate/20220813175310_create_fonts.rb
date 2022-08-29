class CreateFonts < ActiveRecord::Migration[7.0]
  def change
    create_table :fonts do |t|
      t.string :family
      t.string :displayName, null: true
      t.string :category
      t.integer :size
      t.json :subsets
      t.json :fonts
      t.json :axes
      t.json :designers
      t.date :dateAdded
      t.integer :popularity
      t.integer :trending
      t.integer :defaultSort
    end
  end
end
