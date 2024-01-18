import "@test-config/mocks/use-navigate";

import { useNavigate } from "react-router-dom";

import { renderRedux } from "@test-config/test-utils/render";
import { screen } from "@testing-library/react";

import eventBus from "@utils/event-bus";

import { Booking, bookingsEvents } from "@state/bookings/types";

import { PlaceBooking } from "./place-booking";

jest.useFakeTimers();
jest.mock("@utils/scroll-to-top");

describe("place-booking", () => {
  const placeCode = "lagoa-preta";

  it("should render correctly", () => {
    renderRedux(<PlaceBooking code={placeCode} />, {
      bookings: { data: [] as Booking[] },
    });

    expect(screen.getByText("Check-in")).toBeInTheDocument();
    expect(screen.getByText("Checkout")).toBeInTheDocument();
    expect(screen.getByText("Reserve")).toBeInTheDocument();
  });

  it("should call navigate when status success is true", () => {
    const navigateSpy = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigateSpy);

    renderRedux(<PlaceBooking code={placeCode} />, {
      bookings: { data: [] as Booking[] },
    });

    eventBus.dispatch(bookingsEvents.STORE_STATUS, { success: true });

    jest.runAllTimers();
    expect(navigateSpy).toHaveBeenCalledWith("/my-reservations");
  });
});
