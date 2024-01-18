import { addDays } from "@utils/date";

import { Booking } from "@state/bookings/types";

export const bookings: Booking[] = [
  {
    id: "1",
    placeCode: "1",
    checkIn: new Date().getTime(),
    checkOut: addDays(new Date(), 2).getTime(),
    guests: {
      adults: 2,
      children: 0,
      pets: 0,
    },
  },
  {
    id: "2",
    placeCode: "2",
    checkIn: new Date().getTime(),
    checkOut: addDays(new Date(), 2).getTime(),
    guests: {
      adults: 2,
      children: 0,
      pets: 0,
    },
  },
];
