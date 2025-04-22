'use client';
import Container from '../components/Container';
import PrimarySection from '../components/PrimarySection';
import TestimonialCard from '../components/TestimonialCard';
import SectionTitle from '../components/SectionTitle';
import david from '../assets/images/david.webp';
import maria from '../assets/images/maria.webp';
import ahmed from '../assets/images/ahmed.webp';
import styled from 'styled-components';

const testimonials = [
  {
    title: 'Hassle-free',
    name: 'David S.',
    img: david,
    text: 'Dummy Ticket 365 made my visa application process smooth and hassle-free. Their service is reliable and highly recommended for all travelers.',
  },
  {
    title: 'Reliable',
    name: 'Maria K.',
    img: maria,
    text: 'Fast service, reliable, and easy to book. Dummy Ticket 365 is a lifesaver for travel documentation. I really recommend them and will use their service again!',
  },
  {
    title: 'Lightning Fast',
    name: 'Ahmed R.',
    img: ahmed,
    text: "Excellent service! Got my dummy ticket in minutes, perfect for my Schengen visa application. Dummy Ticket 365 truly understands travelers' needs.",
  },
];

const Row = styled.div`
  display: flex;
  gap: 15px;
  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
`;

export default function Testimonials() {
  return (
    <PrimarySection pt="0px" pb="100px">
      <Container>
        <SectionTitle
          textAlign="center"
          subtitle="What our customers say about us"
          mb="50px"
        >
          Testimonials
        </SectionTitle>
        <Row>
          {testimonials.map((test, i) => (
            <TestimonialCard
              key={i}
              title={test.title}
              name={test.name}
              src={test.img}
            >
              {test.text}
            </TestimonialCard>
          ))}
        </Row>
      </Container>
    </PrimarySection>
  );
}
