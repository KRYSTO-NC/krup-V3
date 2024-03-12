const fs = require('fs')
const mongoose = require('mongoose')
const colors = require('colors')
const dotenv = require('dotenv')

// Load env vars
dotenv.config({ path: './config/.env' })

// Load models
const User = require('./models/User')
const Profile = require('./models/Profile')
const Product = require('./models/Product')

// Connect to DB
mongoose.connect(process.env.MONGO_URI)

const users = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/users.json`, 'utf-8'),
)

const profiles = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/profiles.json`, 'utf-8'),
)
const products = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/products.json`, 'utf-8'),
)

// Import into DB
const importData = async () => {
  try {
    await User.create(users)
    await Profile.create(profiles)
    await Product.create(products)
    console.log('Data Imported...'.green.inverse)
    process.exit()
  } catch (err) {
    console.error(err)
  }
}

// Delete data
const deleteData = async () => {
  try {
    await User.deleteMany()
    await Profile.deleteMany()
    await Product.deleteMany()

    console.log('Data Destroyed...'.red.inverse)
    process.exit()
  } catch (err) {
    console.error(err)
  }
}

if (process.argv[2] === '-i') {
  importData()
} else if (process.argv[2] === '-d') {
  deleteData()
}
