import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiInstance from "../config/axios";

export const postOrder = createAsyncThunk(
  "order/postOrder",
  async (order, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await apiInstance.post("order-v2/store-order-info", {
        orderInfo: order,
      });
      return fulfillWithValue(response.data);
    } catch (error) {
      console.log(error, "error from upper slice");
      return rejectWithValue(error.response.data);
    }
  }
);

export const storeAddressAndSendOtp2 = createAsyncThunk(
  "order/storeAddressAndSendOtp2",
  async (params, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { orderId, address } = params;
      const response = await apiInstance.post("order-v2/validate-otp1", {
        orderId,
        address,
      });
      return fulfillWithValue(response.data);
    } catch (error) {
      console.log(error, "error from upper slice");
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  orderDetails: {},
  isLoading: false,
  message: "",
  error: null,
  orderId: null,
  isOpt1Validate: false,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  extraReducers: (builder) => {
    // Post Order and Get OIP 1
    builder.addCase(postOrder.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postOrder.fulfilled, (state, action) => {
      state.isLoading = false;
      state.orderId = action.payload.orderId;
      state.message = action.payload.message;
    });
    builder.addCase(postOrder.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // Validate OTP 1
    builder.addCase(storeAddressAndSendOtp2.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(storeAddressAndSendOtp2.fulfilled, (state, action) => {
      state.isLoading = false;
      state.message = action.payload.message;
    });
    builder.addCase(storeAddressAndSendOtp2.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
  reducers: {
    orderInfo: (state, action) => {
      state.orderDetails = action.payload;
    },
  },
});

export const { orderInfo } = orderSlice.actions;
export default orderSlice.reducer;

//   extraReducers: {
//     [postOrder.pending]: (state) => {
//       state.isLoading = true;
//     },
//     [postOrder.fulfilled]: (state, action) => {
//       state.isLoading = false;
//       state.orderDetails = action.payload;
//       state.message = "Order placed successfully";
//     },
//     [postOrder.rejected]: (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
