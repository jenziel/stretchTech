import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import { getIndividualPark, ParkData } from "../../ApiCalls";
import Activities from "./Activities";
import RandomImage from "./RandomImage";
import AdditionalInfo from "./AdditionalInfo";
import EntranceFees from "./EntranceFees";
import ContactUs from "./ContactUs";
import "./ParkDetails.css";

interface ParkDetailsProps {
  setIsLoading: (isLoading: boolean) => void;
}

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
        setIsLoading(false);
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
  return (
    <div className='park-details'>
      <div className='button-container'>
        <Link to='/' className='back-button'>
          Back to Home
        </Link>
      </div>
      <div className='image-section'>
        <RandomImage randomImage={randomImage} />
        <h1 className='park-description'>{park.fullName}</h1>
        <div className='top-section-container'>
          <p>
            <strong>Location:</strong> {park.states}
          </p>
          <p>{park.description}</p>
          <div className='lower-section-container'>
            <div className='left-side'>
              <Activities activities={park.activities} />
              <AdditionalInfo park={park} />
            </div>
            <div className='right-side'>
              <ContactUs park={park} />
              <EntranceFees
                fees={park.entranceFees}
                toggleVisibility={toggleFeeVisibility}
                visibleFees={visibleFees}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ParkDetails;
