import { fireEvent, render, screen } from '@testing-library/react';
import { DatePicker } from './date-picker';

describe('date-picker', () => {
  // const onChange = jest.fn();
  it('should return the chosen date', () => {
    let date: Date | null = null;
    render(
      <DatePicker value={new Date()} onChange={value => (date = value)}>
        Button
      </DatePicker>,
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
