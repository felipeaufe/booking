import { useParams } from "react-router-dom";

import { device } from "@assets/styled/media-query";
import { useViewport } from "@hook/use-media-query";
import styled from "styled-components";

import { PlaceBooking } from "@components/place-booking/place-booking";
import { PlaceImages } from "@components/place-images/place-images";
import { PlaceInformation } from "@components/place-information/place-information";
import { SwiperPlaceImages } from "@components/swiper-place-images/swiper-place-images";
import { Container } from "@elements/container";

import { useSelector } from "@state/store";

export function Place() {
  const { isTablet, isDesktop } = useViewport();

  const { code } = useParams();

  const place = useSelector((state) =>
    state.places.data.find((item) => item.code === code),
  );

  if (!place) {
    return (
      <div>
        <h1>Place not found</h1>
      </div>
    );
  }

  return (
    <>
      {isTablet && (
        <SwiperPlaceImages
          code={place.code}
          name={place.name}
          images={place.images}
        />
      )}
      <Container>
        {!isTablet && isDesktop && (
          <PlaceImages
            code={place.code}
            name={place.name}
            images={place.images}
          />
        )}
        <BookingContainer>
          <PlaceInformation place={place} />
          <PlaceBooking code={place.code} />
        </BookingContainer>
      </Container>
    </>
  );
}

const BookingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-60);

    & > div {
      width: 100%;
    }
  }
`;
