import { call, put, takeEvery } from 'redux-saga/effects';
import { placesService } from '@services/places-service';
import { fetchFailure, fetchSuccess } from '.';
import { Place, STORE_PLACES } from './types';
import { store } from '@utils/store';

export const placesActions = {
  FETCH_REQUEST: '@places/FETCH_REQUEST',
};

function* places() {
  try {
    let places: Place[] = store.get(STORE_PLACES) as Place[];

    if (!places) {
      places = yield call(placesService.get);
      store.set(STORE_PLACES, places);
    }

    yield put(fetchSuccess(places));
  } catch (e) {
    yield put(fetchFailure());
  }
}

export function* saga() {
  yield takeEvery(placesActions.FETCH_REQUEST, places);
}
