import { faqArray } from '@/_assets/data/faqs';
import PrimarySection from '../../_components/PrimarySection';
import Container from '../../_components/Container';
import PageTitle from '../../_components/PageTitle';
import FAQAccordion from '../../_components/FAQAccordion';

export const metadata = {
  title: 'Privacy Policy',
  description:
    'Commonly asked important questions about dummy tickets and Dummy Ticket 365, answered with clarity.',
};

export default function FAQ() {
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
