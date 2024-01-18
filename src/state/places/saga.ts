import { placesService } from "@services/places-service";
import { call, put, takeEvery } from "redux-saga/effects";

import { store } from "@utils/store";

import { fetchFailure, fetchSuccess } from ".";
import { Place, STORE_PLACES } from "./types";

export const placesActions = {
  FETCH_REQUEST: "@places/FETCH_REQUEST",
};

function* places() {
  try {
    let response: Place[] = store.get(STORE_PLACES) as Place[];

    if (!response) {
      response = yield call(placesService.get);
      store.set(STORE_PLACES, response);
    }

    yield put(fetchSuccess(response));
  } catch (e) {
    yield put(fetchFailure());
  }
}

export function* saga() {
  yield takeEvery(placesActions.FETCH_REQUEST, places);
}
