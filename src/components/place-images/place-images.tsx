import styled from "styled-components";

export interface PlaceImagesProps {
  readonly name: string;
  readonly code: string;
  readonly images: string[];
}

export function PlaceImages ({ name, code, images }: PlaceImagesProps) {
  return (
    <Container>
      <PrincipalImage src={`/img/${code}/${images[0]}`} alt={`Principal image of ${name}`}/>
      <ImageGroup>
        {images.slice(1).map((image, index) => <Image key={code} src={`/img/${code}/${image}`} alt={`Image ${index+1} of ${name}`}/>)}
      </ImageGroup>
    </Container>
  )
}


const Container = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: var(--spacing-60);
  height: 500px;
`;

const ImageGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  width: 50%;

  & > img:nth-child(2) {
    border-top-right-radius: var(--border-radius-12);
  }
  & > img:nth-child(4) {
    border-bottom-right-radius: var(--border-radius-12);
  }
`;

const PrincipalImage = styled.img`
  width: 50%;
  height: 100%;
  border-top-left-radius: var(--border-radius-12);
  border-bottom-left-radius: var(--border-radius-12);
  object-fit: cover;
`

const Image = styled.img`
  width: calc(50% - 6px);
  height: calc(50% - 6px);
  object-fit: cover;
`