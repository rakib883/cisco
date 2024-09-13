import { configureStore } from '@reduxjs/toolkit'
import  myState  from './slice'

export const store = configureStore({
  reducer: {
    myStore:myState
  },
})


