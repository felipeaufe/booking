import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Quantity } from './quantity';

describe('quantity', () => {
  const name = 'test';

  it('should increase quantity when click on increase button', async () => {
    let value = 0;

    function onClick(newValue: number) {
      value = newValue;
    }
    const { rerender } = render(
      <Quantity name={name} value={value} onClick={onClick} />,
    );

    const increase = screen.getByTestId(`quantity-${name}-increase`);

    fireEvent.click(increase);
    await waitFor(() => {
      rerender(<Quantity name={name} value={value} onClick={onClick} />);
      expect(value).toBe(1);
    });

    fireEvent.click(increase);
    await waitFor(() => {
      rerender(<Quantity name={name} value={value} onClick={onClick} />);
      expect(value).toBe(2);
    });

    fireEvent.click(increase);
    await waitFor(() => {
      rerender(<Quantity name={name} value={value} onClick={onClick} />);
      expect(value).toBe(3);
    });
  });

  it('should decrease quantity when click on decrease button', async () => {
    let value = 2;

    function onClick(newValue: number) {
      value = newValue;
    }
    const { rerender } = render(
      <Quantity name={name} value={value} onClick={onClick} />,
    );

    const decrease = screen.getByTestId(`quantity-${name}-decrease`);

    fireEvent.click(decrease);
    await waitFor(() => {
      rerender(<Quantity name={name} value={value} onClick={onClick} />);
      expect(value).toBe(1);
    });

    fireEvent.click(decrease);
    await waitFor(() => {
      rerender(<Quantity name={name} value={value} onClick={onClick} />);
      expect(value).toBe(0);
    });

    fireEvent.click(decrease);
    await waitFor(() => {
      rerender(<Quantity name={name} value={value} onClick={onClick} />);
      expect(value).toBe(-1);
    });
  });
});
