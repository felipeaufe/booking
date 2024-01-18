import { fireEvent, render, screen } from '@testing-library/react';
import { DatePicker } from './date-picker';

describe('date-picker', () => {
  
  it('should return the chosen date', () => {
    const onCancelClose = jest.fn();
    const onChange = jest.fn();

    render(
      <DatePicker value={new Date()} onChange={onChange} onCalendarClose={onCancelClose}>
        <button>Button</button>
      </DatePicker>,
    );

    const button = screen.getByText('Button');

    fireEvent.click(button);
    expect(onChange).not.toHaveBeenCalled();

    const availableDaysElement = document.querySelectorAll(
      '.react-datepicker__day',
    );
    fireEvent.click(availableDaysElement[0]);
    expect(onChange).toHaveBeenCalled();
  });
});
