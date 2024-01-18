import { render, screen } from "@testing-library/react";

import { ButtonDatePicker } from "./button-date-picker";

describe("buttons-date-picker", () => {
  it('should render "test" if has text', () => {
    render(<ButtonDatePicker label="test" text={null} onClean={() => {}} />);
    const text = screen.getByTestId("text");

    expect(screen.getByText("test")).toBeInTheDocument();
    expect(text).toHaveTextContent("");
  });

  it('should render "test:" if has text', () => {
    const date = new Date();
    render(<ButtonDatePicker label="test" text={date} onClean={() => {}} />);

    expect(screen.getByText("test:")).toBeInTheDocument();
    expect(screen.getByText(date.toLocaleDateString())).toBeInTheDocument();
  });

  it("should call onClean if x button is clicked", () => {
    const onClean = jest.fn();
    const date = new Date();
    render(<ButtonDatePicker label="test" text={date} onClean={onClean} />);

    const button = screen.getByTestId("clean");
    button.click();

    expect(onClean).toHaveBeenCalled();
  });
});
