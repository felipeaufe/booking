import '@test-config/mocks/swiper';
import { render } from "@testing-library/react";
import Home from ".";

describe("Home", () => {
  it('should render Home', () => {
    const { container } = render(<Home />);
    
    expect(container).toBeDefined();
  })
});