const express = require('express')
const {
  createProfile,
  profilePhotoUpload,
  getProfilesInRadius,
  updateProfile,
  deleteProfile,
  getProfile,
  getProfiles,
  getProfileByUserId,
} = require('../controllers/profile')
const User = require('../models/User')
const Profile = require('../models/Profile')

// Include other resource routers
const productRouter = require('./products')
// const reviewRouter = require('./reviews')

const router = express.Router()

const advancedResults = require('../middleware/advancedResults')
const { protect, authorize } = require('../middleware/auth')

// Re-route into other resource routers
router.use('/:profileId/products', productRouter)
// router.use('/:profileId/reviews', reviewRouter)

router.route('/radius/:zipcode/:distance').get(getProfilesInRadius)

router
  .route('/')
  .get(advancedResults(Profile, { path: 'user' }), getProfiles) // Populating user in the list of profiles
  .post(protect, createProfile)

router
  .route('/:id')
  .get(getProfile)
  .put(protect, updateProfile)
  .delete(protect, deleteProfile)

router.route('/user/:user_id').get(getProfileByUserId)

module.exports = router
