import { configureStore } from '@reduxjs/toolkit'
import getServiceReducer from '../features/serviceSlice'

const store = configureStore({
  reducer: {
    service: getServiceReducer,
  },
})

export default store

