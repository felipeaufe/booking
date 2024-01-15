import { render, screen } from "@testing-library/react";
import { MyReservations } from "./my-reservations";

describe('my-reservations', () => {
  it('should render MyReservations', () => {
    render(<MyReservations />)
    
    expect(screen.getByText("My Reservations")).toBeInTheDocument();
  })
})