const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../middleware/async')
const Product = require('../models/Product')
const Profile = require('../models/Profile')
const User = require('../models/User')

// @desc      Get products
// @route     GET /api/v1/products

// @access    Public
exports.getProducts = asyncHandler(async (req, res, next) => {
  const products = await Product.find().sort({ date: -1 })

  res.status(200).json({
    success: true,
    count: products.length,
    data: products,
  })
})

// @desc      Get products by profile ID
// @route     GET /api/v1/products/profile/:profileId
// @access    Public
exports.getProductsByProfile = asyncHandler(async (req, res, next) => {
  const profileId = req.params.profileId

  // Assurez-vous que le champ de profil dans le modèle de produit est correct
  const products = await Product.find({ profile: profileId }).sort({ date: -1 })

  res.status(200).json({
    success: true,
    count: products.length,
    data: products,
  })
})

// @desc      Get single product
// @route     GET /api/v1/products/:id
// @access    Public
exports.getProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id)

  if (!product) {
    return next(
      new ErrorResponse(`No product with the id of ${req.params.id}`),
      404,
    )
  }

  res.status(200).json({
    success: true,
    data: product,
  })
})

// @desc      Add product
// @route     POST /api/v1/profiles/:profileId/products
// @access    Private

exports.addProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: 'Sample name',
    description: 'Sample description',
    price: 0,
    category: 'Autre',
    profile: req.params.profileId,
    images: ['/images/sample.png'],
  })

  const createdProduct = await product.save()

  res.status(200).json({
    success: true,
    data: product,
  })
})

// @desc      Update product
// @route     PUT /api/v1/products/:id
// @access    Private
exports.updateProduct = asyncHandler(async (req, res, next) => {
  let product = await Product.findById(req.params.id)

  if (!product) {
    return next(
      new ErrorResponse(`Aucun produit avec l'ID ${req.params.id}`, 404),
    )
  }

  // Update product fields individually
  product.name = req.body.name || product.name
  product.price = req.body.price || product.price
  product.description = req.body.description || product.description
  product.images = req.body.images || product.images
  product.category = req.body.category || product.category

  // Save the updated product
  await product.save()

  res.status(200).json({
    success: true,
    data: product,
  })
})

// @desc      Delete product
// @route     DELETE /api/v1/products/:id
// @access    Private
exports.deleteProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findByIdAndDelete(req.params.id)

  if (!product) {
    return next(
      new ErrorResponse(`No course with the id of ${req.params.id}`),
      404,
    )
  }

  // Make sure user is product owner
  if (product.user.toString() !== req.user.id && req.user.isAdmin !== true) {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to delete course ${product._id}`,
        401,
      ),
    )
  }

  res.status(200).json({
    success: true,
    data: {},
  })
})
