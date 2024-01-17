import { screen, render } from '@testing-library/react';
import { Dialog } from './dialog';

describe('dialog', () => {
  const resolver = jest.fn();
  const props = {
    title: 'My Title',
    message: 'My Message',
    resolver,
  };

  it('should render Dialog', () => {
    render(<Dialog {...props} />);

    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.message)).toBeInTheDocument();
    expect(screen.getByText('Ok')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
  });

  it('should resolve with true if ok', async () => {
    render(<Dialog {...props} />);

    const ok = screen.getByText('Ok');
    ok.click();

    expect(resolver).toHaveBeenCalledWith(true);
  });

  it('should resolve with false if cancel', async () => {
    render(<Dialog {...props} />);

    const cancel = screen.getByText('Cancel');
    cancel.click();

    expect(resolver).toHaveBeenCalledWith(false);
  });
});
