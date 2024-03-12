const path = require('path')
const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../middleware/async')
const geocoder = require('../utils/geocoder')
const Profile = require('../models/Profile')

// @desc      Get all profiles
// @route     GET /api/v1/profiles
// @access    Public
exports.getProfiles = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults)
})

// @desc      Get single profile
// @route     GET /api/v1/profiles/:id
// @access    Public
exports.getProfile = async (req, res, next) => {
  try {
    const profile = await Profile.findById(req.params.id).populate({
      path: 'user',
    })

    if (!profile) {
      return res
        .status(404)
        .json({ success: false, error: 'Profile not found' })
    }

    res.status(200).json({ success: true, data: profile })
  } catch (error) {
    next(error)
  }
}

// @desc      Get profile by user ID
// @route     GET /api/v1/profiles/user/:user_id
// @access    Public
exports.getProfileByUserId = async (req, res, next) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id,
    }).populate('user')

    if (!profile) {
      return res
        .status(404)
        .json({ success: false, error: 'Profile not found for this user' })
    }

    res.status(200).json({ success: true, data: profile })
  } catch (error) {
    console.error(error.message)
    if (error.kind == 'ObjectId') {
      return res
        .status(400)
        .json({ success: false, error: 'Profile not found' })
    }
    next(error)
  }
}

// @desc      Create new profile
// @route     POST /api/v1/profiles
// @access    Private
exports.createProfile = asyncHandler(async (req, res, next) => {
  // Add user to req,body
  req.body.user = req.user.id

  // Check for published bootcamp
  const publishedProfile = await Profile.findOne({ user: req.user.id })

  // If the user is not an admin, they can only add one profile
  if (publishedProfile && req.user.isAdmin !== true) {
    return next(
      new ErrorResponse(
        `l'uttilisateur avec l'id :  ${req.user.id} A déja un profile`,
        400,
      ),
    )
  }

  const profile = await Profile.create(req.body)

  res.status(201).json({
    success: true,
    data: profile,
  })
})

// @desc      Update profile
// @route     PUT /api/v1/profiles/:id
// @access    Private
exports.updateProfile = asyncHandler(async (req, res, next) => {
  let profile = await Profile.findById(req.params.id)

  if (!profile) {
    return next(
      new ErrorResponse(`profile non trouvée avec l'id ${req.params.id}`, 404),
    )
  }

  // Make sure user is bootcamp owner
  if (profile.user.toString() !== req.user.id && req.user.isAdmin !== true) {
    return next(
      new ErrorResponse(
        `User ${req.params.id} is not authorized to update this profile`,
        401,
      ),
    )
  }

  profile = await Profile.findOneAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })

  res.status(200).json({ success: true, data: profile })
})

// @desc      Delete profile
// @route     DELETE /api/v1/profiles/:id
// @access    Private
exports.deleteProfile = asyncHandler(async (req, res, next) => {
  const profile = await Profile.findByIdAndDelete(req.params.id)

  if (!profile) {
    return next(
      new ErrorResponse(`Profile not found with id of ${req.params.id}`, 404),
    )
  }

  // Make sure user is profile owner
  if (profile.user.toString() !== req.user.id && req.user.isAdmin !== true) {
    return next(
      new ErrorResponse(
        `User ${req.params.id} is not authorized to delete this profile`,
        401,
      ),
    )
  }

  res.status(200).json({ success: true, data: {} })
})

// @desc      Get profiles within a radius
// @route     GET /api/v1/profiles/radius/:zipcode/:distance
// @access    Private
exports.getProfilesInRadius = asyncHandler(async (req, res, next) => {
  const { zipcode, distance } = req.params

  // Get lat/lng from geocoder
  const loc = await geocoder.geocode(zipcode)
  const lat = loc[0].latitude
  const lng = loc[0].longitude

  // Calc radius using radians
  // Divide dist by radius of Earth
  // Earth Radius = 3,963 mi / 6,378 km
  const radius = distance / 3963

  const profiles = await Profile.find({
    location: { $geoWithin: { $centerSphere: [[lng, lat], radius] } },
  })

  res.status(200).json({
    success: true,
    count: profiles.length,
    data: profiles,
  })
})
