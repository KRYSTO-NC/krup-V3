import React, { useState } from 'react';
import PostItem from '../../../components/postItem/PostItem';
import CommentItem from '../../../components/postItem/CommentItem';
import { Link, useParams } from 'react-router-dom';
import { useCreateCommentMutation, useGetPostDetailsQuery } from '../../../slices/postApiSlice';

const Post = () => {
  const { id } = useParams();
  const { data: post, isError, isLoading, refetch } = useGetPostDetailsQuery(id);
  const [newCommentText, setNewCommentText] = useState('');
  const [createComment, { isLoading: isCreatingComment }] = useCreateCommentMutation();

  const createCommentHandler = async (e) => {
    e.preventDefault();
    console.log('New comment text:', newCommentText);

    if (newCommentText.trim() === '') {
      console.log('Comment text is empty.');
      return;
    }

    try {
      console.log('Creating comment...');
      await createComment(id, { text: newCommentText });
      console.log('Comment created successfully.');
      setNewCommentText('');
      refetch();
    } catch (error) {
      console.error('Failed to create comment:', error);
    }
  };

  return (
    <div className="container">
      <Link to="/posts" className="btn btn-light">
        Retour
      </Link>

      <div className="post-form">
        <CommentItem post={post} />
        <div className="bg-primary post-form-header">
          <h3>Laissez un commentaire</h3>
        </div>
        <form onSubmit={createCommentHandler} className="form my-1">
          <textarea
            name="text"
            cols="30"
            rows="5"
            placeholder="Commenter ce poste."
            value={newCommentText}
            onChange={(e) => setNewCommentText(e.target.value)}
          ></textarea>
          <input type="submit" className="btn btn-dark my-1" value="Envoyer" />
        </form>
      </div>

      <div className="posts">
        {post?.data?.comments?.length === 0 ? (
          <p className='lead text-danger'>Pas de commentaires pour ce post.</p>
        ) : (
          post?.data?.comments?.map((comment) => (
            <CommentItem key={comment._id} post={comment} />
          ))
        )}
      </div>
    </div>
  );
};

export default Post;
