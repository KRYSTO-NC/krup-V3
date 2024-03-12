const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../middleware/async')
const { check, validationResult } = require('express-validator')
const Post = require('../models/Post')
const User = require('../models/User')

// @desc      Create a post
// @route     POST /api/v1/posts
// @access    Private
exports.createPost = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return next(new ErrorResponse(errors.array(), 400))
  }

  try {
    const user = await User.findById(req.user._id).select('-password')

    const newPost = new Post({
      text: req.body.text,
      name: user.name,
      avatar: user.avatar,
      user: req.user.id,
    })

    const post = await newPost.save()

    res.status(201).json({
      success: true,
      data: post,
    })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @desc      Get all posts
// @route     GET /api/v1/posts
// @access    Private
exports.getPosts = asyncHandler(async (req, res, next) => {
  try {
    const posts = await Post.find().sort({ date: -1 }).populate('user')

    res.status(200).json({
      success: true,
      count: posts.length,
      data: posts,
    })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @desc      Get post by ID
// @route     GET /api/v1/posts/:id
// @access    Private
exports.getPostById = asyncHandler(async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id)

    if (!post) {
      return next(
        new ErrorResponse(`No post with the id of ${req.params.id}`, 404),
      )
    }

    res.status(200).json({
      success: true,
      data: post,
    })
  } catch (err) {
    console.error(err.message)

    if (err.kind === 'ObjectId') {
      return next(
        new ErrorResponse(`No post with the id of ${req.params.id}`, 404),
      )
    }

    res.status(500).send('Server Error')
  }
})

// @desc      Delete a post
// @route     DELETE /api/v1/posts/:id
// @access    Private
exports.deletePost = asyncHandler(async (req, res, next) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id)

    if (!post) {
      return next(
        new ErrorResponse(`No post with the id of ${req.params.id}`, 404),
      )
    }

    if (post.user.toString() !== req.user.id) {
      return next(
        new ErrorResponse('User not authorized to delete this post', 401),
      )
    }

    await post.remove()

    res.status(200).json({
      success: true,
      data: {},
    })
  } catch (err) {
    console.error(err.message)

    if (err.kind === 'ObjectId') {
      return next(
        new ErrorResponse(`No post with the id of ${req.params.id}`, 404),
      )
    }

    res.status(500).send('Server Error')
  }
})

// @desc      Like a post
// @route     PUT /api/v1/posts/like/:id
// @access    Private
exports.likePost = asyncHandler(async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id)

    if (!post) {
      return next(
        new ErrorResponse(`No post with the id of ${req.params.id}`, 404),
      )
    }

    if (post.likes.some((like) => like.user.toString() === req.user.id)) {
      return next(new ErrorResponse('Post already liked', 400))
    }

    post.likes.unshift({ user: req.user.id })
    await post.save()

    res.status(200).json({
      success: true,
      data: post.likes,
    })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @desc      Unlike a post
// @route     PUT /api/v1/posts/unlike/:id
// @access    Private
exports.unlikePost = asyncHandler(async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id)

    if (!post) {
      return next(
        new ErrorResponse(`No post with the id of ${req.params.id}`, 404),
      )
    }

    if (!post.likes.some((like) => like.user.toString() === req.user.id)) {
      return next(new ErrorResponse('Post not liked yet', 400))
    }

    const removeIndex = post.likes
      .map((like) => like.user.toString())
      .indexOf(req.user.id)
    post.likes.splice(removeIndex, 1)
    await post.save()

    res.status(200).json({
      success: true,
      data: post.likes,
    })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @desc      Comment on a post
// @route     POST /api/v1/posts/comment/:id
// @access    Private
exports.commentOnPost = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return next(new ErrorResponse(errors.array(), 400))
  }

  try {
    const user = await User.findById(req.user.id).select('-password')
    const post = await Post.findById(req.params.id)

    if (!post) {
      return next(
        new ErrorResponse(`No post with the id of ${req.params.id}`, 404),
      )
    }

    const newComment = {
      text: req.body.text,
      name: user.name,
      avatar: user.avatar,
      user: req.user.id,
    }

    post.comments.unshift(newComment)
    await post.save()

    res.status(201).json({
      success: true,
      data: post.comments,
    })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @desc      Delete comment
// @route     DELETE /api/v1/posts/comment/:id/:comment_id
// @access    Private
exports.deleteComment = asyncHandler(async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id)

    if (!post) {
      return next(
        new ErrorResponse(`No post with the id of ${req.params.id}`, 404),
      )
    }

    const comment = post.comments.find(
      (comment) => comment.id === req.params.comment_id,
    )

    if (!comment) {
      return next(
        new ErrorResponse(
          `No comment with the id of ${req.params.comment_id}`,
          404,
        ),
      )
    }

    if (comment.user.toString() !== req.user.id) {
      return next(
        new ErrorResponse('User not authorized to delete this comment', 401),
      )
    }

    const removeIndex = post.comments
      .map((comment) => comment.id)
      .indexOf(req.params.comment_id)
    post.comments.splice(removeIndex, 1)
    await post.save()

    res.status(200).json({
      success: true,
      data: post.comments,
    })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @desc      Report a post
// @route     POST /api/v1/posts/report/:id
// @access    Private
exports.reportPost = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return next(new ErrorResponse(errors.array(), 400))
  }

  try {
    const user = await User.findById(req.user.id).select('-password')
    const post = await Post.findById(req.params.id)

    if (!post) {
      return next(
        new ErrorResponse(`No post with the id of ${req.params.id}`, 404),
      )
    }

    const newReport = {
      reason: req.body.reason,
      name: user.name,
      avatar: user.avatar,
      user: req.user.id,
    }

    post.reports.unshift(newReport)
    await post.save()

    res.status(201).json({
      success: true,
      data: post.reports,
    })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @desc      Delete report
// @route     DELETE /api/v1/posts/report/:id/:report_id
// @access    Private
exports.deleteReport = asyncHandler(async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id)

    if (!post) {
      return next(
        new ErrorResponse(`No post with the id of ${req.params.id}`, 404),
      )
    }

    const report = post.reports.find(
      (report) => report.id === req.params.report_id,
    )

    if (!report) {
      return next(
        new ErrorResponse(
          `No report with the id of ${req.params.report_id}`,
          404,
        ),
      )
    }

    if (report.user.toString() !== req.user.id) {
      return next(
        new ErrorResponse('User not authorized to delete this report', 401),
      )
    }

    const removeIndex = post.reports
      .map((report) => report.id)
      .indexOf(req.params.report_id)
    post.reports.splice(removeIndex, 1)
    await post.save()

    res.status(200).json({
      success: true,
      data: post.reports,
    })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})
