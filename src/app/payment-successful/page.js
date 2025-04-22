'use client';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useSearchParams } from 'react-router-dom';
import { baseURL } from '@/config';
import { analytics, trackPurchaseEvent } from '@/utils/analytics';
import styles from './PaymentSuccess.module.css';
import PrimarySection from '@/components/PrimarySection';
import Loading from '@/components/Loading';
import Container from '@/components/Container';
import PageTitle from '@/components/PageTitle';

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('sessionId');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [ticketData, setTicketData] = useState({});
  const currency = ticketData?.amountPaid?.currency;
  const amount = ticketData?.amountPaid?.amount;

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const res = await fetch(`${baseURL}/api/ticket/${sessionId}`);
        if (!res.ok) throw new Error('Could not fetch data');
        const data = await res.json();
        setError(false);
        setTicketData(data.data);
        analytics.track('dummy_ticket_purchase', {
          currency: ticketData?.amountPaid?.currency,
          price: ticketData?.amountPaid?.amount,
        });
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [sessionId]);

  if (isLoading) return <Loading />;

  return (
    <>
      <Helmet>
        <title>Payment Successfully Processed</title>
        <meta
          name="description"
          content="Your payment has been successfully processed. Thank you for booking with us!"
        />
      </Helmet>
      <PrimarySection pb="50px" pt="100px" mb="0">
        <Container>
          {error ? (
            <Error />
          ) : (
            <Success
              currency={currency}
              amount={amount}
              sessionId={sessionId}
            />
          )}
        </Container>
      </PrimarySection>
    </>
  );
}

function Error() {
  return (
    <div className={styles.errorContainer}>
      <PageTitle>Payment Not Found!</PageTitle>
      <p>We could not locate a payment associated with your transaction.</p>
      <p>
        If you’ve already made a payment, please contact us with your
        transaction details at info@dummyticket365.com.
      </p>
    </div>
  );
}

function Success({ currency, amount, sessionId }) {
  useEffect(() => {
    if (currency && amount) {
      console.log(currency, amount);
      trackPurchaseEvent(currency, amount, sessionId);
    }
  }, [currency, amount, sessionId]);

  return (
    <>
      <PageTitle textAlign="center">Thank You for Your Booking!</PageTitle>
      <div className={styles.Text}>
        <p>
          Your payment of{' '}
          <strong>
            {currency} {amount}
          </strong>{' '}
          has been successfully processed.
        </p>
        <p>
          You will recieve a receipt of your payment by email, followed by your
          dummy ticket in a second email shortly afterwards. Please remember to
          check your Spam folder too.
        </p>
      </div>
    </>
  );
}
