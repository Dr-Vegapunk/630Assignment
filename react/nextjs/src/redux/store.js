import { configureStore } from '@reduxjs/toolkit'
import counterSlice  from './reduceSlice/userSlice'
import boxSlice from './reduceSlice/boxSlice'

export default configureStore({
  reducer: {
    counter: counterSlice,
    box: boxSlice
  },
})