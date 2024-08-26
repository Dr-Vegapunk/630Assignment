import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './reduceSlice/userSlice'

export default configureStore({
  reducer: {
    counter: counterSlice
  },
})