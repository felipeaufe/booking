import { BookingForm } from "@components/booking-form/booking-form";
import styled from "styled-components";

export function PlaceBooking () {
  return (
    <Container>
      <BookingForm />
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