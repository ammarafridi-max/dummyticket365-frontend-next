'use client';
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFlights } from '../../../_redux/slices/fetchFlights';
import FlightCard from '../../../_components/FlightCard/FlightCard';
import PrimaryButton from '../../../_components/PrimaryButton';
import Error from '../../../_components/Error';
import Skeleton from '../../../_components/FlightCard/Skeleton';
import FlightError from '../../../_components/FlightError';

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
      <Helmet>
        <title>Select Your Flight</title>
      </Helmet>
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
