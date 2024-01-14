import { all, call, put, takeEvery } from 'redux-saga/effects'
import { bookingsService } from "@services/bookings-service";
import { Booking } from "./types";
import { storeFailure, storeSuccess, storeUpdating } from ".";
import { PayloadAction } from '@reduxjs/toolkit';

export const bookingsActions = {
  STORE_REQUEST: '@bookings/STORE_REQUEST',
}

function* store(action: PayloadAction<Booking>) {
  try {
    yield put(storeUpdating());
    const bookings: Booking = yield call(bookingsService.set, action.payload);
    yield put(storeSuccess(bookings));
  } catch (e) {
    yield put(storeFailure());
  }
}

export function* saga() {
  yield all([
    takeEvery(bookingsActions.STORE_REQUEST, store)
  ]);
}