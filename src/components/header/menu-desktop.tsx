import styled from "styled-components"

import { useViewport } from "@hook/use-media-query"
import { MenuPrincipal } from "./menu-principal"

export function MenuDesktop () {
  const { isDesktop } = useViewport();

  return isDesktop && (
    <Content>
      <MenuPrincipal />
    </Content>
  )
}

const Content = styled.div`
  display: flex;
  width: 100%;
  & > ul:nth-child(2) {
    margin-left: auto;
  }
`;