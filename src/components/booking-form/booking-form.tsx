import styled from "styled-components";
import { Button } from "@assets/styled/button";
import { GuestSelect, Guests } from "@components/guest-select/guest-select";
import { ButtonDatePicker } from "@elements/button-date-picker/button-date-picker";
import { useCallback, useEffect, useMemo, useState } from "react";
import { addDays } from "@utils/date";
import { Booking } from "@state/bookings/types";
import { useDispatch, useSelector } from "@state/store";
import { bookingsActions } from "@state/bookings/saga";
import { toast } from "react-toastify";
import { findNextFreeDate, getBookingsIntervals } from "@utils/bookings-intervals";

export interface BookingForm extends Omit<Booking, "placeCode"> {}

type BookingFormProps = {
  readonly placeCode: string;
  readonly booking?: Booking;
  readonly onCancel?: () => void;
}
export function BookingForm ({ placeCode, booking, onCancel }: BookingFormProps) {
  const initialData = {
    id: booking?.id,
    placeCode: placeCode,
    guests: booking?.guests || {
      adults: 0,
      children: 0,
      pets: 0
    },
    checkIn: booking?.checkIn ? new Date(booking?.checkOut) : null,
    checkOut: booking?.checkOut ? new Date(booking?.checkOut) : null
  }

  const dispatch = useDispatch();

  const { data: bookings, error, loading, success } = useSelector(state => state.bookings);
  
  const [ adults, setAdults ] = useState(initialData.guests.adults);
  const [ children, setChildren ] = useState(initialData.guests.children);
  const [ pets, setPets ] = useState(initialData.guests.pets);

  const [ checkIn, setCheckIn ] = useState<Date | null>(initialData.checkIn);
  const [ checkOut, setCheckOut ] = useState<Date | null>(initialData.checkOut);

  const handleChangeGuests = (value: Guests) => {
    setAdults(value.adults);
    setChildren(value.children);
    setPets(value.pets);
  }
  
  const handleChangeCheckIng = (value: Date | null) => {
    setCheckIn(value);
    setCheckOut(null);
  }

  const excludedIntervals = useMemo(() => {
    return getBookingsIntervals(placeCode, bookings);
  }, [placeCode, bookings]);

  const checkoutMaxDate = useMemo(() => {
    return findNextFreeDate(checkIn  || addDays(new Date(), 2), excludedIntervals) || addDays(new Date(), 30);
  }, [checkIn, excludedIntervals]);
  
  const isValid = useMemo(() => {
    return checkIn && checkOut && ( adults > 0 || children > 0 || pets > 0)
  }, [checkIn, checkOut, adults, children, pets]);
  
  const handleOnClick = useCallback(() => {
    if (isValid) {
      
      const data: Booking = {
        id: booking?.id,
        placeCode,
        checkIn: (checkIn as Date).getTime(),
        checkOut: (checkOut as Date).getTime(),
        guests: {
          adults,
          children,
          pets
        },
      };

      if(data.id) {
        dispatch({ type: bookingsActions.UPDATE_REQUEST, payload: data })
      } else {
        dispatch({ type: bookingsActions.STORE_REQUEST, payload: data })
      }
    }
  }, [isValid, booking?.id, placeCode, checkIn, checkOut, adults, children, pets, dispatch]);

  const handleOnCancel = () => {
    onCancel?.();
  };

  useEffect(() => {
    if(success) {
      setCheckIn(null);
      setCheckOut(null);
      setAdults(0);
      setChildren(0);
      setPets(0);

      toast.success("Your reservation has been registered successfully.")
      onCancel?.();
    }

    if(error) {
      toast.error("Oops, we were unable to proceed with the reservation.")
      onCancel?.();
    }
  }, [error, success, onCancel])
  
  return (
    <Container>
      <div>
        <CheckIn
          value={checkIn}
          onChange={handleChangeCheckIng}
          minDate={addDays(new Date(), 2)}
          maxDate={addDays(new Date(), 30)}
          excludeDateIntervals={excludedIntervals}
        >
          Check-in{ checkIn ? `: ${checkIn?.toLocaleDateString()}` : ''}
        </CheckIn>

        <CheckOut
          value={checkOut}
          onChange={data => data && setCheckOut(data)}
          disabled={!checkIn}
          minDate={checkIn || addDays(new Date(), 2)}
          maxDate={checkoutMaxDate}
          excludeDateIntervals={excludedIntervals}
        >
          Checkout{ checkOut ? `: ${checkOut?.toLocaleDateString()}` : ''}
        </CheckOut>
      </div>
      <GuestSelect adults={adults} gestChildren={children} pets={pets} onChange={data => handleChangeGuests(data)} />
      <ButtonContainer>
        <Button disabled={loading || !isValid} variant="primary" onClick={handleOnClick}>{ booking ? 'Update' : 'Reserve' }</Button>
        { booking && <Button disabled={loading || !isValid} variant="secondary" onClick={handleOnCancel}>Cancel</Button>}
      </ButtonContainer>
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

const ButtonContainer = styled.div`
  display: flex;
  gap: var(--spacing-16);
  & > button {
    width: 100%;
  }
`

const CheckIn = styled(ButtonDatePicker)`
  margin-right: calc(var(--spacing-12) / 2);
  width: 100%;
`;
const CheckOut = styled(ButtonDatePicker)`
  margin-left: calc(var(--spacing-12) / 2);
  width: 100%;
`;
