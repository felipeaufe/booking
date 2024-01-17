import { fireEvent, render, screen } from '@testing-library/react';
import { GuestSelect } from './guest-select';

describe('guest-select', () => {
  const guests = {
    adults: 0,
    gestChildren: 0,
    pets: 0,
  };

  it('should toggle guests form when button is clicked', () => {
    render(
      <GuestSelect adults={0} gestChildren={0} pets={0} onChange={() => {}} />,
    );

    const guestsForm = screen.getByTestId('guest-select-content');
    const button = screen.getByTestId('guest-button');

    fireEvent.click(button);
    expect(guestsForm).toHaveClass('open');

    fireEvent.click(button);
    expect(guestsForm).not.toHaveClass('open');
  });

  it('should show guests information on button text', async () => {
    let adults = 0;
    let children = 0;
    let pets = 0;
    const component = () => (
      <GuestSelect
        adults={adults}
        gestChildren={children}
        pets={pets}
        onChange={() => {}}
      />
    );

    const { rerender } = render(component());

    const button = screen.getByTestId('guest-button');
    expect(button).toHaveTextContent('Guests');

    adults = 1;
    rerender(component());
    expect(button).toHaveTextContent('Adults: 1');

    children = 1;
    rerender(component());
    expect(button).toHaveTextContent('Adults: 1 Children: 1');

    pets = 1;
    rerender(component());
    expect(button).toHaveTextContent('Adults: 1 Children: 1 Pets: 1');
  });

  it('should call onChange when handleAdults is called', () => {
    const onChange = jest.fn();

    render(<GuestSelect {...guests} onChange={onChange} />);

    const button = screen.getByTestId('guest-button');
    fireEvent.click(button);

    const increaseAdults = screen.getByTestId('quantity-adults-increase');
    fireEvent.click(increaseAdults);

    expect(onChange).toHaveBeenCalledWith({
      adults: 1,
      children: 0,
      pets: 0,
    });
  });

  it('should call onChange when handleChildren is called', () => {
    const onChange = jest.fn();

    render(<GuestSelect {...guests} onChange={onChange} />);

    const button = screen.getByTestId('guest-button');
    fireEvent.click(button);

    const increaseAdults = screen.getByTestId('quantity-children-increase');
    fireEvent.click(increaseAdults);

    expect(onChange).toHaveBeenCalledWith({
      adults: 0,
      children: 1,
      pets: 0,
    });
  });

  it('should call onChange when handlePets is called', () => {
    const onChange = jest.fn();

    render(<GuestSelect {...guests} onChange={onChange} />);

    const button = screen.getByTestId('guest-button');
    fireEvent.click(button);

    const increaseAdults = screen.getByTestId('quantity-pets-increase');
    fireEvent.click(increaseAdults);

    expect(onChange).toHaveBeenCalledWith({
      adults: 0,
      children: 0,
      pets: 1,
    });
  });
});
