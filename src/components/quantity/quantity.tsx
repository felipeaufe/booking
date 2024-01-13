import styled from "styled-components"

interface QuantityProps {
  value: number
  onClick: (value: number) => void;
}

export function Quantity({ value, onClick }: QuantityProps) {
  return (
    <Actions>
      <Button data-testid="decrease" onClick={() => onClick(value -1)}>-</Button>
      <Span data-testid="value">{value}</Span>
      <Button data-testid="increase" onClick={() => onClick(value +1)}>+</Button>
    </Actions>
  )
}

const Actions = styled.div`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-12);
`

const Span = styled.span`
  font-size: var(--font-size-16);
  font-weight: var(--font-weight-medium);
`

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  border-color: var(--color-stroke);
  border-radius: 150px;
  padding: 0;
  width: 32px!important;
  height: 32px;
  background: white;
  font-size: var(--font-size-16);
  font-weight: var(--font-weight-medium);

  &:active {
    background-color: var(--color-stroke);
  }
`