import '@test-config/mocks/react-router-dom';

import { renderRedux } from '@test-config/test-utils/render';
import { initialState } from '@state/places';
import { act, screen } from '@testing-library/react';
import { places } from '@test-config/mock-data/places';

import Home from './home';

describe('Home', () => {
  it('should render Banner', () => {
    renderRedux(<Home />, { places: initialState });

    expect(screen.getByText('Explore')).toBeDefined();
    expect(screen.getByText('Beautiful')).toBeDefined();
    expect(screen.getByText('World')).toBeDefined();
    expect(screen.getByText('I Want To Travel')).toBeDefined();
  });

  it('should render places', async () => {
    await act(async () => {
      renderRedux(<Home />, { places: { ...initialState, data: places } });
    });

    expect(screen.getByText('Explore Place')).toBeInTheDocument();
    expect(screen.getAllByTestId('link')).toHaveLength(2);
  });
});
