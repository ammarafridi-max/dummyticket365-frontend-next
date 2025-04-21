import About from '@/_home-components/About';
import Benefits from '@/_home-components/Benefits';
import Contact from '@/_home-components/Contact';
import FAQ from '@/_home-components/FAQ';
import Hero from '@/_home-components/Hero';
import Process from '@/_home-components/Process';
import Testimonials from '@/_home-components/Testimonials';

const canonicalUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://www.dummyticket365.com';

export const metadata = {
  title: 'Dummy Ticket 365 | Verifiable Dummy Tickets From USD 12',
  description:
    'Verifiable and legitimate dummy tickets from $12. Book yours now with Dummy Ticket 365 and get it instantly.',
  alternates: {
    canonical: canonicalUrl,
  },
};

export default function Home() {
  return (
    <div>
      <Hero />
      <Process />
      <About />
      <Benefits />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
}
