import { render, screen } from "@testing-library/react";
import { CardPlace } from ".";
import { places } from "@test-config/mock-data/places";

describe('card-place', () => {

  const place = places[0];
  
  it('should render card place', () => {

    render(<CardPlace place={place} />)

    expect(screen.getByText(place.name)).toBeInTheDocument();
    expect(screen.getByText(place.rate)).toBeInTheDocument();
    expect(screen.getByText(`${place.state} - ${place.country}`)).toBeInTheDocument();
  });

  it('should call callback function on click', () => {

    const callback = jest.fn();

    render(<CardPlace place={place} onClick={callback}/>)

    screen.getByRole('button').click();

    expect(callback).toHaveBeenCalledTimes(1);
  });
})