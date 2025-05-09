'use client';
import styled from 'styled-components';
import PrimarySection from '../components/PrimarySection';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin: 0;
  padding: 0;
  @media screen and (max-width: 991px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export default function Process() {
  return (
    <PrimarySection pt="70px" pb="100px" id="process">
      <Container>
        <SectionTitle textAlign="center" subtitle="How it Works" mb="50px">
          Your Dummy Ticket in 3 Easy Steps
        </SectionTitle>
        <Row>
          <Card number={1} title="Route and dates">
            Enter your route and dates, select your desired flight and enter all
            the details listed on our form.
          </Card>
          <Card number={2} title="Select Flight">
            Enter your route and dates, select your desired flight and enter all
            the details listed on our form.
          </Card>
          <Card number={3} title="Payment">
            Enter your route and dates, select your desired flight and enter all
            the details listed on our form.
          </Card>
        </Row>
      </Container>
    </PrimarySection>
  );
}

function Card({ number, title, children }) {
  return (
    <CardItem>
      <CardNumber>{number}</CardNumber>
      <CardTitle>{title}</CardTitle>
      <CardText>{children}</CardText>
    </CardItem>
  );
}

const CardItem = styled.div`
  background-color: var(--grey-color-100);
  padding: 40px 30px;
  border-radius: 10px;
`;

const CardNumber = styled.div`
  width: 40px;
  height: 40px;
  background-color: var(--primary-color-600);
  color: white;
  font-size: 18px;
  font-weight: 700;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
`;

const CardTitle = styled.h3`
  font-size: 19px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
  padding: 0;
  text-transform: capitalize;
`;

const CardText = styled.p`
  text-align: center;
  font-size: 16.5px;
  font-weight: 300;
`;

{
  /* <Step1Div>
            <h3>1. Enter Trip Details</h3>
            <p>
              Enter your route and dates, select your desired flight and enter
              all the details listed on our form.
            </p>
          </Step1Div>
          <Step2Div>
            <h3>2. Make The Payment</h3>
            <p>
              Once you confirm the details, you can then proceed to payment
              using Stripe's Checkout.
            </p>
          </Step2Div>
          <Step3Div>
            <h3>3. Receive Your Ticket</h3>
            <p>
              After your payment is confirmed, you'll receive your dummy ticket
              in 10 minutes via email.
            </p>
          </Step3Div> */
}
