import styled, { css } from "styled-components";


export const Container = styled.div<{ fluid?: boolean; }>`
  appearance: none;
  border: none;
  box-sizing: border-box;
  outline: none;
  padding: 0;
  flex-shrink: 0;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  ${({ fluid  }: { fluid?: boolean }) => !fluid &&
    css`
      @media screen and (min-width: 0) {
        width: calc(100% - 16px * 2);
        max-width: 576px;
      }
      @media screen and (min-width: 0) {
        max-width: 576px,
      }
      @media screen and (min-width: 768px) {
        width: 100%;
        max-width: 768px;
      }
      @media screen and (min-width: 1024px) {
        max-width: 992px;
      }
      @media screen and (min-width: 1280px) {
        max-width: 1200px;
      }
      @media screen and (min-width: 1536px) {
        max-width: 1400px;
      }
      @media screen and (min-width: 1840px) {
        max-width: 1620px;
      }
    `
  }
`;