import styled from "styled-components";
import { Button } from "@assets/styled/button";
import { GuestSelect, Guests } from "@components/guest-select/guest-select";
import { ButtonDatePicker } from "@elements/button-date-picker/button-date-picker";
import { useCallback, useEffect, useState } from "react";
import { addDays } from "@utils/date";
import { Booking } from "@state/bookings/types";
import { useDispatch, useSelector } from "@state/store";
import { bookingsActions } from "@state/bookings/saga";

export interface BookingForm extends Omit<Booking, "placeCode"> {}

const GESTS_INITIAL = {
  adults: 0,
  children: 0,
  pets: 0
};

type BookingFormProps = {
  readonly code: string;
}
export function BookingForm ({ code }: BookingFormProps) {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.bookings.loading);
  const success = useSelector(state => state.bookings.success);

  const [ checkIn, setCheckIn ] = useState<Date | null>(null);
  const [ checkOut, setCheckOut ] = useState<Date | null>(null);
  const [ guests, setGuests ] = useState<Guests>(GESTS_INITIAL);
  
  const handleOnClick = useCallback(() => {
    if (checkIn && checkOut && ( guests?.adults > 0 || guests?.children > 0 || guests?.pets > 0)) {
      
      const data: Booking = {
        placeCode: code,
        checkIn: checkIn.getTime(),
        checkOut: checkOut.getTime(),
        guests,
      };

      dispatch({ type: bookingsActions.STORE_REQUEST, payload: data })
    }
  }, [code, guests, checkIn, checkOut, dispatch]);

  useEffect(() => {
    if(success) {
      setCheckIn(null);
      setCheckOut(null);
      setGuests(GESTS_INITIAL);
    }
  }, [success])
  
  return (
    <Container>
      <div>
        <CheckIn
          value={checkIn}
          onChange={data => data && setCheckIn(data)}
          includeDateIntervals={[
            { start: addDays(new Date(), 5), end: addDays(new Date(), 30) },
          ]}
        >
          Check-in{ checkIn ? `: ${checkIn?.toLocaleDateString()}` : ''}
        </CheckIn>

        <CheckOut
          value={checkOut}
          onChange={data => data && setCheckOut(data)}
          disabled={!checkIn}
          includeDateIntervals={[
            { start: addDays(new Date(), 5), end: addDays(new Date(), 30) },
          ]}
        >
          Checkout{ checkOut ? `: ${checkOut?.toLocaleDateString()}` : ''}
        </CheckOut>
      </div>
      <GuestSelect onChange={data => setGuests(data)} />
      <Button disabled={loading} variant="primary" onClick={handleOnClick}>Reserve</Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;


  & > div {
    display: flex;
    flex-direction: row;
  }

  & .react-datepicker-wrapper {
    display: flex;
    width: 100%;
  }
`;

const CheckIn = styled(ButtonDatePicker)`
  margin-right: calc(var(--spacing-12) / 2);
  width: 100%;
`
const CheckOut = styled(ButtonDatePicker)`
  margin-left: calc(var(--spacing-12) / 2);
  width: 100%;
`
