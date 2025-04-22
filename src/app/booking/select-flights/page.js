'use client';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFlights } from '../../../redux/slices/fetchFlights';
import FlightCard from '../../../components/FlightCard/FlightCard';
import PrimaryButton from '../../../components/PrimaryButton';
import Error from '../../../components/Error';
import Skeleton from '../../../components/FlightCard/Skeleton';
import FlightError from '../../../components/FlightError';
import Head from 'next/head';

export default function SelectFlights() {
  const dispatch = useDispatch();
  const { flights, session, status } = useSelector((state) => state.flights);
  const { formData } = useSelector((state) => state.ticketForm);
  const [maxFlights, setMaxFlights] = useState(5);
  const [expandedCardId, setExpandedCardId] = useState(null);

  const handleToggleExpand = (id) => {
    setExpandedCardId((prevId) => (prevId === id ? null : id));
  };

  useEffect(() => {
    dispatch(fetchFlights(formData));
  }, [dispatch, formData]);

  const showMoreFlights = () => {
    if (maxFlights < flights?.length) {
      setMaxFlights((cur) => cur + 5);
    }
  };

  return (
    <>
      <Head>
        <title>Select Flights</title>
      </Head>
      {status === 'loading' && (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      )}
      {status === 'succeeded' && flights?.length === 0 && (
        <Error>No flights available</Error>
      )}
      {status === 'succeeded' && flights?.length > 0 && (
        <>
          {flights.slice(0, maxFlights).map((flight, i) => (
            <FlightCard
              key={i}
              data={session}
              flight={flight}
              isExpanded={expandedCardId === i}
              onToggleExpand={() => handleToggleExpand(i)}
            />
          ))}
          {flights.length > maxFlights && (
            <div className="text-center">
              <PrimaryButton onClick={showMoreFlights}>
                More Flights
              </PrimaryButton>
            </div>
          )}
        </>
      )}
      {status === 'failed' && <FlightError />}
    </>
  );
}

// const excludedAirlines = [];

// function getFilteredFlights(flights) {
//   return flights.filter((flight) =>
//     flight.itineraries.every((itinerary) =>
//       itinerary.segments.every(
//         (segment) => !excludedAirlines.includes(segment.carrierCode)
//       )
//     )
//   );
// }

// const filteredFlight = getFilteredFlights(flights);
