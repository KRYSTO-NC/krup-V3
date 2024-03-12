const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../middleware/async')
const Market = require('../models/Market')

// @desc      Get all markets
// @route     GET /api/v1/markets
// @access    Private
exports.getMarkets = asyncHandler(async (req, res, next) => {
  const markets = await Market.find()
    .sort({ date: -1 })
    .populate('user', ['name', 'avatar', 'id'])

  res.status(200).json({
    success: true,
    count: markets.length,
    data: markets,
  })
})

// @desc      Get single market
// @route     GET /api/v1/markets/:id
// @access    Private
exports.getMarket = asyncHandler(async (req, res, next) => {
  const market = await Market.findById(req.params.id)

  if (!market) {
    return next(
      new ErrorResponse(`No market with the id of ${req.params.id}`, 404),
    )
  }

  res.status(200).json({
    success: true,
    data: market,
  })
})

// @desc      Add market
// @route     POST /api/v1/markets
// @access    Private
exports.addMarket = asyncHandler(async (req, res, next) => {
  req.body.user = req.user.id

  const market = await Market.create(req.body)

  res.status(200).json({
    success: true,
    data: market,
  })
})

// @desc      Update market
// @route     PUT /api/v1/markets/:id
// @access    Private
exports.updateMarket = asyncHandler(async (req, res, next) => {
  let market = await Market.findById(req.params.id)

  if (!market) {
    return next(
      new ErrorResponse(`No market with the id of ${req.params.id}`, 404),
    )
  }

  // Check user authorization (modify as needed)
  if (market.user.toString() !== req.user.id && req.user.isAdmin !== true) {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to update market ${market._id}`,
        401,
      ),
    )
  }

  market = await Market.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })

  res.status(200).json({
    success: true,
    data: market,
  })
})

// @desc      Delete market
// @route     DELETE /api/v1/markets/:id
// @access    Private
exports.deleteMarket = asyncHandler(async (req, res, next) => {
  const market = await Market.findByIdAndDelete(req.params.id)

  if (!market) {
    return next(
      new ErrorResponse(`No market with the id of ${req.params.id}`, 404),
    )
  }

  // Check user authorization (modify as needed)
  if (market.user.toString() !== req.user.id && req.user.isAdmin !== true) {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to delete market ${market._id}`,
        401,
      ),
    )
  }

  res.status(200).json({
    success: true,
    data: {},
  })
})
