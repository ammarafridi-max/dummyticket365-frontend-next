'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { baseURL } from '@/config';
import { analytics, trackPurchaseEvent } from '@/utils/analytics';
import { Check, X } from 'lucide-react';
import PrimarySection from '@/components/PrimarySection';
import Loading from '@/components/Loading';
import Container from '@/components/Container';
import PageTitle from '@/components/PageTitle';
import styled from 'styled-components';
import Head from 'next/head';
import Paragraph from '@/components/Paragraph';

export default function PaymentSuccessStyled() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('sessionId');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [ticketData, setTicketData] = useState(null);
  const currency = ticketData?.currency;
  const amount = ticketData?.amount;

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `${baseURL}/api/ticket/${sessionId}/payment-info`
        );

        if (!res.ok) throw new Error('Payment not processed');

        const json = await res.json();

        setTicketData(json.data);
      } catch (err) {
        console.error('Error:', err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    if (sessionId) fetchData();
  }, [sessionId]);

  if (isLoading) return <Loading />;

  if (error) return <Error />;

  return <Success currency={currency} amount={amount} sessionId={sessionId} />;
}

function Error() {
  return (
    <PrimarySection pt="50px">
      <Container>
        <IconContainer type="error">
          <X />
        </IconContainer>
        <PageTitle textAlign="center" mb="20px">
          Payment Not Found!
        </PageTitle>
        <Paragraph textAlign="center" fontSize="22px" mb="15px">
          We could not locate a payment associated with your transaction.
        </Paragraph>
        <Paragraph textAlign="center" fontSize="22px">
          If you’ve already made a payment, please contact us with your
          transaction details at info@dummyticket365.com.
        </Paragraph>
      </Container>
    </PrimarySection>
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
    <PrimarySection pt="50px">
      <Container>
        <IconContainer type="success">
          <Check />
        </IconContainer>
        <PageTitle textAlign="center" mb="20px">
          Thank You for Your Booking!
        </PageTitle>
        <Paragraph textAlign="center" fontSize="22px" mb="15px">
          Your payment of{' '}
          <strong>
            {currency} {amount}
          </strong>{' '}
          has been successfully processed.
        </Paragraph>
        <Paragraph textAlign="center" fontSize="22px">
          You will recieve a receipt of your payment by email, followed by your
          dummy ticket in a second email shortly afterwards. Please remember to
          check your Spam folder too.
        </Paragraph>
      </Container>
    </PrimarySection>
  );
}

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 130px;
  border-radius: 100%;
  margin: 0 auto;
  margin-bottom: 30px;
  background-color: ${({ type }) => {
    if (type === 'success') return '#e5f3eb';
    if (type === 'error') return '#ffcccc';
  }};
  & svg {
    width: 70px !important;
    height: 70px !important;
    color: ${({ type }) => {
      if (type === 'success') return '#00702e';
      if (type === 'error') return '#990000';
    }};
  }
`;
