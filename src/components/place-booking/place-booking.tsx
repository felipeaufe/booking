import { BookingForm } from "@components/booking-form/booking-form";
import { useSelector } from "@state/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface PlaceBookingProps {
  readonly code: string;
}

export function PlaceBooking ({ code }: PlaceBookingProps) {

  const navigate = useNavigate();
  const { success } = useSelector(state => state.bookings);

  useEffect(() => {
    if(success) {
      setTimeout(() =>  {
        navigate('/my-reservations');
        document.body.scrollIntoView({ behavior: "smooth" })
      }, 500)
    }
  }, [success, navigate])
  
  return (
    <Container>
      <BookingForm placeCode={ code }/>
    </Container>
  );
}

const Container = styled.div`
  width: 40%;
  max-width: 480px;
  padding: var(--spacing-16);
  border-radius: var(--border-radius-20);
  box-shadow: 10px 10px 22px rgba(0,0,0,0.21);
`;