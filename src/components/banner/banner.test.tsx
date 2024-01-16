import { render } from "@testing-library/react";
import { Banner } from "./banner";

describe('banner', () => {

  it('should render Banner', () => {
    const { container } = render(<Banner />);
    
    expect(container).toBeInTheDocument();
  })
})