import styled, { css } from "styled-components";

const variants = ({variant}: {variant: string}) => ({
  primary: css`
    background-color: var(--color-dark);
    color: white;
  `,
  secondary: css`
    background-color: white;
    color: var(--color-primary);
    border-color: var(--color-stroke);
  `
}[variant]);

export const Button = styled.button<{ variant: string }>`
  cursor: pointer;
  height: 52px;
  border: 1px solid;
  border-color: transparent;
  border-radius: var(--border-radius-12);
  background-color: white;
  font-size: var(--font-size-16);
  padding: var(--spacing-16) var(--spacing-20);
  cursor: pointer;
  ${variants}
`;