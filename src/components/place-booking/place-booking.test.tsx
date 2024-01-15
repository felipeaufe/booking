import { BookingForm } from "@components/booking-form/booking-form";
import { initialState } from "@state/bookings";
import { renderRedux } from "@test-config/test-utils/render";
import { screen } from "@testing-library/react";

describe('place-booking', () => {

  const placeCode = "lagoa-preta";

  it('should render', () => {
    renderRedux(<BookingForm placeCode={placeCode} />, { bookings: initialState });

    const checkIn = screen.getByText('Check-in');
    const checkout = screen.getByText('Checkout');
    const guests = screen.getByText('Guests');
    const reserve = screen.getByText('Reserve');


    expect(checkIn).toBeInTheDocument();
    expect(checkout).toBeInTheDocument();
    expect(guests).toBeInTheDocument();
    expect(reserve).toBeInTheDocument();
  })
});