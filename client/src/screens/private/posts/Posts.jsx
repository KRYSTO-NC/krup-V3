import React, { useState } from 'react';
import PostItem from '../../../components/postItem/PostItem';
import {  useCreatePostMutation, useGetPostsQuery } from '../../../slices/postApiSlice';

const Posts = () => {
  const { data: posts, isLoading, isError , refetch } = useGetPostsQuery();
  const [newPostText, setNewPostText] = useState('');

const [createPost, { isLoading: isCreatingPost  }] = useCreatePostMutation();

  
const createPostHandler = async (e) => {
  e.preventDefault();
  console.log('New post text:', newPostText);

  if (newPostText.trim() === '') {
    console.log('Post text is empty.');
    return;
  }

  try {
    console.log('Creating post...');
    await createPost({ text: newPostText });
    console.log('Post created successfully.');
    setNewPostText('');
    refetch();
  } catch (error) {
    console.error('Failed to create post:', error);
  }
};
  return (
    <div className="container">

      {isCreatingPost && <p>Envoi du post...</p>}
      {isLoading ? (
        <p>Chargement...</p>
      ) : isError ? (
        <p>Une erreur est survenue</p>
      ) : (
        <>
          <h1 className="large text-primary">Publications</h1>
          <p className="lead">
            Bienvenue dans la communauté des artisans et producteurs locaux
          </p>

          <div className="post-form">
            <div className="bg-primary post-form-header">
              <h3 style={{padding:"1.2rem"}}>Dîtes quelque chose...</h3>
            </div>
            <form  onSubmit={createPostHandler} className="form my-1">
              <textarea
                name="text"
                cols="30"
                rows="5"
                placeholder="Créer un nouveau poste..."
                value={newPostText} // Bind the value to the state
                onChange={(e) => setNewPostText(e.target.value)} // Update the state on change
              ></textarea>
              <input
                type="submit"
                className="btn btn-dark my-1"
                value="Envoyer"
              />
            </form>
          </div>

          <div className="posts">
            {posts?.data?.map((post) => (
              <PostItem key={post._id} post={post} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Posts;
