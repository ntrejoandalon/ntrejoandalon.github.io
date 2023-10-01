import { configureStore } from '@reduxjs/toolkit'
import blogpostReducer from './blogpostSlice'

export default configureStore({
  reducer: {
    blogpost: blogpostReducer,
  },
})