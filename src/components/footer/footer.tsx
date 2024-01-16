import styled from "styled-components"
import { Container as ContainerStyled } from "@assets/styled/container";
import { device } from "@assets/styled/media-query";

export function Footer () {
  return (
    <FooterElement>
      <Container>
        <div>
          <Logo href={`/`}>
            <Image src="/logo-vertical.svg" alt="Logo" />
          </Logo> 
          <About>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium
          </About>
        </div>
        <Copyright>
          <span>Privacy policy | terms & conditions</span>
          <span>All copyright (c) 2022 reserved</span>
        </Copyright>
      </Container>
    </FooterElement>
  )
}


const FooterElement = styled.footer`
  margin-top: 120px;
`

const Container = styled(ContainerStyled)`
  padding: var(--spacing-20);
  background-color: var(--color-gray);
  border-top-right-radius: var(--border-radius-40);
  border-top-left-radius: var(--border-radius-40);
  
  @media ${device.tablet} {
    padding: var(--spacing-16);
  }

  & > div {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;

    @media ${device.tablet} {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`

const Logo = styled.a`
  margin-bottom: var(--spacing-16);
`

const Image = styled.img`
  width: 177px;
  min-width: 177px;
`

const About = styled.p`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: var(--spacing-24);
  font-size: var(--font-size-16);
  background-color: var(--color-primary-5);
  font-weight: var(--font-weight-regular);
  line-height: 1.30;
  letter-spacing: 0.25px;
  position: relative;
  margin-right: var(--spacing-44);
  border-radius: var(--border-radius-36);

  @media ${device.tablet} {
    margin-right: 0;
    text-align: justify;
  }
`

const Copyright = styled.p`
  display: flex;
  justify-content: space-between;
  margin: 0;
  background-color: #F5F5F5;
  padding: var(--spacing-24);
  margin-top: var(--spacing-16);
  border-radius: var(--border-radius-12);

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
