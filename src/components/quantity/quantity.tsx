import styled from "styled-components";

interface QuantityProps {
  readonly name: string;
  readonly value: number;
  readonly onClick: (value: number) => void;
}

export function Quantity({ value, name, onClick }: QuantityProps) {
  return (
    <Actions data-testid={`quantity-${name}`}>
      <Button
        data-testid={`quantity-${name}-decrease`}
        onClick={() => onClick(value - 1)}
      >
        -
      </Button>
      <Span data-testid={`quantity-${name}-value`}>{value}</Span>
      <Button
        data-testid={`quantity-${name}-increase`}
        onClick={() => onClick(value + 1)}
      >
        +
      </Button>
    </Actions>
  );
}

const Actions = styled.div`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-12);
`;

const Span = styled.span`
  font-size: var(--font-size-16);
  font-weight: var(--font-weight-medium);
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  border-color: var(--color-stroke);
  border-radius: 150px;
  padding: 0;
  width: 32px !important;
  height: 32px;
  background: white;
  font-size: var(--font-size-16);
  font-weight: var(--font-weight-medium);

  &:active {
    background-color: var(--color-stroke);
  }
`;
