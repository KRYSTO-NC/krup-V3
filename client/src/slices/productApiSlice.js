// Importez les dépendances nécessaires

import { apiSlice } from './apiSlice'
import { PRODUCTS_URL } from '../constants'
import { UPLOAD_URL } from '../constants'

// Créez un slice pour les produits
export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      providesTags: ['Product'],
    }),

    getProduct: builder.query({
      query: (id) => ({
        url: `${PRODUCTS_URL}/${id}`,
      }),
      keepUnusedDataFor: 5,
    }),
    addProduct: builder.mutation({
      query: (profileId) => ({
        url: `${PRODUCTS_URL}/profile/${profileId}`,
        method: 'POST',
      }),
      invalidatesTags: ['Product'],
    }),
    updateProduct: builder.mutation({
      query: ({ productId, data }) => ({
        url: `${PRODUCTS_URL}/${productId}`, // Adjust the URL construction
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Product'],
    }),

    uploadProductImage: builder.mutation({
      query: (data) => ({
        url: `${UPLOAD_URL}`,
        method: 'POST',
        body: data,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `${PRODUCTS_URL}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Product'],
    }),
    getProductsByProfile: builder.query({
      query: (profileId) => ({
        url: `${PRODUCTS_URL}/profile/${profileId}`,
      }),
      providesTags: (result, error, profileId) => [
        { type: 'Product', profileId },
      ],
    }),
  }),
})

// Exportez les hooks d'utilisation des endpoints
export const {
  useGetProductsQuery,
  useGetProductQuery,
  useAddProductMutation,
  useGetProductsByProfileQuery,
  useUploadProductImageMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productsApiSlice
