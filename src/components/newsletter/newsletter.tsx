import { useMemo, useState } from "react";
import { Container as ContainerStyled } from "@assets/styled/container";
import { Button as ButtonStyled } from "@assets/styled/button";
import styled from "styled-components";
import { device } from "@assets/styled/media-query";
import { newsletterService } from "@services/newsletter-service";
import { toast } from "react-toastify";

export function Newsletter () {

  const [ email, setEmail ] = useState('');

  const isValidEmail = useMemo(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }, [email]);

  const handleOnClick = () => {
      newsletterService.post(email)
      .then(() => {
        setEmail('');
        toast.success("Subscribed successfully.")
      })
      .catch(() => {
        toast.error("Oops, we were unable to subscribe.")
      });
  }

  const handleOnInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(target.value);
  }

  return (
    <Section>
      <Waves>
        <Effect>
          <Container>
            <Title>
              Receive <span>News</span> and <span>Promotions</span> that we have prepared with great care for <span>you</span>.
            </Title>
            <InputContainer>
              <Input value={email} onChange={handleOnInputChange} type="email" placeholder="Email Address..." />
              <Button disabled={!isValidEmail} variant="primary" onClick={handleOnClick}>SUBMIT</Button>
            </InputContainer>
          </Container>
        </Effect>
      </Waves>
    </Section>
  )
}

const Section = styled.section`
  margin-top: var(--spacing-142);
  background-color: var(--color-light-blue);
  position: relative;

  @media screen and (max-width: 920px) {
    margin-top: calc(var(--spacing-142) + 112px);
  }
`
const Waves = styled.div`
  background-image: url('/waves.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

const Effect = styled.div`
  background-image: url('/newsletter-effect.svg');
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;

  @media ${device.mobileL} {
    background-position: 160%;
  }
`

const Title = styled.p`
  margin: 0;
  font-size: var(--font-size-36);
  font-weight: var(--font-weight-black);
  line-height: 1.68;
  max-width: 810px;

  & > span {
    color: var(--color-primary);
  }

  @media screen and (max-width: 1158px) {
    font-size: var(--font-size-28);
  }

  @media screen and (max-width: 920px) {
    position: absolute;
    top: -153px;
  }

  @media ${device.mobileL} {
    top: -100%;
  }
`

const Container = styled(ContainerStyled)`
  display: flex;
  align-items: center;
  gap: var(--spacing-60);
  justify-content: space-between;
  padding-top: var(--spacing-60);
  padding-bottom: var(--spacing-60);
`

const InputContainer = styled.div`
  display: flex;
  align-items: center;

  background-color: white;
  border: 1px solid;
  border-color: var(--color-stroke);
  border-radius: var(--border-radius-12);
  height: 64px;

  @media screen and (max-width: 920px) {
    width: 100%;
  }
`

const Input = styled.input`
  background-color: white;
  border: none;
  height: 64px;
  width: 300px;
  outline: none;
  border-radius: var(--border-radius-12); 
  padding: 0 var(--spacing-16);

  @media screen and (max-width: 920px) {
    width: 100%;
  }
`

const Button = styled(ButtonStyled)`
  height: 40px;
  padding: var(--spacing-8) var(--spacing-20);
  margin-right: var(--spacing-20);
  margin-top: var(--spacing-12);
  margin-bottom: var(--spacing-12);
`