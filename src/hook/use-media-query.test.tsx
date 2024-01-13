import { render, screen } from "@testing-library/react";
import { useViewport } from "./use-media-query";

describe('useMediaQuery', () => {
  
  const MyComp = () => {
    const { isMobile, isDesktop } = useViewport();

    return (
      <>
        {isMobile && <p>Mobile</p>}
        {isDesktop && <p>Desktop</p>}
      </>
    )
  }

  it('should validate is a desktop screen', () => {
    
    global.matchMedia = jest.fn().mockImplementation(query => {
      return {
        matches: false,
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        addListener: jest.fn(),
        removeListener: jest.fn(),
      };
    });

    render(<MyComp />);

    expect(screen.queryByText("Desktop")).toBeInTheDocument();
    expect(screen.queryByText("Mobile")).not.toBeInTheDocument();
  })

  it('should validate is a mobile screen', () => {
    
    global.matchMedia = jest.fn().mockImplementation(query => {
      return {
        matches: true,
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        addListener: jest.fn(),
        removeListener: jest.fn(),
      };
    });

    render(<MyComp />);
    expect(screen.queryByText("Desktop")).not.toBeInTheDocument();
    expect(screen.queryByText("Mobile")).toBeInTheDocument();
  })
})
