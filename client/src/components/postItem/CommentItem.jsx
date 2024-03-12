import React from 'react'
import { Link } from 'react-router-dom'

const CommentItem = ({post}) => {

  console.log(post);
  return (
    <div className="post bg-white p-2 my-1">
      <div>
        <Link to={'/profile'}>
          <img
            className="round-img"
            src="https://www.gravatar.com/avatar/5d2e4c7b8e94773e602abaa83929ba1b?s=200&r=pg&d=mm"
            alt=""
          />
          <h4 className="medium">Stoyann Velten</h4>
        </Link>
      </div>
      <div>
        <p className="my-1 lead">
         {post?.data?.text}
        </p>
      </div>
    </div>
  )
}

export default CommentItem
