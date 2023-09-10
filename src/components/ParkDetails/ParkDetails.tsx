import React from 'react';
import './ParkDetails.css';

interface ParkDetailsProps {
  park: {
    id: string;
    fullName: string;
    description: string;
    activities: Array<{ id: string; name: string }>;
    images: Array<{ url: string; altText: string }>;
  } | null;
}

function ParkDetails(props: ParkDetailsProps) {
  const { park } = props;

  if (!park) {
    return <div className="error">Park information is not available.</div>;
  }

  return (
    <div className="park-details">
      <h1>{park.fullName}</h1>
      <p>{park.description}</p>
      <h2>Activities</h2>
      <ul>
        {park.activities.map((activity) => (
          <li key={activity.id}>{activity.name}</li>
        ))}
      </ul>
      <h2>Images</h2>
      <div className="image-gallery">
        {park.images.map((image, index) => (
          <div key={index}>
            <img src={image.url} alt={image.altText} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ParkDetails;
