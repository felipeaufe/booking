import { useCallback, useState } from "react";

import { device } from "@assets/styled/media-query";
import { useViewport } from "@hook/use-media-query";
import styled from "styled-components";

import { Icon } from "@elements/icon/icon";

import { MenuPrincipal } from "./menu-principal";

export function MenuMobile() {
  const [open, setOpen] = useState(false);

  const openMenu = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const { isMobile } = useViewport();

  return (
    isMobile && (
      <Container>
        <Menu>
          <User>
            <Button data-testid="bars" onClick={() => openMenu()}>
              <Icon icon="bars" />
            </Button>
          </User>
        </Menu>
        <Aside data-testid="aside" className={open ? "open" : ""}>
          <MenuPrincipal />
        </Aside>
      </Container>
    )
  );
}

const Container = styled.div`
  display: none;
  @media ${device.mobileL} {
    display: block;
    margin-left: auto;
  }
`;

const Aside = styled.div`
  background-color: white;
  position: fixed;
  bottom: 0;
  right: -100vw;
  width: 100vw;
  height: calc(100vh - 56px);
  z-index: 100;
  padding: 20px 0;
  transition:
    right 0.4s,
    opacity 0.3s;
  opacity: 0;

  &.open {
    right: 0vw;
    opacity: 1;
    transition:
      right 0.1s,
      opacity 0.3s;
  }

  & > ul {
    display: inline-block;
    width: 100%;
    height: 100%;

    & > li {
      display: inline-block;
      width: 100%;
      text-align: right;

      & > a {
        display: block;
        padding-top: var(--spacing-24);
        padding-bottom: var(--spacing-24);
        padding-right: var(--spacing-40);
        font-size: var(--font-size-24);
      }
    }
  }
`;

const Menu = styled.ul`
  display: inline-flex;
  align-items: center;
  gap: 28px;
`;

const User = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  font-size: var(--font-size-20);
  border-radius: var(--border-radius-12);
  background-color: var(--color-primary-5);

  & i {
    color: var(--color-primary);
  }

  @media ${device.mobileL} {
    font-size: var(--font-size-16);
    border-radius: var(--border-radius-8);
    width: 40px;
    height: 40px;
  }
`;

const Button = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  width: 100%;
  height: 100%;
`;
