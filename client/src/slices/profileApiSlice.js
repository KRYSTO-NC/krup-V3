import { PROFILES_URL } from '../constants' // Assurez-vous d'avoir la bonne URL pour les messages
import { apiSlice } from './apiSlice'

export const messagesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProfiles: builder.query({
      query: () => ({
        url: PROFILES_URL,
      }),
      providesTags: ['Profile'],
      keepUnusedDataFor: 5,
    }),

    getProfileDetails: builder.query({
      query: (id) => ({
        url: `${PROFILES_URL}/${id}`,
      }),
      keepUnusedDataFor: 5,
    }),
    // Nouvelle requête pour obtenir les détails d'un profil spécifique
    getProfileDetailsByUser: builder.query({
      query: (id) => ({
        url: `${PROFILES_URL}/user/${id}`,
      }),
      keepUnusedDataFor: 5,
    }),

    createProfile: builder.mutation({
      query: (data) => ({
        url: PROFILES_URL,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Profile'],
    }),
  }),
})

export const {
  useGetProfileDetailsQuery,
  useGetProfilesQuery,
  useCreateProfileMutation,
  useGetProfileDetailsByUserQuery,
} = messagesApiSlice
