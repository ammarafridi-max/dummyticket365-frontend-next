'use client';
import styled from 'styled-components';
import Container from '../components/Container';
import PrimarySection from '../components/PrimarySection';
import Paragraph from '../components/Paragraph';
import SectionTitle from '../components/SectionTitle';
import { CheckIcon, Clock3Icon, DollarSign } from 'lucide-react';

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;
  @media only screen and (max-width: 991px) {
    display: block;
  }
`;

export default function Benefits() {
  return (
    <PrimarySection pt="0" pb="100px">
      <Container>
        <SectionTitle
          textAlign="center"
          subtitle="Benefits of our dummy tickets"
          mb="40px"
        >
          Why Book With Dummy Ticket 365?
        </SectionTitle>
        <Row>
          <IconCard
            icon={<CheckIcon size={24} color="green" />}
            title="Reliable"
            text="We use official airline reservation systems to create genuine and verifiable dummy tickets, ensuring they are accepted by consulates and embassies worldwide."
          />
          <IconCard
            icon={<Clock3Icon />}
            title="Quick"
            text="Our streamlined process lets you receive a verifiable dummy ticket instantly. Simply complete a short form, and your ticket will be delivered via email within minutes."
          />
          <IconCard
            icon={<DollarSign />}
            title="Affordable"
            text="Starting at only USD 12, we provide high-quality dummy tickets at the best rates, making them accessible and affordable for everyone."
          />
        </Row>
      </Container>
    </PrimarySection>
  );
}

const Card = styled.div`
  text-align: center;
  &:last-of-type {
    margin-bottom: 0px;
  }
  @media only screen and (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;

const H3 = styled.h3`
  font-size: 20px;
  margin: 18px 0;
  padding: 0;
  font-weight: 700;
`;

const IconDiv = styled.div`
  width: fit-content;
  font-size: 30px;
  color: var(--primary-color-500);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color-100);
  margin: 0 auto;
  padding: 15px;
  border-radius: 100px;
  overflow: hidden;
`;

function IconCard({ icon, title, text }) {
  return (
    <Card>
      <IconDiv>{icon}</IconDiv>
      <H3>{title}</H3>
      <Paragraph textAlign="center" fontSize="17px" fontWeight="300">
        {text}
      </Paragraph>
    </Card>
  );
}

{
  /* <IconCard
  icon={shieldIcon}
  title="Reliable"
  text="We use official airline reservation systems to generate dummy tickets, making sure that each ticket is genuine and can be verified by consulates and embassies all around the world."
  alt="A shield icon, representing the reliability of My Dummy Ticket."
/>
<IconCard
  icon={timeIcon}
  title="Quick"
  text="Our streamlined process allows you to get your dummy ticket instantly via email. Simply fill out a short form, and within minutes, you will have a verifiable ticket ready for your visa application."
  alt="A time icon, highlighting My Dummy Ticket's fast process to get your dummy tickets."
/>
<IconCard
  icon={usdIcon}
  title="Affordable"
  text="Starting at just AED 49, our service is the most cost-effective solution. We offer the best rates in the market, making it affordable for everyone to obtain a verifiable dummy ticket."
  alt="A dollar sign, highlighting My Dummy Ticket's affordable pricing for your traveling needs."
/> */
}
