
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Booking, BookingState, STORE_BOOKINGS } from "./types";
import { store } from "@utils/store";

export const initialState: BookingState = {
  data:  store.get(STORE_BOOKINGS) as Booking[] || [],
  loading: false,
  error: false,
  success: false
};

const slice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    storeUpdating: (state) => {
      state.loading = true;
      state.error = false;
      state.success = false;
    },
    storeSuccess: (state, action: PayloadAction<Booking>) => {
      const bookings = store.get(STORE_BOOKINGS) as Booking[] || [];
      
      bookings.push(action.payload);
      store.set(STORE_BOOKINGS, bookings);

      state.data = bookings;
      state.loading = false;
      state.error = false;
      state.success = true;
    },
    storeFailure: (state) => {
      const bookings = store.get(STORE_BOOKINGS) as Booking[] || [];

      state.data = bookings;  
      state.loading = false;
      state.error = true;
      state.success = false;
    },
  },
})

export const { storeUpdating, storeSuccess, storeFailure } = slice.actions;
export const { reducer } = slice;