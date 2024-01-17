import { fireEvent, render, screen } from '@testing-library/react';
import { ButtonDatePicker } from './button-date-picker';

describe('button-date-picker', () => {
  // const onChange = jest.fn();
  it('should return the chosen date', () => {
    let date: Date | null = null;
    render(
      <ButtonDatePicker value={new Date()} onChange={value => (date = value)}>
        Button
      </ButtonDatePicker>,
    );

    const button = screen.getByText('Button');

    fireEvent.click(button);

    const availableDaysElement = document.querySelectorAll(
      '.react-datepicker__day',
    );

    expect(date).toBe(null);

    fireEvent.click(availableDaysElement[0]);

    expect(date).not.toBe(null);
  });
});
