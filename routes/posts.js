const express = require('express')
const {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  likePost,
  unlikePost,
  commentOnPost,
} = require('../controllers/post')

const Post = require('../models/Post')
const advancedResults = require('../middleware/advancedResults')
const { protect } = require('../middleware/auth')

const router = express.Router({ mergeParams: true })

router
  .route('/')
  .get(
    advancedResults(Post, {
      path: 'user',
      select: 'name avatar',
    }),
    getPosts,
  )
  .post(protect, createPost)

router.route('/:id').get(getPostById).delete(protect, deletePost)

router.route('/like/:id').put(protect, likePost)
router.route('/unlike/:id').put(protect, unlikePost)
router.route('/comment/:id').post(protect, commentOnPost)

module.exports = router
