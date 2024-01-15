import { Container } from "@assets/styled/container";
import { PlaceInformation } from "@components/place-information/place-information";
import { PlaceImages } from "@components/place-images/place-images";
import { useSelector } from "@state/store";
import { useParams } from "react-router-dom";
import { PlaceBooking } from "@components/place-booking/place-booking";
import styled from "styled-components";
import { device } from "@assets/styled/media-query";
import { SwiperPlaceImages } from "@components/place-images/swiper-place-images";
import { useViewport } from "@hook/use-media-query";

export function Place () {

  const { isTablet, isDesktop } = useViewport();

  const { code } = useParams();

  const place = useSelector(state => state.places.data.find(place => place.code === code));

  if(!place) {
    return (
      <div>
        <h1>Place not found</h1>
      </div>
    )
  }

  return (
    <>
      { isTablet && <SwiperPlaceImages code={place.code} name={place.name} images={place.images} /> }
      <Container>
        { !isTablet && isDesktop && <PlaceImages code={place.code} name={place.name} images={place.images} /> }
        <BookingContainer>
          <PlaceInformation place={place} />
          <PlaceBooking code={place.code} />
        </BookingContainer>
      </Container>
    </>
  )
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
`