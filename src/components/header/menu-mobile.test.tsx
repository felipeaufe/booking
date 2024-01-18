import { render, screen, waitFor } from "@testing-library/react";

import { MenuMobile } from "./menu-mobile";

describe("menu-mobile", () => {
  beforeEach(() => {
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
  });

  it("should render MenuMobile", () => {
    render(<MenuMobile />);

    const aside = screen.getByTestId("aside");
    const homeText = screen.getByText("Home");
    const bookingsText = screen.getByText("My Bookings");

    expect(homeText).toBeInTheDocument();
    expect(bookingsText).toBeInTheDocument();
    expect(aside).not.toHaveClass("open");
  });

  it("should not render MenuMobile when isDesktop", () => {
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

    render(<MenuMobile />);

    const homeText = screen.queryByText("Home");
    const bookingsText = screen.queryByText("My Bookings");

    expect(homeText).not.toBeInTheDocument();
    expect(bookingsText).not.toBeInTheDocument();
  });

  it("should open hide menu", async () => {
    render(<MenuMobile />);

    const button = screen.getByTestId("bars");
    const aside = screen.getByTestId("aside");

    await waitFor(() => button.click());

    expect(aside).toHaveClass("open");
  });
});
