'use client';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Container from './Container';
import PrimarySection from './PrimarySection';

const Body = styled.div`
  width: 80%;
  margin: 0 auto;
  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;

export default function BookingLayout({ children }) {
  return (
    <PrimarySection pt="20px" pb="50px">
      <Container>
        <Menu />
        <Body>{children}</Body>
      </Container>
    </PrimarySection>
  );
}

const MenuContainer = styled.div`
  width: 100%;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 991px) {
    flex-direction: column;
    overflow: scroll;
  }
`;

const MenuItem = styled.button`
  width: 33%;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  background-color: white;
  &.active {
    border-radius: 5px;
    background-color: var(--primary-color-500);
    color: white;
  }
  @media screen and (max-width: 991px) {
    width: 100%;
    justify-content: start;
  }
`;

const Step = styled.p`
  width: 30px;
  height: 30px;
  background-color: var(--primary-color-500);
  border-radius: 100px;
  color: white;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

function Menu() {
  const { pathname } = useLocation();

  return (
    <MenuContainer>
      <MenuItem
        className={pathname === '/booking/select-flights' ? 'active' : ''}
      >
        <Step>1</Step>
        <p>Select Flights</p>
      </MenuItem>

      <MenuItem
        className={pathname === '/booking/review-details' ? 'active' : ''}
      >
        <Step>2</Step>
        <p>Review Details</p>
      </MenuItem>

      <MenuItem>
        <Step>3</Step>
        <p>Payment</p>
      </MenuItem>
    </MenuContainer>
  );
}
