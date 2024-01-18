import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import { PlaceImagesProps } from '@components/place-images/place-images';
import { Pagination } from 'swiper/modules';
import { device } from '@assets/styled/media-query';

import 'swiper/css';
import 'swiper/css/pagination';

export function SwiperPlaceImages({
  code,
  name,
  images,
}: Readonly<PlaceImagesProps>) {
  return (
    <Container>
      <Swiper pagination={true} modules={[Pagination]}>
        {images.map((image, index) => (
          <SwiperSlide key={code}>
            <Image
              src={`/img/${code}/${image}`}
              alt={`Image ${index + 1} of ${name}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 40px;
  .swiper {
    padding-bottom: 24px;
  }
  .swiper-pagination {
    bottom: 0px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;

  @media ${device.mobileL} {
    height: 300px;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    height: 450px;
  }
`;
