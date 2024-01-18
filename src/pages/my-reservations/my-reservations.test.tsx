/* eslint-disable @typescript-eslint/no-explicit-any */
import "@test-config/mocks/use-navigate";

import { useNavigate } from "react-router-dom";

import { bookings } from "@test-config/mock-data/bookings";
import { renderRedux } from "@test-config/test-utils/render";
import { screen } from "@testing-library/react";

import { initialState } from "@state/bookings";
import { useSelector } from "@state/store";

import { MyReservations } from "./my-reservations";

jest.mock("@state/store");

jest.mock("@compositions/card-booking/card-booking", () => ({
  CardBooking: ({ booking }: any) => <div>{booking.id}</div>,
}));

describe("my-reservations", () => {
  it("should render MyReservations bookings", () => {
    (useSelector as jest.Mock).mockReturnValue(bookings);

    renderRedux(<MyReservations />, {
      bookings: { ...initialState, data: bookings },
    });

    expect(screen.getByText("My Reservations")).toBeInTheDocument();
    expect(screen.getByText(bookings[0].id as string)).toBeInTheDocument();
    expect(screen.getByText(bookings[0].id as string)).toBeInTheDocument();
  });

  it("should render empty reservation if bookings is empty", () => {
    const navigateSpy = jest.fn();

    (useSelector as jest.Mock).mockReturnValue([]);
    (useNavigate as jest.Mock).mockReturnValue(navigateSpy);

    renderRedux(<MyReservations />, {
      bookings: { ...initialState, data: [] },
    });

    const button = screen.getByText("Start The Search");

    expect(screen.getByText("My Reservations")).toBeInTheDocument();
    expect(
      screen.getByText("There are no reservations registered yet!"),
    ).toBeInTheDocument();

    button.click();
    expect(navigateSpy).toHaveBeenCalledTimes(1);
  });
});
