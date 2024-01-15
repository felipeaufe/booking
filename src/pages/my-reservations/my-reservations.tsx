import { device } from "@assets/styled/media-query"
import { CardBooking } from "@components/card-booking/card-booking";
import { useSelector } from "@state/store";
import styled from "styled-components"

export function MyReservations () {

  const bookings = useSelector(state => state.bookings.data);

  return (
    <div>
      <H1>My Reservations</H1>
      <List>
        {bookings.map(booking => <CardBooking booking={booking} />)}
      </List>
    </div>
  )
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
`

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
`;