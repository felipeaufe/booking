
import '@test-config/mocks/swiper';
import "@test-config/mocks/use-navigate";

import Home from "./home";
import { renderRedux } from '@test-config/test-utils/render';
import { initialState } from '@state/places';

describe("Home", () => {
  it('should render Home', () => {
    const { container } = renderRedux(<Home />, { places: initialState });
    
    expect(container).toBeDefined();
  })
});