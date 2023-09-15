import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ErrorComponent from '../ErrorComponent/ErrorComponent';
import { getIndividualPark, ParkData } from '../../ApiCalls';
import './ParkDetails.css';

function ParkDetails() {
  const { parkCode } = useParams<{ parkCode: string }>();
  const [park, setPark] = useState<ParkData | null>(null);

  useEffect(() => {
    if (!parkCode) return;
    console.log('Fetching data for park with parkCode:', parkCode); //console. don't forget to delete
    getIndividualPark(parkCode)
      .then(data => {
        console.log('Fetched data:', data); //console. 
        setPark(data);
      })
      .catch(error => {
        console.error("Failed to fetch individual park:", error);//console. don't forget to delete
      });
  }, [parkCode]);

  if (!park) {
    return <ErrorComponent error={{ message: "Park information is not available." }} />;
  }
  const randomImage = park && park.images[Math.floor(Math.random() * park.images.length)];

  return (
    <div className="park-details">
      <h1>{park.fullName}</h1>
      <p>{park.description}</p>
      <Link to="/" className="back-button">
        Back to Home
      </Link>
      <div className="activities">
        <h2>Activities</h2>
        <ul>
          {park.activities.map((activity) => (
            <li key={activity.id}>{activity.name}</li>
          ))}
        </ul>
      </div>
      <h2>Random Image</h2>
      <div className="image-gallery">
        {randomImage && <img
          src={randomImage.url}
          alt={randomImage.altText}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/bearError.png";
          }}
        />}
      </div>
      <div className="additional-info">
        <h2>Additional Information</h2>
        <p><strong>Entrance Hours:</strong></p>
        <ul>
          {Object.entries(park.operatingHours[0].standardHours).map(([day, hours]) => (
            <li key={day}>{`${day.charAt(0).toUpperCase() + day.slice(1)}: ${hours}`}</li>
          ))}
        </ul>
        <p><strong>Location (State):</strong> {park.states}</p>
        <p><strong>Entrance Fees:</strong> {park.entranceFees.map(fee => `$${fee.cost}`).join(', ')}</p>
        <p><strong>Address:</strong> {park.addresses.map(address => address.line1).join(', ')}</p>
        <p><strong>Phone Number:</strong> {park.contacts.phoneNumbers.map(phone => phone.phoneNumber).join(', ')}</p>
        <p><strong>Directions:</strong> <a href={park.directionsUrl} target="_blank" rel="noopener noreferrer">Click here for directions</a></p>
      </div>
    </div>
  );
}

export default ParkDetails;