import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  CartData:[],
  whilist:[],
  newLoggedUser:null
}

export const myState = createSlice({
  name: 'myState',
  initialState,
  reducers: {
       loggedUser:(state,action)=>{
        state.newLoggedUser = action.payload
       },
       removeUser:(state)=>{
         state.newLoggedUser = null
       },
      addToCart:(state,action)=>{
        const  existingData = state.CartData.find((item)=>item?.id === action.payload?.id)
        if(existingData){
          existingData.quantity++
        }else{
          state.CartData.push(action.payload)
        }

      },

      emptyCard:(state)=>{
         state.CartData = []
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
      },
      addFavorite:(state,action)=>{
        const existingFavorite = state.whilist.find((item)=>item.id === action.payload.id)
        if(existingFavorite){
          existingFavorite.quantity++
        }else{
           state.whilist.push(action.payload)
        }
      },
      removeFavorite:(state,action)=>{
        state.whilist = state.whilist.filter((item)=>item.id !== action.payload.id)
       
    }
     
  },
})

// Action creators are generated for each case reducer function
export const { loggedUser,addToCart,decrementProduct,cartItemRemove,removeUser,emptyCard,addFavorite,removeFavorite} = myState.actions

export default myState.reducer