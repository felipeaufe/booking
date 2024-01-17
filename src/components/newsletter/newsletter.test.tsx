/* eslint-disable @typescript-eslint/no-explicit-any */
import { render } from '@testing-library/react';
import { Newsletter } from './newsletter';

describe('newsletter', () => {
  it('should render Newsletter', () => {
    const { container } = render(<Newsletter />);

    expect(container).toBeInTheDocument();
  });
});
