import { reducer as placesReducer } from './places';
import { reducer as bookingsReducer } from './bookings';

export const rootReducer = {
  places: placesReducer,
  bookings: bookingsReducer,
};
