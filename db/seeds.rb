# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# 1.upto(10) do |i|
#   Event.create(name: "Event #{i}",
#                description: "It's sample event with number #{i}",
#                event_date: Date.today + rand(3).months,
#                place: "Random place number #{i}")
# end
require 'faker'
10.times do 
	Event.create(
	name: ["Booze party", "Beach Party", "Concert", "Live Sessions", "MeetUp"].sample,
	description: Faker::Educator.campus,
	event_date: "#{Date.today + rand(10).days}",
	place: Faker::Address.city)
end