import "@test-config/mocks/react-router-dom";

import { places } from "@test-config/mock-data/places";
import { render, screen } from "@testing-library/react";

import { CardPlace } from "./card-place";

describe("card-place", () => {
  const place = places[0];

  it("should render card place", () => {
    render(<CardPlace place={place} />);

    expect(screen.getByText(place.name)).toBeInTheDocument();
    expect(screen.getByText(place.rate)).toBeInTheDocument();
    expect(
      screen.getByText(`${place.state} - ${place.country}`),
    ).toBeInTheDocument();
  });
});
