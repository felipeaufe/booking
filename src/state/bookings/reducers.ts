import { PayloadAction } from "@reduxjs/toolkit";
import { Booking, BookingState, STORE_BOOKINGS } from "./types";
import { store } from "@utils/store";
import { WritableDraft } from "src/types";

export const reducers = {
  storeUpdating: (state: WritableDraft<BookingState>) => {
    state.loading = true;
    state.error = false;
    state.success = false;
  },
  storeSuccess: (state: WritableDraft<BookingState>, action: PayloadAction<Booking>) => {
    const bookings = store.get(STORE_BOOKINGS) as Booking[] || [];
    
    bookings.push(action.payload);
    store.set(STORE_BOOKINGS, bookings);

    state.data = bookings;
    state.loading = false;
    state.error = false;
    state.success = true;
  },
  storeFailure: (state: WritableDraft<BookingState>) => {
    const bookings = store.get(STORE_BOOKINGS) as Booking[] || [];

    state.data = bookings;  
    state.loading = false;
    state.error = true;
    state.success = false;
  },
}