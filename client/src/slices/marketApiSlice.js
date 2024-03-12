import { MARKETS_URL } from '../constants' // Assurez-vous d'avoir la bonne URL pour les messages
import { apiSlice } from './apiSlice'

export const marketsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMarkets: builder.query({
      query: () => ({
        url: MARKETS_URL,
      }),
      providesTags: ['Market'],
      keepUnusedDataFor: 5,
    }),

    getMarketDetails: builder.query({
      query: (id) => ({
        url: `${MARKETS_URL}/user/${id}`,
      }),
      keepUnusedDataFor: 5,
    }),
    deleteMarket: builder.mutation({
      query: (marketId) => ({
        url: `${MARKETS_URL}/${marketId}`,
        method: 'DELETE',
      }),
    }),

    createMarket: builder.mutation({
      query: (data) => ({
        url: MARKETS_URL,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Market'],
    }),
  }),
})

export const {
  useGetMarketDetailsQuery,
  useGetMarketsQuery,
  useCreateMarketMutation,
  useDeleteMarketMutation,
} = marketsApiSlice
