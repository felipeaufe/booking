import styled from 'styled-components';
import { Button } from '@elements/button';
import { GuestSelect, Guests } from '@compositions/guest-select/guest-select';
import { DatePicker as ReactDateComponent } from '@components/button-date-picker/date-picker';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { addDays } from '@utils/date';
import { Booking, bookingsEvents } from '@state/bookings/types';
import { Status, useDispatch, useSelector } from '@state/store';
import { bookingsActions } from '@state/bookings/saga';
import { toast } from 'react-toastify';
import {
  findNextFreeDate,
  getBookingsIntervals,
} from '@utils/bookings-intervals';
import eventBus from '@utils/event-bus';

export interface BookingForm extends Omit<Booking, 'placeCode'> {}

type BookingFormProps = {
  readonly placeCode: string;
  readonly booking?: Booking;
  readonly onCancel?: () => void;
};
export function BookingForm({
  placeCode,
  booking,
  onCancel,
}: BookingFormProps) {
  const initialData = {
    id: booking?.id,
    placeCode: placeCode,
    guests: booking?.guests || {
      adults: 0,
      children: 0,
      pets: 0,
    },
    checkIn: booking?.checkIn ? new Date(booking?.checkOut) : null,
    checkOut: booking?.checkOut ? new Date(booking?.checkOut) : null,
  };

  const dispatch = useDispatch();

  const { data: bookings } = useSelector(state => state.bookings);

  const [loading, setLoading] = useState(false);

  const [adults, setAdults] = useState(initialData.guests.adults);
  const [children, setChildren] = useState(initialData.guests.children);
  const [pets, setPets] = useState(initialData.guests.pets);

  const [checkIn, setCheckIn] = useState<Date | null>(initialData.checkIn);
  const [checkOut, setCheckOut] = useState<Date | null>(initialData.checkOut);

  const excludedIntervals = useMemo(() => {
    return getBookingsIntervals(bookings);
  }, [bookings]);

  const maxDate = useMemo(() => {
    return (
      findNextFreeDate(checkIn || addDays(new Date(), 2), excludedIntervals) ||
      addDays(new Date(), 30)
    );
  }, [checkIn, excludedIntervals]);

  const isValid = useMemo(() => {
    return checkIn && checkOut && (adults > 0 || children > 0 || pets > 0);
  }, [checkIn, checkOut, adults, children, pets]);

  const handleChangeGuests = (value: Guests) => {
    setAdults(value.adults);
    setChildren(value.children);
    setPets(value.pets);
  };

  const handleOnChangeDate = ([start, end]: [Date | null, Date | null]) => {
    setCheckIn(start);
    setCheckOut(end);
  };

  const handleOnCalendarClose = useCallback(() => {
    if(!checkOut) {
      setCheckIn(null);
      setCheckOut(null);
    }
  }, [checkOut, setCheckIn, setCheckOut]);

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
          pets,
        },
      };

      if (data.id) {
        dispatch({ type: bookingsActions.UPDATE_REQUEST, payload: data });
      } else {
        dispatch({ type: bookingsActions.STORE_REQUEST, payload: data });
      }
    }
  }, [
    isValid,
    booking?.id,
    placeCode,
    checkIn,
    checkOut,
    adults,
    children,
    pets,
    dispatch,
  ]);

  const handleOnCancel = () => {
    onCancel?.();
  };

  const handleOnUpdateStatus = ({ success, error, loading }: Status) => {
    setLoading(loading);

    if (success) {
      setCheckIn(null);
      setCheckOut(null);
      setAdults(0);
      setChildren(0);
      setPets(0);

      toast.success('Your reservation has been registered successfully.');
      onCancel?.();
    }

    if (error) {
      toast.error('Oops, we were unable to proceed with the reservation.');
      onCancel?.();
    }
  };

  useEffect(() => {
    const { unsubscribe: storeUnsubscribe } = eventBus.subscribe<Status>(
      bookingsEvents.STORE_STATUS,
      handleOnUpdateStatus,
    );
    const { unsubscribe: updateUnsubscribe } = eventBus.subscribe<Status>(
      bookingsEvents.UPDATE_STATUS,
      handleOnUpdateStatus,
    );

    return () => {
      storeUnsubscribe();
      updateUnsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <div>
        <DatePicker
          value={checkIn}
          onChange={handleOnChangeDate}
          minDate={addDays(new Date(), 2)}
          maxDate={maxDate}
          excludeDateIntervals={excludedIntervals}
          startDate={checkIn}
          endDate={checkOut}
          onCalendarClose={handleOnCalendarClose}
          selectsRange
        >
          <ContentDatePicker>
            <button>
                Check-in{checkIn ? `: ${checkIn?.toLocaleDateString()}` : ''}
            </button>
            <button>
              Checkout{checkOut ? `: ${checkOut?.toLocaleDateString()}` : ''}
            </button>
          </ContentDatePicker>
        </DatePicker>
      </div>
      <GuestSelect
        adults={adults}
        gestChildren={children}
        pets={pets}
        onChange={data => handleChangeGuests(data)}
      />
      <ButtonContainer>
        <Button
          disabled={loading || !isValid}
          variant="primary"
          onClick={handleOnClick}
        >
          {booking ? 'Update' : 'Reserve'}
        </Button>
        {booking && (
          <Button
            disabled={loading || !isValid}
            variant="secondary"
            onClick={handleOnCancel}
          >
            Cancel
          </Button>
        )}
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
`;

const DatePicker = styled(ReactDateComponent)`
  width: 100%;
`

export const ContentDatePicker = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 12px;

  & > button {
    width: 100%
  }
`;