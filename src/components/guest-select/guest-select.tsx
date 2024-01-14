import { Quantity } from "@components/quantity/quantity";
import { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";

export interface Guests {
  adults: number
  children: number
  pets: number
}

interface GuestSelectProps  {
  readonly adults: number;
  readonly gestChildren: number;
  readonly pets: number;
  readonly onChange: (value: Guests) => void;
}

export function GuestSelect ({ adults, gestChildren, pets, onChange }: GuestSelectProps) {
  const ref = useRef(null);
  const [guestsForm, setGuestsOpen] = useState(false);
  
  const handleValue = (value: number) => {
    return value > 0 ? value : 0;
  }
  
  const handleAdults = (value: number) => {
    onChange({
      adults: handleValue(value),
      children: gestChildren,
      pets
    });
  }

  const handleChildren = (value: number) => {
    onChange({
      adults,
      children: handleValue(value),
      pets
    });
  }

  const handlePets = (value: number) => {
    onChange({
      adults,
      children: gestChildren,
      pets: handleValue(value)
    });
  }

  const toggleGuests = () => {
    setGuestsOpen(!guestsForm);
  }

  const selectLabel = useMemo(() => {
    let label = "";

    if(adults > 0) {
      label = `${label} Adults: ${adults}`;
    }
    if(gestChildren > 0) {
      label = `${label} Children: ${gestChildren}`;
    }
    if(pets > 0) {
      label = `${label} Pets: ${pets}`;
    }
    
    if(adults === 0 && gestChildren === 0 && pets === 0) {
       return "Guests";
    }

    return label;

  },[adults, gestChildren, pets]) 

  useEffect(() => {
    if(guestsForm) {
    
      const onDocumentClick = (event: MouseEvent) => {
        if(ref.current && !(ref.current as unknown as HTMLElement).contains(event.target as Node)) {
          setGuestsOpen(false);
        }
      }
  
      window.addEventListener('click', onDocumentClick)
      return () => {
        window.removeEventListener('click', onDocumentClick)
      }
    }
  }, [ref, guestsForm, setGuestsOpen]);

  return (
    <Container ref={ref}>
      <Button onClick={toggleGuests}>{selectLabel}</Button>
      <Content className={ guestsForm ? "open" : ""}>
        <Item>
          <Span>Adults</Span>
          <Quantity
            value={adults}
            onClick={handleAdults}
          />
        </Item>
        <Item>
          <Span>Children</Span>
          <Quantity
            value={gestChildren}
            onClick={handleChildren}
          />
        </Item>
        <Item>
          <Span>Pets</Span>
          <Quantity
            value={pets}
            onClick={handlePets}
          />
        </Item>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  background-color: white;
`

const Content = styled.div`
  display: none;
  flex-direction: column;
  gap: var(--spacing-12);
  padding: var(--spacing-12);
  left: 0;
  position: absolute;
  background-color: white;
  width: 100%;
  left: 0;
  top: calc(64px + var(--spacing-12));
  border-radius: var(--border-radius-8);
  box-shadow: 4px 4px 4px rgba(0,0,0,10%);
  border: 1px solid;
  border-color: var(--color-stroke);

  &.open {
    display: flex;
  }
`

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Span = styled.span``

const Button = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
  background-color: #F5F5F5;
  border: 1px solid #E6E6E6;
  border-radius: var(--border-radius-12);
  height: 64px;
  padding: 0 var(--spacing-16); 
`;