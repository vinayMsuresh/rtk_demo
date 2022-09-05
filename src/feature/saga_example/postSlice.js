import { createSlice } from "@reduxjs/toolkit";

export const postSlice=createSlice({

    name:'posts',
    initialState:{
        cats:[],
        isLoading:false
    },
    reducers:{
        getCatsFetch:(state)=>{
            state.isLoading=true;
        },
        getCatsSuccess:(state,action)=>{
            state.cats=action.payload;
            state.isLoading=false;

        },
        getCatsFailure:(state)=>{
            state.isLoading=false;
        }
    }

});

export const {getCatsFetch,getCatsSuccess,getCatsFailure}= postSlice.actions;

export default postSlice.reducer;