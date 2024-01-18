import { places } from "@test-config/mock-data/places";
import { renderRedux } from "@test-config/test-utils/render";
import { screen } from "@testing-library/react";

import { initialState } from "@state/bookings";
import { Booking } from "@state/bookings/types";
import { useSelector } from "@state/store";

import { CardBooking } from "./card-booking";

jest.mock("@state/store");

describe("card-booking", () => {
  (useSelector as jest.Mock).mockReturnValue(places);

  it("should render CardBooking with success", () => {
    const booking: Booking = {
      id: "1123123",
      placeCode: "lagoa-preta",
      checkIn: new Date().getTime(),
      checkOut: new Date().getTime(),
      guests: {
        adults: 1,
        children: 0,
        pets: 0,
      },
    };

    renderRedux(<CardBooking booking={booking} />, { bookings: initialState });

    const buttonChange = screen.getByTestId("change");
    const buttonCancel = screen.getByTestId("cancel");
    const title = screen.getByText("Lagoa Preta");
    const id = screen.getByText(booking.id as string);

    expect(buttonChange).toBeInTheDocument();
    expect(buttonCancel).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(id).toBeInTheDocument();
  });
});
