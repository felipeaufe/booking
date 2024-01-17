import { BookingForm } from '@components/booking-form/booking-form';
import { bookingsEvents } from '@state/bookings/types';
import { Status } from '@state/store';
import eventBus from '@utils/event-bus';
import { scrollToTop } from '@utils/scroll-to-top';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface PlaceBookingProps {
  readonly code: string;
}

export function PlaceBooking({ code }: PlaceBookingProps) {
  const navigate = useNavigate();

  useEffect(() => {
    const { unsubscribe } = eventBus.subscribe<Status>(
      bookingsEvents.STORE_STATUS,
      ({ success }) => {
        if (success) {
          setTimeout(() => {
            navigate('/my-reservations');
            scrollToTop();
          }, 500);
        }
      },
    );

    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <BookingForm placeCode={code} />
    </Container>
  );
}

const Container = styled.div`
  width: 40%;
  max-width: 480px;
  padding: var(--spacing-16);
  border-radius: var(--border-radius-20);
  box-shadow: 10px 10px 22px rgba(0, 0, 0, 0.21);
`;
