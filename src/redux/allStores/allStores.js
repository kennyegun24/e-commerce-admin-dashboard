import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllStores = createAsyncThunk('getUser/getAllStores', async (TOKEN) => {
    const BASE_URL = 'http://localhost:4000/api/v1'
    const userRequest = axios.create({
        baseURL: BASE_URL,
        headers: { 'Authorization': `Bearer ${TOKEN}` }
    })
    const get = await userRequest.get('admin/all_stores')
    delete get.headers
    return get.data
})

const allStoresSlice = createSlice({
    name: 'allStores',
    initialState: {
        allStores: [],
        status: null
    },
    reducers: {},
    extraReducers(reducer) {
        reducer
            .addCase(getAllStores.pending, (state) => {
                const isFulfilled = state;
                isFulfilled.status = 'Pending';
            })
            .addCase(getAllStores.fulfilled, (state, action) => {
                const isFulfilled = state;
                isFulfilled.status = 'Fulfilled';
                isFulfilled.allStores = action.payload.stores;
            })
    }
})

export default allStoresSlice.reducer
