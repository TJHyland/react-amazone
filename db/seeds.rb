require 'faker'
require 'database_cleaner'

DatabaseCleaner.clean_with(:truncation)

user = User.create({
  email: 'user@email.com',
  password: 'password'
})

departments = [1,2,3,4,5,6,7,8,9,10]

10.times do
  department = Department.create(
    title: Faker::Food.dish,
    user_id: user.id
  )

  10.times do
    product = Product.create(
      name: Faker::Food.fruits,
      description: Faker::Food.description,
      price: Faker::Number.digit,
      stock: Faker::Number.digit,
      department_id: departments.sample
    )

  end
end
puts "Data Seeded"