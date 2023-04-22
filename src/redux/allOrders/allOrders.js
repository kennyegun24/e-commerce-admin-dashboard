import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllOrders = createAsyncThunk('getUser/getAllOrders', async (TOKEN) => {
    const BASE_URL = 'http://localhost:3000/api/v1'
    const userRequest = axios.create({
        baseURL: BASE_URL,
        headers: { 'Authorization': `Bearer ${TOKEN}` }
    })
    const get = await userRequest.get('admin/all_orders')
    delete get.headers
    return get.data
})

const allOrdersSlice = createSlice({
    name: 'allUsers',
    initialState: {
        allOrders: [],
        status: null
    },
    reducers: {},
    extraReducers(reducer) {
        reducer
            .addCase(getAllOrders.pending, (state) => {
                const isFulfilled = state;
                isFulfilled.status = 'Pending';
            })
            .addCase(getAllOrders.fulfilled, (state, action) => {
                const isFulfilled = state;
                isFulfilled.status = 'Fulfilled';
                isFulfilled.allOrders = action.payload.orders;
            })
    }
})

export default allOrdersSlice.reducer
