import React from 'react';
import './ParksWrapper.css';

interface ParkWrapperProps {
  park: {
    id: string;
    fullName: string;
    description: string;
    activities: Array<{ id: string; name: string }>;
  } | null;
}

const ParkWrapper: React.FC<ParkWrapperProps> = ({ park }) => {
  //I'm defining a new React functional component. This component expects to receive props that match the ParkWrapperProps interface above. TypeScript will enforce it.
  if (!park) {
    return <div className="error">Park information is not available.</div>;
  }

  if (!park.activities || park.activities.length === 0) {
    return (
      <div className="park-wrapper">
        <h1>{park.fullName}</h1>
        <p>{park.description}</p>
        <h2>Activities</h2>
        <p>No activities available for this park.</p>
      </div>
    );
  }

  return (
    <div className="park-wrapper">
      <h1>{park.fullName}</h1>
      <p>{park.description}</p>
      <h2>Activities</h2>
      <ul>
        {park.activities.map((activity) => (
          <li key={activity.id}>{activity.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ParkWrapper;
