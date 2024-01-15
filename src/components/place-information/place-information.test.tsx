import { render, screen } from "@testing-library/react";
import { PlaceInformation } from "./place-information";
import { places } from "@test-config/mock-data/places";

describe('place-information', () => {

  it('should render', () => {
    render(<PlaceInformation place={places[0]} />)
    
    expect(screen.getByText("Place " + places[0].name)).toBeInTheDocument();
    expect(screen.getByText(places[0].state + " - " + places[0].country)).toBeInTheDocument();
  })
  
});