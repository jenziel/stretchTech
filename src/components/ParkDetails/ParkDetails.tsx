import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getIndividualPark } from '../../ApiCalls';
import './ParkDetails.css';

interface ParkDetailsProps {
  parkCode: string;
  fullName: string;
  description: string;
  activities: Array<{ id: string; name: string }>;
  images: Array<{ url: string; altText: string }>;
}

function ParkDetails() {
  const { parkCode } = useParams<{ parkCode: string }>();
  const [park, setPark] = useState<ParkDetailsProps | null>(null);

  useEffect(() => {
    console.log('Fetching data for park with parkCode:', parkCode);
    getIndividualPark(parkCode)
      .then(data => {
        console.log('Fetched data:', data); //console dont forget to remove
        if (data && data.data && data.data.length > 0) {
          setPark(data.data[0]);
        }
      })
      .catch(error => {
        console.error("Failed to fetch individual park:", error);
      });
  }, [parkCode]);

  if (!park) {
    return <div className="error">Park information is not available.</div>;
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
        {randomImage && <img src={randomImage.url} alt={randomImage.altText} />}
      </div>
    </div>
  );
}

export default ParkDetails;
