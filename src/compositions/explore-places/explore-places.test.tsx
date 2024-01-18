import "@test-config/mocks/react-router-dom";

import { act } from "react-dom/test-utils";

import { places } from "@test-config/mock-data/places";
import { renderRedux } from "@test-config/test-utils/render";
import { screen } from "@testing-library/react";

import { initialState } from "@state/places";

import { ExplorePlaces } from "./explore-places";

describe("explore-place", () => {
  it("should render with two places", async () => {
    await act(async () => {
      renderRedux(<ExplorePlaces />, {
        places: { ...initialState, data: places },
      });
    });

    expect(screen.getByText("Explore Place")).toBeInTheDocument();
    expect(screen.getByText(places[0].name)).toBeInTheDocument();
    expect(screen.getByText(places[1].name)).toBeInTheDocument();
  });

  it("should ignore component if no places", async () => {
    await act(async () => {
      renderRedux(<ExplorePlaces />, { places: initialState });
    });

    expect(screen.queryByText("Explore Place")).not.toBeInTheDocument();
  });
});
