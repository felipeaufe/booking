import { render } from "@testing-library/react";
import Home from "./home";

describe("Home", () => {
  it('should render Home', () => {
    const { container } = render(<Home />);
    
    expect(container).toBeDefined();
  })
});