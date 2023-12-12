import { configureStore } from "@reduxjs/toolkit";
import mobileAuth from "./mobileSlice";
import orderSlice from "./orderSlice";
import adminSlice from "./adminSlice";

const store = configureStore({
  reducer: {
    mobile: mobileAuth,
    order: orderSlice,
    admin: adminSlice,
  },
});

export default store;
