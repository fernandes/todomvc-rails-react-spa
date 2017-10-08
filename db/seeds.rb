# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

u = User.create!(email: 'user@mail.com', password: 'pass1234', password_confirmation: 'pass1234')
Todo.create!(title: "Learn React", user: u, completed: true)
Todo.create!(title: "Learn Redux", user: u, completed: false)
Todo.create!(title: "Implement", user: u, completed: false)
