import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  name:"shreya",
  email:"shreya@gmail.com"
}
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    increment_5: (state) => {
     state.value += 5
   },
   user_increment :(state,action) => {
    state.value += action.payload 
   },
  //  payload value target kare
   user_decrement :(state,action) => {
    state.value -= action.payload 
   },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement,increment_5,user_increment,user_decrement } = counterSlice.actions

export default counterSlice.reducer;