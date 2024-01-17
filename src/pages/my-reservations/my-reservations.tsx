import { Button as ButtonStyled } from '@elements/button';
import { device } from '@assets/styled/media-query';
import { CardBooking } from '@compositions/card-booking/card-booking';
import { useSelector } from '@state/store';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export function MyReservations() {
  const navigate = useNavigate();
  const bookings = useSelector(state => state.bookings.data);

  const handleOnClick = () => {
    navigate('/');
  };

  return (
    <div>
      <H1>My Reservations</H1>
      <List>
        {bookings.map(booking => (
          <CardBooking key={booking.id} booking={booking} />
        ))}

        {bookings.length === 0 && (
          <Box>
            <Title>There are no reservations registered yet!</Title>
            <Subtitle>
              Time to dust off your bags and start planning your next adventure.
            </Subtitle>
            <Button variant="primary" onClick={handleOnClick}>
              Start The Search
            </Button>
          </Box>
        )}
      </List>
    </div>
  );
}

const H1 = styled.h1`
  font-size: var(--font-size-40);
  font-weight: var(--font-weight-black);
  margin-top: var(--spacing-100);
  margin-bottom: var(--spacing-100);
  text-align: center;

  @media ${device.mobileL} {
    font-size: var(--font-size-32);
    margin-top: var(--spacing-60);
    margin-bottom: var(--spacing-60);
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 883px;
  margin-left: auto;
  margin-right: auto;
  padding: var(--spacing-40);
  border: 1px solid;
  border-color: var(--color-stroke);
  border-radius: var(--border-radius-12);

  gap: var(--spacing-40);

  @media ${device.mobileL} {
    border: none;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 290px;
`;

const Title = styled.p`
  text-align: center;
  font-size: var(--font-size-32);
  color: var(--color-primary);
  font-weight: var(--font-weight-medium);

  @media ${device.mobileL} {
    margin-bottom: var(--spacing-12);
  }
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: var(--font-size-16);
  color: var(--color-black-75);
  font-weight: var(--font-weight-regular);
  margin-bottom: var(--spacing-40);

  @media ${device.mobileL} {
    margin-bottom: var(--spacing-60);
  }
`;

const Button = styled(ButtonStyled)``;
