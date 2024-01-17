import { Guests } from '@compositions/guest-select/guest-select';
import { Booking } from '@state/bookings/types';
import { findNextFreeDate, getBookingsIntervals } from './bookings-intervals';
import { addDays, formatDate } from './date';

describe('bookings-intervals', () => {
  it('should return a bookingIntervals when the code is "lagoa-preta"', () => {
    const code = 'lagoa-preta';

    const bookings: Booking[] = [
      {
        placeCode: '123',
        checkIn: new Date().getTime(),
        checkOut: new Date().getTime(),
        guests: {} as Guests,
      },
      {
        placeCode: code,
        checkIn: new Date().getTime(),
        checkOut: addDays(new Date(), 3).getTime(),
        guests: {} as Guests,
      },
      {
        placeCode: '456',
        checkIn: new Date().getTime(),
        checkOut: new Date().getTime(),
        guests: {} as Guests,
      },
    ];

    const bookingIntervals: Interval[] = getBookingsIntervals(code, bookings);

    expect(bookingIntervals).toHaveLength(1);
    expect(bookingIntervals[0].end).toEqual(new Date(bookings[1].checkOut));
  });

  it('should prevent intervals overlap', () => {
    const code = 'lagoa-preta';

    function day(value: number) {
      return addDays(new Date(), value);
    }

    const bookings: Booking[] = [
      {
        placeCode: code,
        checkIn: day(2).getTime(),
        checkOut: day(4).getTime(),
        guests: {} as Guests,
      },
      {
        placeCode: code,
        checkIn: day(3).getTime(),
        checkOut: day(8).getTime(),
        guests: {} as Guests,
      },
      {
        placeCode: code,
        checkIn: day(5).getTime(),
        checkOut: day(10).getTime(),
        guests: {} as Guests,
      },
    ];

    const mappedBookings = bookings.map(item => ({
      ...item,
      checkIn: new Date(item.checkIn),
      checkOut: new Date(item.checkOut),
    }));

    const bookingIntervals: Interval[] = getBookingsIntervals(code, bookings);

    expect(bookingIntervals).toHaveLength(1);
    expect(bookingIntervals[0].start).toEqual(
      new Date(mappedBookings[0].checkIn),
    );
    expect(bookingIntervals[0].end).toEqual(
      new Date(mappedBookings[2].checkOut),
    );
  });

  it('should find a next free date in the intervals', () => {
    const checkIn = new Date();

    const intervals = [
      { start: addDays(new Date(), 5), end: addDays(new Date(), 10) },
      { start: addDays(new Date(), 15), end: addDays(new Date(), 16) },
    ];

    const nextFreeDay = findNextFreeDate(checkIn, intervals);

    const formattedNextFreeDay = formatDate(nextFreeDay as Date);
    const formattedExpectedDay = formatDate(addDays(new Date(), 5 - 1));

    expect(formattedNextFreeDay).toEqual(formattedExpectedDay);
  });
});
