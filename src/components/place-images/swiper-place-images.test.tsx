import '../../test-config/mocks/swiper-pagination';

import { act, render, screen } from "@testing-library/react";
import { SwiperPlaceImages } from "./swiper-place-images";

describe('swiper-place-images', () => {

  const code = "lagoa-preta";
  const name = "Lagoa Preta";
  const images = ["01.jpg", "02.jpg", "03.jpg","04.jpg", "05.jpg"];

  it('should render 4 images', async () => {

    await act(async () => {
      render(<SwiperPlaceImages code={code} name={name} images={images} />);
    })
    
    expect(screen.getByAltText(`Image 1 of Lagoa Preta`)).toBeInTheDocument();
    expect(screen.getByAltText(`Image 2 of Lagoa Preta`)).toBeInTheDocument();
    expect(screen.getByAltText(`Image 3 of Lagoa Preta`)).toBeInTheDocument();
    expect(screen.getByAltText(`Image 4 of Lagoa Preta`)).toBeInTheDocument();
  })
})