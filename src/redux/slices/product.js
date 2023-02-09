import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchProducts = createAsyncThunk("products,fetchProducts", async (_, { rejectWithValue }) => {
    try {
        const { data } = await axios.get("http://localhost:5000/api/products")
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

export const fetchProduct = createAsyncThunk("products,fetchProducts", async (_, { rejectWithValue }) => {
    try {
        const { data } = await axios.get("http://localhost:5000/api/products")
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

const initialState = {
    products: [],
    status: "loading",
    error: null,
    
}

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchProducts.pending]: (state) => {
            state.products = []
            state.status = "loading"
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.products = action.payload
            state.status = "loaded"
        },
        [fetchProducts.rejected]: (state, action, error) => {
            state.error = action.payload
            state.status = "rejected"
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = productSlice.actions

export default productSlice.reducer
