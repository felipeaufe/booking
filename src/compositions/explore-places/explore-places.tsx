import styled from "styled-components";

import { CardPlace } from "@components/card-place/card-place";
import { Container as ContainerStyled } from "@assets/styled/container";
import { useSelector } from "@state/store";

export function ExplorePlaces () {
  const places = useSelector(state => state.places.data);

  if(places.length === 0) {
    return;
  }
  
  return (
    <Container  id="explore-places">
      <Title>Explore Place</Title>
      <Content>
        {places.map((place) =>
          <CardPlace
            key={place.code}
            place={place}
          />
        )}
      </Content>
    </Container>
  )
}

const Title = styled.h2`
  font-size: var(--font-size-32);
  font-weight: var(--font-weight-regular);
  margin-bottom: var(--spacing-40);
  text-transform: uppercase;
  position: relative;
  padding-left: 8px;

  &::before {
    content: '';
    position: absolute;
    top: calc(50% - 2px);
    left: 0px;
    width: 4px;
    height: 4px;
    border-radius: 150px;
    background-color: var(--color-primary);
  }
`;

const Container = styled(ContainerStyled)`  `;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-columns: 350px;
  gap: 20px;

  @media screen and (max-width: 1280px) {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media screen and (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;