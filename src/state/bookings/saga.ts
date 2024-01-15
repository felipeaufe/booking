import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { bookingsService } from "@services/bookings-service";
import { Booking, STORE_BOOKINGS } from "./types";
import { fetchFailure, fetchSuccess, storeFailure, storeSuccess, storeUpdating } from ".";
import { PayloadAction } from '@reduxjs/toolkit';
import { store } from '@utils/store';

export const bookingsActions = {
  STORE_REQUEST: '@bookings/STORE_REQUEST',
  FETCH_REQUEST: '@bookings/FETCH_REQUEST',
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


export function* saga() {
  yield all([
    takeEvery(bookingsActions.STORE_REQUEST, storeBookings),
    takeLatest(bookingsActions.FETCH_REQUEST, fetchBookings)
  ]);
}