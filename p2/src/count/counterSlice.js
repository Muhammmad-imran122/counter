import { createSlice } from "@reduxjs/toolkit";
const initialValue={
    value:0
};
export const counterSlice=createSlice({
    name:'count',
    initialState:initialValue,
    reducers:{
        increment:(state)=>{
            state.value+=1
        },
        decrement:(state)=>{
            state.value-=1
        },
        incrementByAmount:(state,action)=>{
            state.value+=action.payload;
        },
        clearAll:(state)=>{
            state.value=0;
        }
    }
})

export const {increment,decrement,incrementByAmount,clearAll}=counterSlice.actions;
export default counterSlice.reducer;