'use client';
import { faqArray } from '@/assets/data/faqs';
import Container from '@/components/Container';
import FAQAccordion from '@/components/FAQAccordion';
import PageTitle from '@/components/PageTitle';
import PrimarySection from '@/components/PrimarySection';

export default function FAQStyled() {
  return (
    <PrimarySection py="50px">
      <Container>
        <PageTitle mb="30px" textAlign="center">
          Frequently Asked Questions
        </PageTitle>
        <div className="col-12 col-lg-10 p-0 mx-auto">
          {faqArray.map((faq, i) => (
            <FAQAccordion key={i} question={faq.question}>
              {faq.answer}
            </FAQAccordion>
          ))}
        </div>
      </Container>
    </PrimarySection>
  );
}
