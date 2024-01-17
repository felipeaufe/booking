import styled from 'styled-components';

export function MenuPrincipal() {
  return (
    <Menu>
      <li>
        <Link href={`/`}>Home</Link>
      </li>
      <li>
        <Link href={`/my-reservations`}>My Bookings</Link>
      </li>
    </Menu>
  );
}

const Menu = styled.ul`
  display: inline-flex;
  align-items: center;
  gap: 28px;
`;

const Link = styled.a`
  color: var(--color-dark-50);
  font-weight: var(--font-weight-medium);
  text-decoration: none;
`;
