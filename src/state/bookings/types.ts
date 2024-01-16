import { Guests } from "@components/guest-select/guest-select";

export interface Booking {
  id?: string;
  placeCode: string;
  guests: Guests;
  checkIn: number;
  checkOut: number;
}

export interface BookingState {
  readonly data: Booking[];
}

export const STORE_BOOKINGS = 'bookings';

export const bookingsEvents = {
  STORE_STATUS: "@event_Booking/STORE_STATUS",
  UPDATE_STATUS: "@event_Booking/UPDATE_STATUS",
  FETCH_STATUS: "@event_Booking/FETCH_STATUS",
  DELETE_STATUS: "@event_Booking/DELETE_STATUS",
}
