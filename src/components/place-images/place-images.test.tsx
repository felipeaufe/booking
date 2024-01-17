import { render, screen } from '@testing-library/react';
import { PlaceImages } from './place-images';

describe('place-images', () => {
  const code = 'lagoa-preta';
  const name = 'Lagoa Preta';
  const images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];

  it('should render place-images', () => {
    render(<PlaceImages code={code} name={name} images={['01.jpg']} />);

    expect(
      screen.getByAltText(`Principal image of ${name}`),
    ).toBeInTheDocument();
  });

  it('should render 4 images', () => {
    render(<PlaceImages code={code} name={name} images={images} />);

    expect(screen.getByAltText(`Image 1 of ${name}`)).toBeInTheDocument();
    expect(screen.getByAltText(`Image 2 of ${name}`)).toBeInTheDocument();
    expect(screen.getByAltText(`Image 3 of ${name}`)).toBeInTheDocument();
    expect(screen.getByAltText(`Image 4 of ${name}`)).toBeInTheDocument();
  });
});
