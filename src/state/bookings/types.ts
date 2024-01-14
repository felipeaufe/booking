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
  readonly loading: boolean;
  readonly error: boolean;
  readonly success: boolean;
}

export const STORE_BOOKINGS = 'bookings';