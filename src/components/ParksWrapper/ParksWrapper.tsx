import React from 'react';
import './ParksWrapper.css';

interface ParksWrapperProps {
  park: {
    id: string;
    fullName: string;
    description: string;
    activities: Array<{ id: string; name: string }>;
  } | null;
}

function ParksWrapper(props: ParksWrapperProps) {
  const { park } = props;

  if (!park) {
    return <div className="error">Park information is not available.</div>;
  }

  if (!park.activities || park.activities.length === 0) {
    return (
      <div className="parks-wrapper">
        <h1>{park.fullName}</h1>
        <p>{park.description}</p>
        <h2>Activities</h2>
        <p>No activities available for this park.</p>
      </div>
    );
  }

  return (
    <div className="parks-wrapper">
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
}

export default ParksWrapper;
