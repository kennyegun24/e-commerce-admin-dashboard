import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllUsers = createAsyncThunk('getUser/getAllUsers', async (TOKEN) => {
    const BASE_URL = 'http://localhost:4000/api/v1'
    const userRequest = axios.create({
        baseURL: BASE_URL,
        headers: { 'Authorization': `Bearer ${TOKEN}` }
    })
    const get = await userRequest.get('admin/all_users')
    delete get.headers
    return get.data
})

const allUsersSlice = createSlice({
    name: 'allUsers',
    initialState: {
        allUsers: [],
        status: null
    },
    reducers: {},
    extraReducers(reducer) {
        reducer
            .addCase(getAllUsers.pending, (state) => {
                const isFulfilled = state;
                isFulfilled.status = 'Pending';
            })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                const isFulfilled = state;
                isFulfilled.status = 'Fulfilled';
                isFulfilled.allUsers = action.payload.users;
            })
    }
})

export default allUsersSlice.reducer
