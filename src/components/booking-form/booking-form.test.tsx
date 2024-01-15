/* eslint-disable @typescript-eslint/no-explicit-any */
import "@test-config/mocks/use-dispatch";

import { fireEvent,screen } from "@testing-library/react";
import { BookingForm } from "./booking-form";
import { useDispatch } from "@state/store";
import { renderRedux } from "@test-config/test-utils/render";
import { Booking } from "@state/bookings/types";
import { bookingsActions } from "@state/bookings/saga";

const today = new Date();

jest.mock("@elements/button-date-picker/button-date-picker", () => ({
  ButtonDatePicker: ({ onChange, children, ...rest}: any) => (
    <div {...rest} onClick={() => onChange(today)}>{children}</div>
  )
}))

describe('booking-form', () => {

  const placeCode = "lagoa-preta";

  const dispatchSpy = jest.fn();

  (useDispatch as jest.Mock).mockReturnValue(dispatchSpy);
  

  fit('should return a booking data on submit', async () => {
    renderRedux(<BookingForm placeCode={placeCode} />, {
      bookings: {
        data: [] as Booking[],
        loading: false,
        error: false,
        success: false
      }
    });

    const buttonCheckIn = screen.getByText('Check-in');
    const buttonCheckOut = screen.getByText('Checkout');
    const inputAdults = screen.getByTestId('quantity-adults-increase');
    const inputChildren = screen.getByTestId('quantity-children-increase');
    const inputPets = screen.getByTestId('quantity-pets-increase');
    const buttonSubmit = screen.getByText('Reserve');

    fireEvent.click(buttonCheckIn);
    fireEvent.click(buttonCheckOut);
    fireEvent.click(inputAdults);
    fireEvent.click(inputChildren);
    fireEvent.click(inputPets);

    fireEvent.click(buttonSubmit);

    expect(dispatchSpy).toHaveBeenCalledWith({
      type: bookingsActions.STORE_REQUEST,
      payload: {
        placeCode,
        checkIn: today.getTime(),
        checkOut: today.getTime(),
        guests: {
          adults: 1,
          children: 1,
          pets: 1
        }
      }
    });
  })
})