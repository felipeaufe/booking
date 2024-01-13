import { Container as ContainerStyled } from "@assets/styled/container";
import { device } from "@assets/styled/media-query";
import styled from "styled-components";
import { MenuDesktop } from "../../components/header/menu-desktop";
import { MenuMobile } from "../../components/header/menu-mobile";

export function Header () {
  return (
    <HeaderElement>
      <Container>
        <Logo href={`/`}>
          <img src="/logo-horizontal.svg" alt="Logo" />
        </Logo>
        <MenuDesktop />
        <MenuMobile />
      </Container>
    </HeaderElement>
  )
}

const HeaderElement = styled.header`
  background-color: white;
  padding-top: var(--spacing-40);
  padding-bottom: var(--spacing-40);
  border-bottom: 1px solid var(--color-stroke);

  @media ${device.mobileL} {
    padding-top: var(--spacing-8);
    padding-bottom: var(--spacing-8);
    border-bottom: none;
  }
`

const Container = styled(ContainerStyled)`
  display: flex;

  @media ${device.mobileL} {
    height: 40px;
  }
`
  
const Logo = styled.a`
  display: flex;
  align-items: center;
  margin-right: var(--spacing-40);

  & img {
    margin-top: -10px;
    height: 100%;

    @media ${device.mobileL} {
      margin-top: 0px;
    }
  }
`