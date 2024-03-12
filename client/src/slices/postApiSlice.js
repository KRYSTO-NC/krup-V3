import { POSTS_URL } from '../constants' // Assurez-vous d'avoir la bonne URL pour les posts
import { apiSlice } from './apiSlice'

export const postsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => ({
        url: POSTS_URL,
      }),
      providesTags: ['Post'],
      keepUnusedDataFor: 5,
    }),

    getPostDetails: builder.query({
      query: (id) => ({
        url: `${POSTS_URL}/${id}`,
      }),
      keepUnusedDataFor: 5,
    }),

    deletePost: builder.mutation({
      query: (postId) => ({
        url: `${POSTS_URL}/${postId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Post'],
    }),

    createPost: builder.mutation({
      query: (data) => {
        console.log('data:', data)
        return {
          url: POSTS_URL,
          method: 'POST',
          body: data,
        }
      },
      invalidatesTags: ['Post'],
    }),
    likePost: builder.mutation({
      query: (postId) => ({
        url: `${POSTS_URL}/like/${postId}`,
        method: 'PUT',
      }),
      invalidatesTags: ['Post'],
    }),

    unlikePost: builder.mutation({
      query: (postId) => ({
        url: `${POSTS_URL}/unlike/${postId}`,
        method: 'PUT',
      }),
      invalidatesTags: ['Post'],
    }),

    createComment: builder.mutation({
      query: (id, data) => ({
        url: `${POSTS_URL}/comment/${id}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Post'],
    }),

    deleteComment: builder.mutation({
      query: (postId, commentId) => ({
        url: `${POSTS_URL}/comment/${postId}/${commentId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Post'],
    }),

    reportPost: builder.mutation({
      query: (id, data) => ({
        url: `${POSTS_URL}/report/${id}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Post'],
    }),

    deleteReport: builder.mutation({
      query: (postId, reportId) => ({
        url: `${POSTS_URL}/report/${postId}/${reportId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Post'],
    }),
  }),
})

export const {
  useGetPostDetailsQuery,
  useGetPostsQuery,
  useCreatePostMutation,
  useDeletePostMutation,
  useLikePostMutation,
  useUnlikePostMutation,
  useCreateCommentMutation,
  useDeleteCommentMutation,
  useReportPostMutation,
  useDeleteReportMutation,
} = postsApiSlice
