// Import necessary constants and the apiSlice
import { USERS_URL } from '../constants'
import { apiSlice } from './apiSlice'

// Use apiSlice to inject endpoints
export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Existing login mutation
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/login`,
        method: 'POST',
        body: data,
      }),
    }),

    // Existing register mutation
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: 'POST',
        body: data,
      }),
    }),

    // Existing logout mutation
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: 'POST',
      }),
    }),

    // Existing profile mutation
    profile: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: 'PUT',
        body: data,
      }),
    }),

    // Existing getUsers query
    getUsers: builder.query({
      query: () => ({
        url: `${USERS_URL}`,
      }),
      providesTags: ['User'],
      keepUnusedDataFor: 5,
    }),

    // New deleteUsers mutation
    deleteUsers: builder.mutation({
      query: (userId) => ({
        url: `${USERS_URL}/${userId}`,
        method: 'DELETE',
      }),
    }),

    // New getUserDetails query
    getUserDetails: builder.query({
      query: (userId) => ({
        url: `${USERS_URL}/${userId}`,
      }),
      keepUnusedDataFor: 5,
    }),

    // Existing updateUser mutation
    updateUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/${data.userId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['User'],
    }),

    // Nouvelle mutation pour la route /me
    getMe: builder.query({
      query: () => ({
        url: `${USERS_URL}/me`,
      }),
    }),

    // Nouvelle mutation pour la route /forgotpassword
    forgotPassword: builder.mutation({
      query: (email) => ({
        url: `${USERS_URL}/forgotpassword`,
        method: 'POST',
        body: { email },
      }),
    }),

    // Nouvelle mutation pour la route /resetpassword/:resettoken
    resetPassword: builder.mutation({
      query: ({ resettoken, newPassword }) => ({
        url: `${USERS_URL}/resetpassword/${resettoken}`,
        method: 'PUT',
        body: { newPassword },
      }),
    }),
  }),
})

// Export the generated hooks
export const {
  useLoginMutation,
  useGetMeQuery,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useLogoutMutation,
  useRegisterMutation,
  useGetUsersQuery,
  useProfileMutation,
  useDeleteUsersMutation, // Added
  useGetUserDetailsQuery, // Added
  useUpdateUserMutation,
} = usersApiSlice
