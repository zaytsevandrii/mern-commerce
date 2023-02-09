import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchProducts = createAsyncThunk("products,fetchProducts", async () => {
    const { data } = await axios.get("http://localhost:5000/api/products")
    console.log(data)
})

const initialState = {
  products: {
      items: [],
      status: "loading",
  },
  
}


export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchProducts.pending]: (state) => {
            state.products.items = []
            state.products.status = "loading"
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.products.items = action.payload
            state.products.status = "loaded"
        },
        [fetchProducts.rejected]: (state) => {
            state.products.items = []
            state.products.status = "rejected"
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = productSlice.actions

export default productSlice.reducer
