'use client';
import styled from 'styled-components';
import TicketForm from './TicketForm';
import PrimarySection from '../_components/PrimarySection';
import Container from '../_components/Container';
import PageTitle from '../_components/PageTitle';

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 50px 0;
  @media screen and (max-width: 991px) {
    display: block;
    padding: 30px 0;
  }
`;

const LeftContent = styled.div`
  width: 52%;
  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;

const RightContent = styled.div`
  width: 48%;
  background-color: white;
  padding: 30px;
  border-radius: 20px;
  -webkit-box-shadow: 0px 0px 20px 1px rgba(219, 219, 219, 1);
  -moz-box-shadow: 0px 0px 20px 1px rgba(219, 219, 219, 1);
  box-shadow: 0px 0px 20px 1px rgba(219, 219, 219, 1);
  @media screen and (max-width: 991px) {
    width: 100%;
    padding: 30px;
  }
`;

const Title = styled(PageTitle)`
  font-size: 40px;
  line-height: 1.3;
  @media screen and (max-width: 991px) {
    font-size: 32px;
    margin-bottom: 30px;
  }
`;

const Price = styled.span`
  color: var(--primary-color-700);
`;

const Text = styled.p`
  font-size: 19px;
  margin-top: 20px;
  font-weight: 400;
  line-height: 1.6;
  @media screen and (max-width: 991px) {
    /* font-size: 18px;
    margin: 20px 0;  */
    display: none;
  }
`;

export default function Hero() {
  return (
    <PrimarySection py="0" id="form">
      <StyledContainer>
        <LeftContent>
          <Title>
            Dummy Tickets From <Price>$12</Price>. Verifiable & Legit.
          </Title>
          <Text>
            Book verifiable flight reservations for visa applications. All
            legitimate reservations come with a PNR code that can be verified
            directly on airline websites.
          </Text>
        </LeftContent>
        <RightContent>
          <TicketForm />
        </RightContent>
      </StyledContainer>
    </PrimarySection>
  );
}
