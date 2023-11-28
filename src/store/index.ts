import { configureStore } from '@reduxjs/toolkit'

import appApi from '../api'

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(appApi.middleware),
  reducer: {
    [appApi.reducerPath]: appApi.reducer,
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
