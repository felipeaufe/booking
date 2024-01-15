import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
import { useNavigate } from 'react-router-dom';

import { CardPlace } from "@components/card-place/card-place";
import { Container as ContainerStyled } from "@assets/styled/container";
import { device } from "@assets/styled/media-query";
import { useSelector } from "@state/store";

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

export function ExplorePlace () {
  const navigate = useNavigate();
  const places = useSelector(state => state.places.data);

  const handleRedirect = (code: string) => {
    navigate(`/place/${code}`)
  }


  if(places.length === 0) {
    return;
  }
  
  return (
    <Container>
      <Title>Explore Place</Title>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={20}
        grid={{
          rows: 2,
          fill: 'row'
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
      >
        {places.map((place) => 
          <SwiperSlide key={place.code}>
            <CardPlace place={place} onClick={() => handleRedirect(place.code)} />
          </SwiperSlide>
        )}
      </Swiper>
    </Container>
  )
}

const Title = styled.h2`
  font-size: var(--font-size-32);
  font-weight: var(--font-weight-regular);
  margin-bottom: var(--spacing-40);
  text-transform: uppercase;
  position: relative;
  padding-left: 8px;

  &::before {
    content: '';
    position: absolute;
    top: calc(50% - 2px);
    left: 0px;
    width: 4px;
    height: 4px;
    border-radius: 150px;
    background-color: var(--color-primary);
  }
`;

const Container = styled(ContainerStyled)`  
  .swiper {
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .swiper-wrapper {
    margin-bottom: var(--spacing-36);
  }

  .swiper-slide {
    width: 390px;
    
    @media ${device.mobileL} {
      width: 330px;
    }
  }
`;