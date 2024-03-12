const express = require('express')
const router = express.Router({ mergeParams: true })
const {
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  addProduct,
  getProductsByProfile,
} = require('../controllers/products')

const Product = require('../models/Product')

const advancedResults = require('../middleware/advancedResults')
const { protect, authorize } = require('../middleware/auth')

router.route('/').get(advancedResults(Product), getProducts)

router
  .route('/:id')
  .get(getProduct)
  .put(protect, updateProduct)
  .delete(protect, deleteProduct)

// Nouvelle route pour obtenir les produits en fonction de l'ID du profil
router.get('/profile/:profileId', getProductsByProfile)
router.post('/profile/:profileId', protect, addProduct)

module.exports = router
