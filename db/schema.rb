# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_08_27_145219) do
  create_table "collections", force: :cascade do |t|
    t.string "name"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_collections_on_user_id"
  end

  create_table "collections_fonts", id: false, force: :cascade do |t|
    t.integer "font_id", null: false
    t.integer "collection_id", null: false
    t.index ["collection_id", "font_id"], name: "index_collections_fonts_on_collection_id_and_font_id", unique: true
  end

  create_table "fonts", force: :cascade do |t|
    t.string "family"
    t.string "displayName"
    t.string "category"
    t.integer "size"
    t.json "subsets"
    t.json "fonts"
    t.json "axes"
    t.json "designers"
    t.date "dateAdded"
    t.integer "popularity"
    t.integer "trending"
    t.integer "defaultSort"
  end

  create_table "themes", force: :cascade do |t|
    t.string "name"
    t.json "data"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "collections", "users"
end
