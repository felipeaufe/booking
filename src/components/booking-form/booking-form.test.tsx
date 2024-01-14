/* eslint-disable @typescript-eslint/no-explicit-any */
import { fireEvent, render,screen } from "@testing-library/react";
import { BookingForm } from "./booking-form";

const today = new Date();

jest.mock("@elements/button-date-picker/button-date-picker", () => ({
  ButtonDatePicker: ({ onChange, children, ...rest}: any) => (
    <div {...rest} onClick={() => onChange(today)}>{children}</div>
  )
}))

describe('booking-form', () => {
  const onSubmit = jest.fn();

  it('should return a booking data on submit', async () => {
    render(<BookingForm onSubmit={onSubmit} />);
    

    const buttonCheckIn = screen.getByText('Check-in');
    const buttonCheckOut = screen.getByText('Checkout');
    const inputAdults = screen.getAllByTestId('increase')[0];
    const inputPets = screen.getAllByTestId('increase')[2];
    const buttonSubmit = screen.getByText('Reserve');

    fireEvent.click(buttonCheckIn);
    fireEvent.click(buttonCheckOut);
    fireEvent.click(inputAdults);
    fireEvent.click(inputPets);

    fireEvent.click(buttonSubmit);

    expect(onSubmit).toHaveBeenCalledWith({
      checkIn: today,
      checkOut: today,
      guests: {
        adults: 1,
        children: 0,
        pets: 1
      }
    });
  })
})