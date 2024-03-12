const mongoose = require('mongoose')
const Profile = require('./Profile') // Adjust the path as needed

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Merci de renseigner le nom du produit'],
  },
  description: {
    type: String,
    required: [true, 'Merci de renseigner la description du produit'],
  },
  category: {
    type: String,
    enum: [
      'Alimentaires',
      'Fruits & Légumes',
      'Mode',
      'Produit de beauté',
      'Produit Entretien',
      'Maison & Jardin',
      'Arts',
      'Autre',
    ],
    default: 'user',
    required: true,
  },

  price: {
    type: Number,
    required: [true, 'Merci de renseigner le prix du produit'],
  },
  images: [
    {
      type: String,
      required: true,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  profile: {
    type: mongoose.Schema.ObjectId,
    ref: 'Profile',
    required: true,
  },
})

module.exports = mongoose.model('Product', ProductSchema)
