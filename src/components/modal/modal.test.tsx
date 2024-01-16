import { render, screen } from "@testing-library/react";
import { Modal } from "./modal";

describe('modal', () => {

  const onClose = jest.fn();

  it('should render Modal', () => {
    render(<Modal title="test" open={true} onClose={onClose}>Hello Modal</Modal>);

    expect(screen.getByText("Hello Modal")).toBeInTheDocument();
  })


  it('should call onClose when close icon was clicked', () => {
    render(<Modal title="test" open={true} onClose={onClose}>Hello Modal</Modal>);

    const closeButton = screen.getByTestId("button-close");
    closeButton.click();

    expect(onClose).toHaveBeenCalled()
  })
})