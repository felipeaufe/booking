import { Input } from "@assets/styled/Input";
import { Button } from "@assets/styled/button";
import { GuestSelect } from "@components/guest-select/guest-select";
import styled from "styled-components";

export function BookingForm () {
  return (
    <Container>
      <div>
        <Input type="text" placeholder="Check-in"/>
        <Input type="text" placeholder="Checkout"/>
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

  & input, & button {
   width: 100%;
  }

  & > div {
    display: flex;
    flex-direction: row;
    gap: 12px;
  }
`;
