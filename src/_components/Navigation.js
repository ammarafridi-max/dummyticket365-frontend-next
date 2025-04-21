"use client"
import logo from '../_assets/images/logo-long.png';
import styled from 'styled-components';
import Container from '../_components/Container';
import Image from 'next/image';

export const pages = [
  { name: 'Book Now', link: '/#form' },
  { name: 'Process', link: '/#process' },
  { name: 'About', link: '/#about' },
  { name: 'FAQ', link: '#faq' },
  { name: 'Contact', link: 'mailto:info@mydummyticket.ae'},
];

const Header = styled.header`
  background-color: transparent;
  box-shadow: 0px 0px 20px 0px rgba(200, 200, 200, 1);
  -moz-box-shadow: 0px 0px 20px 0px rgba(200, 200, 200, 1);
  -webkit-box-shadow: 0px 0px 20px 0px rgba(200, 200, 200, 1);
  @media only screen and (max-width: 991px) {
    display: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7.5px 0;
`;

export default function Navigation() {
  return (
    <Header>
      <Container>
        <Nav>
          <LogoContainer />
          <NavLinks />
        </Nav>
      </Container>
    </Header>
  );
}

const LogoDiv = styled.div`
  width: 25%;
  padding: 0;
  height: 70px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

function LogoContainer() {
  return (
    <LogoDiv>
      <a href="/">
        <Image
          src={logo}
          alt="My Dummy Ticket Logo"
          title="My Dummy Ticket Logo"
        />
      </a>
    </LogoDiv>
  );
}

const StyledNavLinks = styled.div`
  width: auto;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledNavLink = styled.a`
  font-size: 14px;
  font-weight: 700;
  color: var(--grey-color-600);
  text-transform: uppercase;
  padding: 10px 5px;
  margin-right: 15px;
  transition-duration: 0.3s;
  &:hover {
    color: var(--primary-color-500);
  }
`;

function NavLinks() {
  return (
    <StyledNavLinks>
      {pages.map((page, i) => (
        <StyledNavLink key={i} href={page.link} title={page.name}>
          {page.name}
        </StyledNavLink>
      ))}
    </StyledNavLinks>
  );
}
