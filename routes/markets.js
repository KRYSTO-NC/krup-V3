const express = require('express')
const {
  getMarkets,
  getMarket,
  addMarket,
  updateMarket,
  deleteMarket,
} = require('../controllers/market') // Adjust the import path as needed

const router = express.Router()

const { protect } = require('../middleware/auth')

// @route    GET /api/v1/markets
// @desc     Get all markets
// @access   Private
router.get('/', protect, getMarkets)

// @route    GET /api/v1/markets/:id
// @desc     Get single market
// @access   Private
router.get('/:id', protect, getMarket)

// @route    POST /api/v1/markets
// @desc     Create a market
// @access   Private
router.post('/', protect, addMarket)

// @route    PUT /api/v1/markets/:id
// @desc     Update a market
// @access   Private
router.put('/:id', protect, updateMarket)

// @route    DELETE /api/v1/markets/:id
// @desc     Delete a market
// @access   Private
router.delete('/:id', protect, deleteMarket)

module.exports = router
