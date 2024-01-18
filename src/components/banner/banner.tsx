import { device } from "@assets/styled/media-query";
import styled from "styled-components";

import { Button as ButtonStyled } from "@elements/button";
import { Container as ContainerStyled } from "@elements/container";

export function Banner() {
  const handleOnClick = () => {
    const targetSection = document.getElementById("explore-places");
    targetSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container id="banner">
      <Content>
        <Title>
          <span>
            Explore
            <ImageAirplane
              src="/img/banner/airplane.svg"
              alt="Icon-shaped drawing of an airplane"
            />
          </span>
          <span>
            Beautiful
            <ImageStar
              src="/img/banner/star.svg"
              alt="Icon-shaped drawing of an airplane"
            />
          </span>
          <span>
            <ImageArrow
              src="/img/banner/arrow.svg"
              alt="Icon-shaped drawing of an airplane"
            />
            World
          </span>
        </Title>
        <Button variant="primary" onClick={handleOnClick}>
          I Want To Travel
        </Button>
      </Content>
      <ImagePerson
        src="/img/banner/person.png"
        alt="Woman holding a cell phone, sitting on a small travel suitcase and a backpack on her back"
      />
    </Container>
  );
}

const Container = styled(ContainerStyled)`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  margin-top: var(--spacing-142);
  margin-bottom: var(--spacing-202);

  @media ${device.tablet} {
    justify-content: space-between;
    align-items: center;
    margin-top: var(--spacing-80);
    margin-bottom: var(--spacing-100);
  }

  @media ${device.mobileL} {
    position: relative;
    padding-bottom: var(--spacing-40);
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-40);
  width: fit-content;

  @media ${device.mobileL} {
    gap: 0;
  }
`;

const Title = styled.h1`
  display: flex;
  flex-direction: column;
  font-size: var(--font-size-96);
  font-weight: var(--font-weight-black);
  width: fit-content;

  @media ${device.tablet} {
    font-size: var(--font-size-56);
  }

  @media ${device.mobileL} {
    font-size: var(--font-size-36);
  }

  & > span {
    display: inline-flex;
    color: var(--color-dark);
    position: relative;

    &:last-child {
      color: var(--color-primary);
    }
  }
`;

const Button = styled(ButtonStyled)`
  @media ${device.mobileL} {
    position: absolute;
    bottom: 0;
  }
`;

const ImagePerson = styled.img`
  min-width: 300px;
  max-height: 550px;

  @media ${device.tablet} {
    margin-left: 0px;
    min-width: 0;
  }
`;

const ImageAirplane = styled.img`
  margin-bottom: -40px;
  margin-left: 20px;

  @media ${device.mobileL} {
    width: 80px;
    position: absolute;
    right: -60px;
    margin-left: 0;
    top: -14px;
  }
`;

const ImageStar = styled.img`
  margin-left: 40px;

  @media ${device.tablet} {
    display: none;
  }
`;

const ImageArrow = styled.img`
  position: absolute;
  left: -50px;
  bottom: -40px;

  @media ${device.tablet} {
    transform: scaleX(-1);
    left: auto;
    right: 30px;
    -webkit-transform: scaleX(-1);
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    transform: spl;
  }

  @media ${device.mobileL} {
    right: 10px;
    height: 40px;
    top: 15px;
  }
`;
