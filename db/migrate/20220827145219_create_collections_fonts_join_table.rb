class CreateCollectionsFontsJoinTable < ActiveRecord::Migration[7.0]
  def change
    create_join_table :fonts, :collections do |t|
      # t.index [:font_id, :collection_id]
      t.index %i[collection_id font_id], unique: true
    end
  end
end
