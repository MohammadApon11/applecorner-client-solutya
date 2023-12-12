import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiInstance from "../config/axios";

export const verifyLogin = createAsyncThunk(
  "admin/verifyLogin",
  async (keys, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await apiInstance.post("admin/login", keys);
      return fulfillWithValue(response.data);
    } catch (error) {
      console.log(error, "error from upper slice");
      return rejectWithValue(error.response.data);
    }
  }
);

export const getAllOrders = createAsyncThunk(
  "admin/getAllOrders",
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await apiInstance.get("orders/all-orders");
      return fulfillWithValue(response.data);
    } catch (error) {
      console.log(error, "error from upper slice");
      return rejectWithValue(error.response.data);
    }
  }
);

export const getUserInfo = createAsyncThunk(
  "admin/getUserInfo",
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await apiInstance.get("admin/users");
      return fulfillWithValue(response.data);
    } catch (error) {
      console.log(error, "error from upper slice");
      return rejectWithValue(error.response.data);
    }
  }
);

export const getProduct = createAsyncThunk(
  "admin/getProduct",
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await apiInstance.get("product/get");
      return fulfillWithValue(response.data);
    } catch (error) {
      console.log(error, "error from upper slice");
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  isAdminLogin: false,
  message: null,
  orders: [],
  isLoading: false,
  users: [],
  product: {},
  isProductLoading: false,
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  extraReducers: (builder) => {
    // Verify Login
    builder.addCase(verifyLogin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(verifyLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAdminLogin = action.payload.isAdminLoginValidate;
      state.message = action.payload.message;
    });
    builder.addCase(verifyLogin.rejected, (state, action) => {
      state.isAdminLogin = false;
      state.error = action.payload;
    });

    // Get All Orders
    builder.addCase(getAllOrders.pending, (state) => {
      state.isProductLoading = true;
    });
    builder.addCase(getAllOrders.fulfilled, (state, action) => {
      state.isProductLoading = false;
      state.orders = action.payload.orders;
    });
    builder.addCase(getAllOrders.rejected, (state, action) => {
      state.error = action.payload;
      state.isProductLoading = false;
    });

    // Get All Orders
    builder.addCase(getUserInfo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload.users;
    });
    builder.addCase(getUserInfo.rejected, (state, action) => {
      state.error = action.payload;
    });

    // Get Product
    builder.addCase(getProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log(action.payload.product, "action.payload.product");
      state.product = action.payload.product;
    });
    builder.addCase(getProduct.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export default adminSlice.reducer;
