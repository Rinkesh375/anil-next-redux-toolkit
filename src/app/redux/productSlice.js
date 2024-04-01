import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductData = createAsyncThunk(
  "getProductData",
  async () => {
    const res = await axios.get(`https://fakestoreapi.com/products`);
    return res.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    productLoading: false,
    productError: false,
    productArray: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductData.fulfilled, (state, action) => {
        state.productArray = action.payload;
        state.productLoading = false;
        state.productError = false;
      })
      .addCase(getProductData.pending, (state) => {
        state.productArray = [];
        state.productLoading = true;
        state.productError = false;
      })
      .addCase(getProductData.rejected, (state, action) => {
        state.productArray = [];
        state.productLoading = false;
        state.productError = action.error.message;
      });
  }
});

export default productSlice.reducer;
