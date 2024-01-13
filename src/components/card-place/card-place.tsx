import { device } from "@assets/styled/media-query";
import { Icon } from "@elements/icon/icon";
import { Place } from "@state/places/types";
import styled from "styled-components";

interface CardPlaceProps {
  place: Place;
  onClick?(): void;
}

export function CardPlace ({ place, onClick }: CardPlaceProps) {
  return (
    <Container role="button" onClick={onClick}>
      <Image style={{ backgroundImage: `url(/img/${place.code}/${place.images[0]})`}} />
      <TitleContainer>
        <Title>{place.name}</Title>
        <Rate>
          <Icon icon="star"/>
          <span>{place.rate}</span>
        </Rate>
      </TitleContainer>
      <Location>
        <Icon icon="location-dot"/>
        <span>{place.state} - {place.country}</span>
      </Location>
    </Container> 
  )
}

const Container = styled.div`
  cursor: pointer;
  width: 364px;
  padding: var(--spacing-12);
  background-color: var(--color-gray);
  border: var(--border-solid-1);
  border-color: var(--color-stroke);
  border-radius: var(--border-radius-12);
  transition: opacity .2s ease;

  &:hover {
    opacity: .9;
  }

  @media ${device.mobileL} {
    width: 304px;
  }
`

const Image = styled.div`
  width: 100%;
  height: 240px;
  background-size: cover;
  background-position: center;
  border-radius: var(--border-radius-8);
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: var(--spacing-12);
`

const Title = styled.p`
  font-size: var(--font-size-20);
  font-weight: var(--font-weight-semi-bold);
  text-transform: uppercase;
`

const Rate = styled.p`
  color: var(--color-secondary);
  font-size: var(--font-size-16);
  font-weight: var(--font-weight-medium);
  text-transform: uppercase;

  & > i {
    font-size: var(--font-size-12);
    margin-right: var(--spacing-8);
    font-weight: var(--font-weight-bold);
  }
`

const Location = styled.p`
  font-size: var(--font-size-16);
  font-weight: var(--font-weight-regular);
  margin-top: var(--spacing-12);

  & > i {
    font-size: var(--font-size-14);
    margin-right: var(--spacing-4);
    color: #8B96F6;
  }
`