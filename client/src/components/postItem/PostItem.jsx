import React from 'react'
import { FaComment, FaThumbsUp, FaThumbsDown, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useGetProfileDetailsByUserQuery } from '../../slices/profileApiSlice'
import {
  useLikePostMutation,
  useUnlikePostMutation,
} from '../../slices/postApiSlice'

const PostItem = ({ post }) => {
  const { data: profile, isLoading, isError } = useGetProfileDetailsByUserQuery(
    post.user._id,
  )

  // Use the useLikePostMutation and useUnlikePostMutation hooks
  const [likePost] = useLikePostMutation()
  const [unlikePost] = useUnlikePostMutation()

  const handleClickLike = () => {
    
    likePost(post._id)
  }
  const handleClickDisLike = () => {
   
    unlikePost(post._id)
  }

  return (
    <div className="post bg-white p-2 my-1">
      <div>
        <Link to={`/profile/user/${profile?.data?._id}`}>
          <img
            className="round-img"
            src={
              post.avatar
                ? post.avatar
                : 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200'
            }
            alt=""
          />
          <h4 className="medium">{post.user.name}</h4>

          <p className="">{post.user.role}</p>
        </Link>
      </div>
      <div>
        <p className="my-1 lead">{post.text}</p>
        <button
          type="button"
          className="btn btn-light"
          onClick={handleClickLike}
        >
          <FaThumbsUp /> <span>{post.likes.length}</span>
        </button>

        <button
          type="button"
          className="btn btn-light"
          onClick={handleClickDisLike}
        >
          <FaThumbsDown />
        </button>
        <Link to={`/post/${post._id}`} className="btn btn-primary">
          <FaComment /> Discussion{' '}
          <span className="comment-count">{post.comments.length}</span>
        </Link>
        <Link to={`/post/${post._id}`} className="btn btn-primary">
          <FaUserPlus /> Suivre
        </Link>

        {post.user.role === 'Artisan/Producteur' ? (
          <Link className="btn btn-primary">
            Voir la boutique de cette artisan
          </Link>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default PostItem
