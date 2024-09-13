import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  CartData:[],
  newLoggedUser:{}
}

export const myState = createSlice({
  name: 'myState',
  initialState,
  reducers: {
       loggedUser:(state,action)=>{
        state.newLoggedUser = action.payload
       },
      addToCart:(state,action)=>{
        const  existingData = state.CartData.find((item)=>item?.id === action.payload?.id)
        if(existingData){
          existingData.quantity++
        }else{
          state.CartData.push(action.payload)
        }

      },
      cartItemRemove:(state,action)=>{
        state.CartData = state.CartData.filter((item)=>item?.id !== action?.payload?.id)
      },
      decrementProduct:(state,action)=>{
         const existingData = state.CartData.find((item)=>item?.id === action?.payload?.id)
         if(existingData?.quantity === 1){
             existingData.quantity === 1
         }else{
           existingData.quantity --
         }
      }
     
  },
})

// Action creators are generated for each case reducer function
export const { loggedUser,addToCart,decrementProduct,cartItemRemove} = myState.actions

export default myState.reducer