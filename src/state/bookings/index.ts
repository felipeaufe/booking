
import { createSlice } from "@reduxjs/toolkit";
import { Booking, BookingState, STORE_BOOKINGS } from "./types";
import { store } from "@utils/store";
import { reducers } from "./reducers";

export const initialState: BookingState = {
  data:  store.get(STORE_BOOKINGS) as Booking[] || [],
  loading: false,
  error: false,
  success: false
};

const slice = createSlice({
  name: 'bookings',
  initialState,
  reducers,
})

export const { storeUpdating, storeSuccess, storeFailure, fetchFailure, fetchSuccess, deleteUpdating, deleteFailure } = slice.actions;
export const { reducer } = slice;