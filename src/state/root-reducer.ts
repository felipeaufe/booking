import { reducer as bookingsReducer } from "./bookings";
import { reducer as placesReducer } from "./places";

export const rootReducer = {
  places: placesReducer,
  bookings: bookingsReducer,
};
