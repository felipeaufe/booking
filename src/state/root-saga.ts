import { all } from "redux-saga/effects";

import { saga as BookingsSaga } from "./bookings/saga";
import { saga as placesSaga } from "./places/saga";

export function* rootSaga(): Generator {
  return yield all([placesSaga(), BookingsSaga()]);
}
