import { Icon } from '@elements/icon/icon';
import { Place } from '@state/places/types';
import styled from 'styled-components';

interface PlaceInformationProps {
  readonly place: Place;
}

export function PlaceInformation({ place }: PlaceInformationProps) {
  return (
    <Container>
      <Title>Place {place.name}</Title>
      <Location>
        <Icon icon="location-dot" />
        <span>
          {place.state} - {place.country}
        </span>
      </Location>

      <Description>{place.description}</Description>
    </Container>
  );
}

const Container = styled.div`
  width: calc(60% - var(--spacing-24));
  max-width: 700px;
`;

const Title = styled.h1`
  font-size: var(--font-size-32);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-12);
`;

const Location = styled.p`
  font-size: var(--font-size-25);
  font-weight: var(--font-weight-regular);
  color: var(--color-primary);
  margin-bottom: var(--spacing-24);

  & > i {
    font-size: var(--font-size-14);
    margin-right: var(--spacing-8);
    color: #8b96f6;
  }
`;

const Description = styled.p`
  font-size: var(--font-size-16);
  font-weight: var(--font-weight-regular);
`;
