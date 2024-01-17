import { render } from '@testing-library/react';
import { Footer } from './footer';

describe('footer', () => {
  it('should render Footer', () => {
    const { container } = render(<Footer />);

    expect(container).toBeInTheDocument();
  });
});
