import { Booking } from "@state/bookings/types";
import { subDays } from "./date";

interface Interval {
  start: Date
  end: Date
}

/**
 * Retrieves the intervals of bookings for a specific place.
 *
 * @param {string} placeCode - The code of the place.
 * @param {Booking[]} bookings - The array of bookings.
 * @return {Interval[]} An array of intervals representing the bookings.
 */
export function getBookingsIntervals (placeCode: string, bookings: Booking[]): Interval[] {
  if (bookings.length > 0) {
    const intervals = bookings
      .filter(booking => booking.placeCode === placeCode)
      .map(booking => {
        const start = new Date(booking.checkIn);
        const end = new Date(booking.checkOut);
        return {
          start,
          end
        }
      })
      .sort((a, b) => a.start.getTime() - b.start.getTime());

    if(intervals.length) {
      return resolveDateOverlaps(intervals)
    }
  }
  return [];
}

/**
 * Finds the next free date for booking based on the provided code, check-in date, and bookings.
 *
 * @param {string} code - The code used for booking.
 * @param {Date} checkIn - The check-in date for the booking.
 * @param {Booking[]} bookings - An array of existing bookings.
 * @return {Date | null} - The next free date for booking, or null if there are no free dates.
 */
export function findNextFreeDate(checkIn: Date, intervals: Interval[]): Date | null {

  if(!intervals.length) {
    return null;
  }

  for(const interval of intervals) {
    if(interval.start > checkIn) {
      return subDays(interval.start, 1);
    }
  }

  return null;
}

/**
 * Resolves overlapping intervals in a given array of intervals.
 *
 * @param {Interval[]} intervals - An array of intervals to be resolved.
 * @return {Interval[]} - An array of resolved intervals.
 */
function resolveDateOverlaps(intervals: Interval[]) {
  const resolvedIntervals = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const currentInterval = intervals[i];
    const previousInterval = resolvedIntervals[resolvedIntervals.length - 1];

    if (currentInterval.start.getTime() <= previousInterval.end.getTime()) {
      previousInterval.end = new Date(
        Math.max(previousInterval.end.getTime(), currentInterval.end.getTime())
      );
    } else {
      resolvedIntervals.push(currentInterval);
    }
  }

  return resolvedIntervals;
}