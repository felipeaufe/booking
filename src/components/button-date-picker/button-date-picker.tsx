import { useMemo } from "react";

import styled, { css } from "styled-components";

import { Icon } from "@elements/icon/icon";

interface ButtonDatePickerProps {
  readonly label: string;
  readonly text: Date | null;
  readonly onClean: (value: string) => void;
}

export function ButtonDatePicker({
  label,
  text,
  onClean,
}: ButtonDatePickerProps) {
  const formattedLabel = useMemo(() => {
    return text ? `${label}:` : label;
  }, [text, label]);

  const formattedText = useMemo(() => {
    return text ? `${text?.toLocaleDateString()}` : "";
  }, [text]);

  return (
    <Container>
      <Label $hasText={!!text}>{formattedLabel}</Label>
      <Text data-testid="text" $hasText={!!text}>
        {formattedText}
      </Text>
      <Button data-testid="clean" onClick={() => onClean("")}>
        <Icon icon="xmark" />
      </Button>
    </Container>
  );
}

const Container = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  position: relative;
  height: 64px;
  border: 1px solid;
  border-color: var(--color-stroke);
  border-radius: var(--border-radius-12);
  background-color: #f5f5f5;
  padding: 0 var(--spacing-16);
  width: 100%;
`;

const Label = styled.label<{ $hasText: boolean }>`
  position: absolute;
  left: var(--spacing-16);
  top: 22px;
  font-size: var(--font-size-16);
  transition:
    top 0.2s ease-in-out,
    font-size 0.2s ease-in-out;
  pointer-events: none;

  ${({ $hasText }) =>
    $hasText &&
    css`
      top: var(--spacing-8);
      font-size: var(--font-size-12);
    `}
`;

const Text = styled.p<{ $hasText: boolean }>`
  border: none;
  background: none;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  pointer-events: none;
  width: 100%;

  ${({ $hasText }) =>
    $hasText &&
    css`
      opacity: 1;
    `}
`;

const Button = styled.button`
  cursor: pointer;
  right: var(--spacing-16);
  position: absolute;
  background: transparent;
  border: 1px solid;
  border-color: transparent;
  border-radius: 150px;
  width: 32px;
  height: 32px;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: #e6e6e6;
  }
`;
