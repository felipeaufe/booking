import "@test-config/mocks/use-dispatch";
import "@test-config/mocks/swiper";
import "@test-config/mocks/use-navigate";

import { places } from "@test-config/mock-data/places";
import { renderRedux } from "@test-config/test-utils/render";
import { act, screen } from "@testing-library/react";

import { initialState } from "@state/places";
import { useSelector } from "@state/store";

import { Place } from "./place";

jest.mock("@state/store");
jest.mock("@compositions/booking-form/booking-form", () => ({
  BookingForm: () => <div>BookingForm</div>,
}));

describe("place", () => {
  const place = places[0];
  it("should render", () => {
    (useSelector as jest.Mock).mockReturnValue(place);

    act(() => {
      renderRedux(<Place />, { places: { ...initialState, data: places } });
    });

    expect(screen.getByText(`Place ${place.name}`)).toBeInTheDocument();
    expect(
      screen.getByText(`${place.state} - ${place.country}`),
    ).toBeInTheDocument();
  });

  it("should show Page not found if no place founded", () => {
    (useSelector as jest.Mock).mockReturnValue(null);

    act(() => {
      renderRedux(<Place />, { places: initialState });
    });

    expect(screen.getByText("Place not found")).toBeInTheDocument();
  });
});
