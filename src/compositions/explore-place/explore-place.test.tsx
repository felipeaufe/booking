import '../../test-config/mocks/swiper';

import { placeService } from "@services/places-service";
import { render, screen } from "@testing-library/react";
import { places } from "@test-config/mock-data/places";
import { ExplorePlace } from ".";
import { act } from 'react-dom/test-utils';


describe('explore-place', () => {

  const mockGet = jest.spyOn(placeService, 'get');
  mockGet.mockResolvedValue(places);

  it('should render with two places', async () => {
    mockGet.mockResolvedValue(places);

    await act(async () => {
      render(<ExplorePlace />)
    })

    expect(screen.getByText("Explore Place")).toBeInTheDocument();
    expect(screen.getByText(places[0].name)).toBeInTheDocument();
    expect(screen.getByText(places[1].name)).toBeInTheDocument();
  })

  it('should ignore component if no places', async () => {
    mockGet.mockResolvedValue([]);

    await act(async () => {
      render(<ExplorePlace />)
    })

    expect(screen.queryByText("Explore Place")).not.toBeInTheDocument();
  })
})