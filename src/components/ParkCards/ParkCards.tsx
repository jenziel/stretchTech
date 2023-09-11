// import "./ParkCards.css";

// interface ParkCardProps {
//   park: {
//     total: string;
//     limit: string;
//     start: string;
//     data: [
//       {
//         id: string;
//         fullName: string;
//         images: Array<{
//           credit: string;
//           title: string;
//           altText: string;
//           caption: string;
//           url: string;
//         }>;
//       }
//     ];
//   };
// }

// function ParkCard(props: ParkCardProps) {
//   const { park } = props;
//   return (
//     // router: make div => link and to= path to park details
//     <div className="park-card">
//       {/* <img className="park-card-img" src={park.data.images[0].url} />
//       <h3 className="park-card-name">{park.fullName}</h3>
//       <button className="park-card-favorite">img here</button> */}
//     </div>
//   );
// }

// export default ParkCard;

import React from 'react';
import './ParkCards.css';
// import errorImage from '../images/logo.svg'; 

interface ParkProps {
  id: string;
  fullName: string;
  description: string;
  url: string;
  activities: Array<{ id: string; name: string }>;
  images: Array<{ url: string; altText: string }>;
}

function ParkCards({ park }: { park: ParkProps }) {
  if (!park || !park.activities || !park.images) {
    return <div>Error: Park information is not available.</div>;
  }

  return (
    <div className='park-card'>
      <h3>{park.fullName}</h3>
      <p>{park.description}</p>
      <a href={park.url} target="_blank" rel="noopener noreferrer">Learn More</a>
      <h4>Activities</h4>
      <ul>
        {park.activities.map(activity => (
          <li key={activity.id}>{activity.name}</li>
        ))}
      </ul>
      <div className="image-gallery">
        {park.images.map((image, index) => (
          <div key={index}>
            <img
              src={image.url}
              alt={image.altText}
              onError={(e) => {
                e.currentTarget.onerror = null;
                // e.currentTarget.src = errorImage;
                e.currentTarget.src = "/logo192.png"; 
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
