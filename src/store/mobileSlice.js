import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  ticket: null,
  isLoading: false,
  error: null,
  tickets: "",
  ticketsNumber: 1,
};

export const airTicketNosSlice = createSlice({
  name: "ticketNos",
  initialState,

  reducers: {
    ticketUpdate: (state, action) => {
      state.ticketsNumber += action.payload.number;
    },
  },
});

export const { ticketUpdate } = airTicketNosSlice.actions;
export default airTicketNosSlice.reducer;
