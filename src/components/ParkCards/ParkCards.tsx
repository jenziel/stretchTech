import React from 'react';
import './ParkCards.css';
import { Link } from 'react-router-dom';

interface ParkProps {
  id: string;
  fullName: string;
  images: Array<{ url: string; altText: string }>;
}

function ParkCards({ park }: { park: ParkProps }) {
  if (!park || !park.images) {
    return <div>Error: Park information is not available.</div>;
  }

  return (
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
  );
}

export { ParkCards };
export type { ParkProps };
