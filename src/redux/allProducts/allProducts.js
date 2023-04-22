import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk('getUser/getAllProducts', async (TOKEN) => {
    const BASE_URL = 'http://localhost:3000/api/v1'
    const userRequest = axios.create({
        baseURL: BASE_URL,
        headers: { 'Authorization': `Bearer ${TOKEN}` }
    })
    const get = await userRequest.get('admin/all_products')
    delete get.headers
    return get.data
})

export const getAllCategories = createAsyncThunk('getUser/getAllCategories', async (TOKEN) => {
    const BASE_URL = 'http://localhost:3000/api/v1'
    const userRequest = axios.create({
        baseURL: BASE_URL,
        headers: { 'Authorization': `Bearer ${TOKEN}` }
    })
    const get = await userRequest.get('admin/all_categories')
    delete get.headers
    return get.data
})

export const createCategory = createAsyncThunk('create/category', async ({ TOKEN, category }) => {
    const BASE_URL = 'http://localhost:3000/api/v1'
    const userRequest = axios.create({
        baseURL: BASE_URL,
        headers: { 'Authorization': `Bearer ${TOKEN}` }
    })
    console.log(category)
    await userRequest.post('admin/create/category', { category })
})

export const createStore = createAsyncThunk('create/category', async ({ TOKEN, store }) => {
    const BASE_URL = 'http://localhost:3000/api/v1'
    const userRequest = axios.create({
        baseURL: BASE_URL,
        headers: { 'Authorization': `Bearer ${TOKEN}` }
    })
    console.log(store)
    await userRequest.post('admin/create/store', { store })
})

export const createProduct = createAsyncThunk('create/category', async ({ TOKEN, product }) => {
    const BASE_URL = 'http://localhost:3000/api/v1'
    const userRequest = axios.create({
        baseURL: BASE_URL,
        headers: { 'Authorization': `Bearer ${TOKEN}` }
    })
    console.log(product)
    await userRequest.post('admin/create/product', { product })
})

const allProductsSlice = createSlice({
    name: 'allProducts',
    initialState: {
        allProducts: [],
        allCategories: [],
        status: null,
        catStatus: null
    },
    reducers: {},
    extraReducers(reducer) {
        reducer
            .addCase(getAllProducts.pending, (state) => {
                const isFulfilled = state;
                isFulfilled.status = 'Pending';
            })
            .addCase(getAllCategories.pending, (state) => {
                const isFulfilled = state;
                isFulfilled.catStatus = 'Pending';
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                const isFulfilled = state;
                isFulfilled.status = 'Fulfilled';
                isFulfilled.allProducts = action.payload.products;
            })
            .addCase(getAllCategories.fulfilled, (state, action) => {
                const isFulfilled = state;
                isFulfilled.catStatus = 'Fulfilled';
                isFulfilled.allCategories = action.payload.categories;
            })
    }
})

export default allProductsSlice.reducer
