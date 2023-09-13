import React from 'react';
import { Link } from 'react-router-dom';
import './ParkCards.css';

interface ParkProps {
  parkCode: string;
  fullName: string;
  images: Array<{ url: string; altText: string }>;
  designation: string;
}

function ParkCards({ park }: { park: ParkProps }) {
  if (!park || !park.images) {
    return <div>Error: Park information is not available.</div>;
  }

  return (
    <Link to={`/park/${park.parkCode}`}> 
      <div className='park-card'>
        <h3>{park.fullName}</h3>
        <div className="image-gallery">
          {park.images.slice(0, 1).map((image, index) => (
            <div key={index}>
              <img
                src={image.url}
                alt={image.altText}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/logo.svg";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}

export { ParkCards };
export type { ParkProps };
