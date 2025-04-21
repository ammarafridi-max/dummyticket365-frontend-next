'use client';
import { faqArray } from '@/_assets/data/faqs';
import styled from 'styled-components';
import SectionTitle from '../_components/SectionTitle';
import PrimarySection from '../_components/PrimarySection';
import Container from '../_components/Container';
import FAQAccordion from '../_components/FAQAccordion';
import PrimaryButton from '../_components/PrimaryButton';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default function FAQ() {
  return (
    <PrimarySection id="faq" pt="0px" pb="100px">
      <Container>
        <SectionTitle
          textAlign="center"
          subtitle="Common questions about dummy tickets"
          mb="50px"
        >
          Frequently Asked Questions
        </SectionTitle>
        {faqArray.map((faq, i) => {
          while (i < 6) {
            return (
              <FAQAccordion key={i} question={faq.question}>
                {faq.answer}
              </FAQAccordion>
            );
          }
        })}
        <ButtonContainer>
          <PrimaryButton as="a" mt="30px" href="/faq">
            Read More FAQs
          </PrimaryButton>
        </ButtonContainer>
      </Container>
    </PrimarySection>
  );
}
