import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ErrorComponent from '../ErrorComponent/ErrorComponent';
import { getIndividualPark, ParkData } from '../../ApiCalls';
import Activities from './Activities';
import RandomImage from './RandomImage';
import AdditionalInfo from './AdditionalInfo';
import EntranceFees from './EntranceFees';
import LoadingComponent from '../LoadingComponent/LoadingComponent';

import './ParkDetails.css';

interface ParkDetailsProps {
  setIsLoading: (isLoading: boolean) => void;
}
function ParkDetails({setIsLoading}: ParkDetailsProps) {
  
  const { parkCode } = useParams<{ parkCode: string }>();
  const [park, setPark] = useState<ParkData | null>(null);
  const [visibleFees, setVisibleFees] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    if (!parkCode) return;
    getIndividualPark(parkCode)
      .then(data => {
        setPark(data)
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Failed to fetch individual park:", error);
      });
  }, [parkCode]);

  const toggleFeeVisibility = (index: string) => {
    setVisibleFees(prev => ({ ...prev, [index]: !prev[index] }));
  };

  if (park === null) {
    return <LoadingComponent />;
  }
  if (!park) {
    return <ErrorComponent error={{ message: "Park information is not available." }} />;
  }
  
  const randomImage = park && park.images[Math.floor(Math.random() * park.images.length)];
  return (
    <div className="park-details">
      <h1>{park.fullName}</h1>
      <p className="park-description">{park.description}</p>
      <Link to="/" className="back-button">
        Back to Home
      </Link>
      <div className="section-container">
        <Activities activities={park.activities} />
        <RandomImage randomImage={randomImage} />
        <AdditionalInfo park={park} />
      </div>
      <EntranceFees fees={park.entranceFees} toggleVisibility={toggleFeeVisibility} visibleFees={visibleFees} />
    </div>
  );
}
export default ParkDetails;