import styled from "styled-components";
import { Button } from "@assets/styled/button";
import { GuestSelect } from "@components/guest-select/guest-select";
import { ButtonDatePicker } from "@elements/button-date-picker/button-date-picker";
import { useState } from "react";
import { addDays } from "@utils/date";

export function BookingForm () {

  const [ checkIn, setCheckIn ] = useState<Date | null>(null);
  const [ checkOut, setCheckOut ] = useState<Date | null>(null);

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
      <GuestSelect />
      <Button variant="primary">Reserve</Button>
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
