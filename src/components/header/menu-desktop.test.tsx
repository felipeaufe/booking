import { render, screen } from "@testing-library/react";

import { MenuDesktop } from "./menu-desktop";

describe("menu-desktop", () => {
  beforeEach(() => {
    global.matchMedia = jest.fn().mockImplementation((query) => {
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
  });

  it("should render MenuDesktop", () => {
    render(<MenuDesktop />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("My Bookings")).toBeInTheDocument();
  });

  it("should not render MenuDesktop when isMobile", () => {
    global.matchMedia = jest.fn().mockImplementation((query) => {
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

    render(<MenuDesktop />);

    const homeText = screen.queryByText("Home");
    const bookingsText = screen.queryByText("My Bookings");

    expect(homeText).not.toBeInTheDocument();
    expect(bookingsText).not.toBeInTheDocument();
  });
});
