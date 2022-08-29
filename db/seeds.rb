# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "faker"
require "json"
file = File.open("/home/dbagle7/Development/Code/Assignments/phase-5/Assets/PARSED fonts metadata.json")
data = JSON.load(file)
file.close
puts "Loaded #{data.size} records"
data.slice(0, 100).each { |record| Font.create!(record) }

3.times.each { |i| User.create!(username: "u#{i}", password: "p1", password_confirmation: "p1") }
User.create(username: "admin", password: "admin", password_confirmation: "admin")

User.first.collections.create(name: "Collection 1")
Collection.first.fonts << [Font.first, Font.second]

puts "Created #{Font.count} Fonts"
puts "Created #{Collection.count} Collections"
puts "Created #{CollectionsFont.count} CollectionsFonts"
puts "Created #{User.count} Users"
puts "Seeding complete"

# Font.create(
#   family: "ABeeZee",
#   displayName: null,
#   category: "Sans Serif",
#   size: 46_514,
#   subsets: %w[menu latin latin-ext],
#   fonts: {
#     "400": {
#       thickness: 5,
#       slant: 1,
#       width: 7,
#       lineHeight: 1.182
#     },
#     "400i": {
#       thickness: 5,
#       slant: 4,
#       width: 7,
#       lineHeight: 1.182
#     }
#   },
#   axes: [],
#   designers: ["Anja Meiners"],
#   dateAdded: "2012-09-30",
#   popularity: 123,
#   trending: 586,
#   defaultSort: 124
# )
