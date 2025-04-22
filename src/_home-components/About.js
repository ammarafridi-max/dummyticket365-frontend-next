'use client';
import styled from 'styled-components';
import PrimarySection from '../components/PrimarySection';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import Paragraph from '../components/Paragraph';
import Image from 'next/image';
import trustpilot from '../assets/images/trustpilot.png';
import travelIcon from '../assets/images/travel-icon.png';
import happyTraveler1 from '../assets/images/happy-traveler1.png';
import happyTraveler2 from '../assets/images/happy-traveler2.png';
import { BedDouble, ShieldPlus, TicketsPlane } from 'lucide-react';

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  gap: 20px;
  @media screen and (max-width: 991px) {
    display: block;
  }
`;

const LeftContainer = styled.div`
  width: 58%;
  padding: 0px;
  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;

export default function About() {
  return (
    <PrimarySection id="about" pt="0" pb="100px">
      <StyledContainer>
        <LeftContainer>
          <SectionTitle mb="30px" subtitle="About Dummy Ticket 365">
            Who We Are
          </SectionTitle>
          <Paragraph fontSize="18px" color="black" mb="20px">
            Dummy Ticket 365 is a service of Travl Technologies LLC, a licensed
            travel agency based in Dubai, UAE. We offer air tickets, hotel
            bookings, travel insurance, dummy flight reservations for visas,
            airport transfers, tours, and holiday packages to thousands of
            satisfied customers annually.
          </Paragraph>
          <IconWithText
            icon={<TicketsPlane strokeWidth={1.75} />}
            title="Dummy Tickets"
            description="Dummy ticket are used as proof of onward travel for visa applications or airport requirements."
          />
          <IconWithText
            icon={<BedDouble strokeWidth={1.75} />}
            title="Hotel Reservations"
            description="Verifiable hotel bookings often required for visa applications, ensuring proof of stay."
          />
          <IconWithText
            icon={<ShieldPlus strokeWidth={1.75} />}
            title="Travel Insurance"
            description="Comprehensive policies covering medical emergencies, trip cancellations, and travel delays."
          />
        </LeftContainer>
        <Gallery />
      </StyledContainer>
    </PrimarySection>
  );
}

const GalleryContainer = styled.div`
  width: 42%;
  min-height: 250px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  padding: 0px;
  @media screen and (max-width: 991px) {
    min-height: 400px;
    margin-top: 50px;
    width: 100%;
  }
`;

const Col1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Col2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const SmallImage = styled.div`
  border-radius: 5px;
  height: 20%;
  padding: 20px;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const LargeImage = styled.div`
  background-color: white;
  border-radius: 5px;
  height: 80%;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

function Gallery() {
  return (
    <GalleryContainer>
      <Col1>
        <SmallImage>
          <Image
            src={trustpilot}
            alt="Dummy Ticket 365 has received over 50 reviews on Trustpilot, with an average rating of 4.5+"
            title="Dummy Ticket 365 on Trustpilot"
          />
        </SmallImage>
        <LargeImage>
          <Image
            src={happyTraveler1}
            alt="A happy couple receiving their Schengen visa thanks to the dummy ticket they bought with us."
            title="Book your flight reservation with Dummy Ticket 365"
          />
        </LargeImage>
      </Col1>
      <Col2>
        <LargeImage>
          <Image
            src={happyTraveler2}
            alt="A happy couple with their passports, dummy tickets, and other related documents, ready for their visa appointment"
            title="Happy couple ready for their visa appointment."
          />
        </LargeImage>
        <SmallImage>
          <Image
            src={travelIcon}
            alt="Dummy tickets, hotel reservations, and travel insurance"
            title="We provide all kinds of services for visa assistance."
          />
        </SmallImage>
      </Col2>
    </GalleryContainer>
  );
}

const IconContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 11fr;
  margin-top: 20px;
  @media screen and (max-width: 991px) {
    grid-template-columns: 2fr 10fr;
  }
`;

const IconDiv = styled.div`
  width: 40px;
  height: 40px;
  font-size: 20px;
  border-radius: 100px;
  background-color: var(--primary-color-500);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconWithText = ({ icon, title, description }) => (
  <IconContainer>
    <IconDiv>{icon}</IconDiv>
    <Paragraph fontSize="18px">
      <span className="semi-bold">{title}: </span>
      {description}
    </Paragraph>
  </IconContainer>
);

// function Gallery() {
//   return (
//     <div className={`col-12 col-md-6 col-lg-5 row mx-auto p-0 ${styles.gallery}`}>
//       <div className={styles.grid1}>
//         <div className={styles.img1}>
//           <a href="https://www.trustpilot.com/review/mydummyticket.ae" target="_blank">
//             Rated 4.5+ on <img src={trustpilot} className={styles.trustpilotIcon} />
//           </a>
//         </div>
//         <div className={styles.img2}>
//           <img src={happyTraveler1} />
//         </div>
//       </div>
//       <div className={styles.grid2}>
//         <div className={styles.img1}>
//           <img src={happyTraveler2} />
//         </div>
//         <div className={styles.img2}>
//           <img src={travelIcon} className={styles.travelIcon} />
//         </div>
//       </div>
//     </div>
//   );
// }
