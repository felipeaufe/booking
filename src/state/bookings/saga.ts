import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { bookingsService } from "@services/bookings-service";
import { Booking, STORE_BOOKINGS } from "./types";
import { deleteFailure, deleteUpdating, fetchFailure, fetchSuccess, storeFailure, storeSuccess, storeUpdating } from ".";
import { PayloadAction } from '@reduxjs/toolkit';
import { store } from '@utils/store';

export const bookingsActions = {
  STORE_REQUEST: '@bookings/STORE_REQUEST',
  FETCH_REQUEST: '@bookings/FETCH_REQUEST',
  DELETE_REQUEST: '@bookings/DELETE_REQUEST',
}

function* storeBookings(action: PayloadAction<Booking>) {
  try {
    yield put(storeUpdating());
    const bookings: Booking = yield call(bookingsService.post, action.payload);
    yield put(storeSuccess(bookings));
  } catch (e) {
    yield put(storeFailure());
  }
}

function* fetchBookings() {
  try {
     let bookings: Booking[] = store.get(STORE_BOOKINGS) as Booking[];

     if(!bookings) {
       bookings = yield call(bookingsService.get);
       store.set(STORE_BOOKINGS, bookings);
     }

     yield put(fetchSuccess(bookings));
  } catch (e) {
     yield put(fetchFailure());
  }
}

function* deleteBookings(action: PayloadAction<string>) {
  try {
    yield put(deleteUpdating());
    const response: boolean = yield call(bookingsService.delete, action.payload);

    if(response) {
      let bookings = store.get(STORE_BOOKINGS) as Booking[] || [];
      
      bookings = bookings.filter(booking => booking.id !== action.payload);
      
      store.set(STORE_BOOKINGS, bookings);

      yield put(fetchSuccess(bookings));
    }
  } catch (e) {
     yield put(deleteFailure());
  }
}


export function* saga() {
  yield all([
    takeEvery(bookingsActions.STORE_REQUEST, storeBookings),
    takeLatest(bookingsActions.FETCH_REQUEST, fetchBookings),
    takeLatest(bookingsActions.DELETE_REQUEST, deleteBookings)
  ]);
}