import { createSlice } from "@reduxjs/toolkit";

import { store } from "@utils/store";

import { reducers } from "./reducers";
import { Booking, BookingState, STORE_BOOKINGS } from "./types";

export const initialState: BookingState = {
  data: (store.get(STORE_BOOKINGS) as Booking[]) || [],
};

const slice = createSlice({
  name: "bookings",
  initialState,
  reducers,
});

export const {
  storeUpdating,
  storeSuccess,
  storeFailure,
  fetchFailure,
  fetchSuccess,
  deleteUpdating,
  deleteFailure,
  updateUpdating,
  updateSuccess,
  updateFailure,
} = slice.actions;

export const { reducer } = slice;
