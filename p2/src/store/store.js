import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../count/counterSlice'
export const store=configureStore({
   reducer:{
    counter: counterReducer
    }

})

