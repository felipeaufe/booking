import { render, screen } from "@testing-library/react";
import { MenuPrincipal } from "./menu-principal";

describe('menu-principal', () => {
  it('should render MenuPrincipal', () => {
    render(<MenuPrincipal />)
    
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("My Bookings")).toBeInTheDocument();
  })
})