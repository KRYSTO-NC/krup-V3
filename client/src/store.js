import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './slices/apiSlice'
import alertSliceReducer from './slices/alertSlice' // Update the import
import authSliceReducer from './slices/authSlice'

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    alert: alertSliceReducer, // Update the key and include the alertSlice reducer
    auth: authSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
})

export default store
