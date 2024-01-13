import { device } from "@assets/styled/media-query"
import styled from "styled-components"
import { MenuPrincipal } from "./menu-principal"

export function MenuDesktop () {
  return (
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

  @media ${device.mobileL} {
    display: none;
  }
`;