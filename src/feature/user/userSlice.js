import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchUserById = createAsyncThunk('user/fetchUserById', async(id) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.data;
});

export const fetchusers = createAsyncThunk('user/fetchUsers', async() => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    return response.data;
});

const initialState = {
    loading: 'idle',
    users: [],
    user:{},
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserById.fulfilled, (state, actions)=>{
            state.user = actions.payload;
        });
        builder.addCase(fetchusers.fulfilled, (state, actions) => {
            state.users = actions.payload;
        })
    }
})

export default userSlice.reducer;