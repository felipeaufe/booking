import styled, { css } from 'styled-components';
import { container } from './media-query';

export const Container = styled.div<{ fluid?: boolean }>`
  appearance: none;
  border: none;
  box-sizing: border-box;
  outline: none;
  max-width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  flex-shrink: 0;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  ${({ fluid }: { fluid?: boolean }) =>
    !fluid &&
    css`
      @media screen and ${container.desktopMd} {
        max-width: 1400px;
      }
      @media screen and ${container.desktopXg} {
        max-width: 1620px;
      }
    `}
`;
