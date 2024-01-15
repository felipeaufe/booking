import { Icon } from "@elements/icon/icon";
import { Booking } from "@state/bookings/types"
import { useSelector } from "@state/store";
import { useMemo } from "react";
import styled from "styled-components"
import { Button as ButtonStyled } from '@assets/styled/button';
import { device } from "@assets/styled/media-query";
import { useViewport } from "@hook/use-media-query";

interface CardBookingProps {
  booking: Booking
}

export function CardBooking({ booking }: CardBookingProps) {
  const places = useSelector(state => state.places.data);
  const { isTablet } = useViewport();

  const place = useMemo(() => {
    return places.find(item => item.code === booking.placeCode);
  }, [places, booking]);

  return place && (
    <Container>
      <Id><span>#</span>{booking.id}</Id>
      <Box>
        <Image style={{ backgroundImage: `url(/img/${place.code}/${place.images[0]})`}} />
        <Content>
          <Title>{place.name}</Title>
          <Location>
            <Icon icon="location-dot"/>
            <span>{place.state} - {place.country}</span>
          </Location>

          <FormData>
            <div>
              <Label>Check-in: </Label>
              <Pill>{booking.checkIn}</Pill>
            </div>
            <div>
              <Label>Checkout: </Label>
              <Pill>{booking.checkOut}</Pill>
            </div>
            <div>
              <Label>Guests: </Label>
              <Pill>
                {booking.guests.adults > 0 ? `Adults: ${booking.guests.adults}` : ''}
                {booking.guests.children > 0 ? `Children: ${booking.guests.children}` : ''}
                {booking.guests.pets > 0 ? `Pets: ${booking.guests.adults}` : ''}
              </Pill>
            </div>
          </FormData>
          <ButtonContent>
            <Button data-testid="change" variant="primary">Change {!isTablet && 'Reservation'}</Button>
            <Button data-testid="cancel" variant="secondary">Cancel {!isTablet && 'Reservation'}</Button>
          </ButtonContent>
        </Content>
      </Box>
    </Container>
  )
}


const Id = styled.div`
  margin-bottom: var(--spacing-8);
  color: var(--color-primary);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-16  );

  & > span {
    color: var(--color-dark);
    font-weight: var(--font-weight-black);
  }
`;

const Box = styled.div`
  display: flex;


  @media ${device.tablet} {
    flex-direction: column;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  margin-left: var(--spacing-16);
`

const Title = styled.p`
  font-size: var(--font-size-28);
  font-weight: var(--font-weight-black);

  @media ${device.tablet} {
    margin-top: var(--spacing-20);
  }
`

const Location = styled.p`
  font-size: var(--font-size-16);
  font-weight: var(--font-weight-regular);
  margin-top: var(--spacing-4);
  color: var(--color-primary);

  & > i {
    font-size: var(--font-size-14);
    margin-right: var(--spacing-4);
    color: #8B96F6;
  }
`

const FormData = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-24);
  margin-top: var(--spacing-24);
  margin-bottom: var(--spacing-28);
`
  
const Label = styled.label`
  display: inline-block;
  color: var(--color-black-75);
  width: 80px;
`

const Pill = styled.span`
  padding: var(--spacing-8) var(--spacing-16);
  background-color: var(--color-primary-5);
  border-radius: var(--border-radius-4);
  color: var(--color-black-75);
`

const Image = styled.div`
  width: 253px;
  height: 225px;
  border-radius: var(--border-radius-12);
  background-size: cover;
  background-position: center;

  @media ${device.tablet} {
    width: 100%
  }
`

const ButtonContent = styled.div`
  display: flex;
  gap: var(--spacing-20);
`;

const Button = styled(ButtonStyled)`
  @media ${device.tablet} {
    width: 100%
  }
`;