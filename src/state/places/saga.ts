import { call, put, takeEvery } from 'redux-saga/effects'
import { placeService } from '@services/places-service'; 
import { fetchFailure, fetchSuccess } from '.';
import { Place } from './types';

export const placesActions = {
  FETCH_REQUEST: '@places/FETCH_REQUEST',
}

function* places() {
   try {
      const places: Place[] = yield call(placeService.get);
      yield put(fetchSuccess(places));
   } catch (e) {
      yield put(fetchFailure());
   }
}

export function* saga() {
  yield takeEvery(placesActions.FETCH_REQUEST, places);
}