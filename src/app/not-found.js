'use client';
import PrimaryButton from '@/components/PrimaryButton';
import Container from '@/components/Container';
import PrimarySection from '@/components/PrimarySection';
import styled from 'styled-components';

const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 991px) {
    display: block;
  }
`;

const Title = styled.h1`
  text-align: center;
  color: var(--primary-color-dark);
  font-size: 80px;
  font-weight: 700;
  margin: 0;
  padding: 0;
  @media screen and (max-width: 991px) {
    font-size: 50px;
    text-align: left !important;
  }
`;

const Subtitle = styled.h2`
  text-align: center;
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 20px;
  @media screen and (max-width: 991px) {
    font-size: 20px;
    margin: 20px 0 30px 0;
    text-align: left;
  }
`;

export default function PageNotFound() {
  return (
    <PrimarySection py="75px">
      <Wrapper>
        <Title>404 Error!</Title>
        <Subtitle>
          Sorry, but the page you're looking for doesn't exist.
        </Subtitle>
        <PrimaryButton href="/">Back To Home</PrimaryButton>
      </Wrapper>
    </PrimarySection>
  );
}
