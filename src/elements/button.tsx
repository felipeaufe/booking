import styled, { css } from "styled-components";

const variants = ({ variant = "flat" }: { variant: string }) =>
  ({
    flat: css`
      background-color: transparent;
      height: initial;
      border: initial;
      border-radius: initial;
      padding: initial;
    `,
    primary: css`
      background-color: var(--color-dark);
      color: white;

      &:disabled {
        cursor: not-allowed;
        background-color: var(--color-dark-50);
      }
    `,
    secondary: css`
      background-color: white;
      color: var(--color-primary);
      border-color: var(--color-stroke);
    `,
  })[variant];

export const Button = styled.button<{ variant: string }>`
  cursor: pointer;
  height: 52px;
  border: 1px solid;
  border-color: transparent;
  border-radius: var(--border-radius-12);
  font-size: var(--font-size-16);
  padding: var(--spacing-16) var(--spacing-20);
  cursor: pointer;
  ${variants}
`;
