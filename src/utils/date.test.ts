import { addDays, formatDate, subDays } from "./date";

describe("date", () => {
  function getDaysDifferenceInDates(firstDate: Date, secondDate: Date) {
    const differenceInTime = secondDate.getTime() - firstDate.getTime();
    const differenceInDays = differenceInTime / (24 * 60 * 60 * 1000);
    return differenceInDays;
  }

  it("should return a new date with 2 days less", () => {
    const date = new Date();
    const subtracted = subDays(date, 2);

    expect(getDaysDifferenceInDates(date, subtracted)).toBe(-2);
  });

  it("should return a new date with 2 more days", () => {
    const date = new Date();
    const added = addDays(date, 2);

    expect(getDaysDifferenceInDates(date, added)).toBe(2);
  });

  it("should return a new date with the sabe days of the original sub first", () => {
    const date = new Date();
    const subtracted = subDays(date, 2);
    const added = addDays(subtracted, 2);

    expect(getDaysDifferenceInDates(date, added)).toBe(0);
  });

  it("should return a new date with the sabe days of the original add first", () => {
    const date = new Date();
    const added = addDays(date, 2);
    const subtracted = subDays(added, 2);

    expect(getDaysDifferenceInDates(date, subtracted)).toBe(0);
  });

  it("should return a formatted date", () => {
    const date = new Date();
    const formatted = formatDate(date);

    expect(formatted).toEqual(
      `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
    );
  });
});
