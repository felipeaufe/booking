import { render, screen } from "@testing-library/react";
import { CardPlace } from ".";
import { Place } from "@services/places-service";

describe('card-place', () => {

  const place: Place = {
    code: "lagoa-preta",
    name: "Lagoa Preta",
    description: "",
    rate: 4.9,
    images: [
      "01.jpg"
    ],
    state: "Paraná",
    country: "BR"
  }

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