# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


# users
20.times do |n|
  name = Faker::Name.name
  email = Faker::Internet.free_email(name.split.first)
  password = 'password'
  username = Faker::Internet.user_name(name)
  bio = Faker::Lorem.paragraph
  avatar = Faker::Avatar.image("50x50")
  User.create!(
    name: name,
    username: username,
    email: email,
    avatar:avatar,
    password: password,
    bio: bio
    )
end

# course  
Course.create!(name: "Breakfast")
Course.create!(name: "Lunch")
Course.create!(name: "Dinner")
Course.create!(name: "Starter")
Course.create!(name: "Dessert")
Course.create!(name: "Main")

# category
Category.create!(name: 'Party')
Category.create!(name: 'Christmas')
Category.create!(name: 'Birthday')
Category.create!(name: 'Vegetarian')
Category.create!(name: 'Vegan')
Category.create!(name: 'Gluten-Free')
Category.create!(name: 'Fish')
Category.create!(name: 'Cake')
Category.create!(name: 'Meat')

# posts
30.times do |n|
  user_id = (1..20).to_a.sample
  summary = Faker::Lorem.paragraph(2)
  title = Faker::Lorem.word
  servings = (1..15).to_a.sample
  course_id = (1..6).to_a.sample
  method = Faker::Lorem.paragraph(5)
  category_id = (1..9).to_a.sample
  Post.create!(
    user_id: user_id,
    summary:summary,
    title: title,
    servings: servings,
    course_id: course_id,
    method: method,
    category_id: category_id
    )
end

# ingredients

# comments

# photos