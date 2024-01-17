import { PayloadAction } from '@reduxjs/toolkit';
import { Booking, BookingState, STORE_BOOKINGS, bookingsEvents } from './types';
import { store } from '@utils/store';
import { WritableDraft } from 'src/types';
import eventBus from '@utils/event-bus';

export const reducers = {
  /**!SECTION STORE */

  storeUpdating: () => {
    eventBus.dispatch(bookingsEvents.STORE_STATUS, {
      loading: true,
      success: false,
      error: false,
    });
  },

  storeSuccess(
    state: WritableDraft<BookingState>,
    action: PayloadAction<Booking>,
  ) {
    const bookings = (store.get(STORE_BOOKINGS) as Booking[]) || [];

    bookings.push(action.payload);
    store.set(STORE_BOOKINGS, bookings);

    state.data = bookings;
    eventBus.dispatch(bookingsEvents.STORE_STATUS, {
      loading: false,
      success: true,
      error: false,
    });
  },

  storeFailure(state: WritableDraft<BookingState>) {
    const bookings = (store.get(STORE_BOOKINGS) as Booking[]) || [];

    state.data = bookings;
    eventBus.dispatch(bookingsEvents.STORE_STATUS, {
      loading: false,
      success: false,
      error: true,
    });
  },

  /**!SECTION UPDATE */
  updateUpdating() {
    eventBus.dispatch(bookingsEvents.UPDATE_STATUS, {
      loading: true,
      success: false,
      error: false,
    });
  },

  updateSuccess(
    state: WritableDraft<BookingState>,
    action: PayloadAction<Booking>,
  ) {
    const bookings = (store.get(STORE_BOOKINGS) as Booking[]) || [];

    const index = bookings.findIndex(item => item.id === action.payload.id);

    if (index !== -1) {
      bookings[index] = action.payload;
    } else {
      bookings.push(action.payload);
    }

    store.set(STORE_BOOKINGS, bookings);

    state.data = bookings;
    eventBus.dispatch(bookingsEvents.UPDATE_STATUS, {
      loading: false,
      success: true,
      error: false,
    });
  },
  updateFailure(state: WritableDraft<BookingState>) {
    const bookings = (store.get(STORE_BOOKINGS) as Booking[]) || [];

    state.data = bookings;
    eventBus.dispatch(bookingsEvents.UPDATE_STATUS, {
      loading: false,
      success: false,
      error: true,
    });
  },

  /**!SECTION FETCH */
  fetchSuccess(
    state: WritableDraft<BookingState>,
    action: PayloadAction<Booking[]>,
  ) {
    state.data = action.payload;
    eventBus.dispatch(bookingsEvents.FETCH_STATUS, {
      loading: false,
      success: true,
      error: false,
    });
  },
  fetchFailure(state: WritableDraft<BookingState>) {
    state.data = [];
    eventBus.dispatch(bookingsEvents.FETCH_STATUS, {
      loading: false,
      success: false,
      error: true,
    });
  },

  /**!SECTION DELETE */
  deleteUpdating() {
    eventBus.dispatch(bookingsEvents.UPDATE_STATUS, {
      loading: true,
      success: false,
      error: false,
    });
  },

  deleteSuccess() {
    eventBus.dispatch(bookingsEvents.UPDATE_STATUS, {
      loading: false,
      success: true,
      error: false,
    });
  },

  deleteFailure() {
    eventBus.dispatch(bookingsEvents.UPDATE_STATUS, {
      loading: false,
      success: false,
      error: true,
    });
  },
};
