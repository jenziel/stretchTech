import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import { getIndividualPark, ParkData } from "../../ApiCalls";
import Activities from "./Activities";
import RandomImage from "./RandomImage";
import AdditionalInfo from "./AdditionalInfo";
import EntranceFees from "./EntranceFees";
import "./ParkDetails.css";
import stateData from './stateData';
// import handleStateData from "./stateData"
// import { handleStateProps, StateDataProps, handleStateDataFunction } from "./stateData";

interface ParkDetailsProps {
  setIsLoading: (isLoading: boolean) => void;
}
interface StateDataProps {
  abbreviation: string;
  fullName: string;
}

interface handleStateProps {
  twoLetterState: string;
  stateData: StateDataProps[];
}
interface handleStateDataFunction {
(twoLetterState: string, stateData: StateDataProps[]): string;
}
// function ParkDetails({ setIsLoading }: ParkDetailsProps) {
  function ParkDetails({ setIsLoading }: ParkDetailsProps) {
  const { parkCode } = useParams<{ parkCode: string }>();
  const [park, setPark] = useState<ParkData | null>(null);
  const [visibleFees, setVisibleFees] = useState<{ [key: string]: boolean }>(
    {}
  );
  // setIsLoading(true)
  useEffect(() => {
    if (!parkCode) return;
    getIndividualPark(parkCode)
      .then((data) => {
        setPark(data);
        // setIsLoading(false);
      })
      // .then(() => setIsLoading(false))
      .catch((error) => {
        console.error("Failed to fetch individual park:", error);
      });
  }, [parkCode]);

  const toggleFeeVisibility = (index: string) => {
    setVisibleFees((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  if (!park) {
    return (
      <ErrorComponent
        error={{ message: "Park information is not available." }}
      />
    );
  }

  const randomImage =
    park && park.images[Math.floor(Math.random() * park.images.length)];

  const handleStateData = ({twoLetterState, stateData}: handleStateProps) => {    
      const foundState = stateData.find((state) => state.abbreviation === twoLetterState);
      return foundState ? foundState.fullName : 'Not Found';
      }


  const fullStateName = handleStateData(park.states, stateData);
  return (
    <div className='park-details'>
      <div className='button-container'>
        <Link to='/' className='back-button'>
          Back to Home
        </Link>
      </div>

      <RandomImage randomImage={randomImage} />
      <h1>{park.fullName}</h1>
      <p><strong>Location:</strong> {fullStateName}</p>
      <p>{park.description}</p>
      <div className='section-container'>
        <Activities activities={park.activities} />
        <AdditionalInfo park={park} />
      </div>
      <EntranceFees
        fees={park.entranceFees}
        toggleVisibility={toggleFeeVisibility}
        visibleFees={visibleFees}
      />
    </div>
  );
}
export default ParkDetails;
