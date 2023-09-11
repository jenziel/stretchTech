// import React from 'react';
// import './ParksWrapper.css';
// import '../ParkCards/ParkCards';

// interface ParksWrapperProps {
//   parks: Array<{
//     id: string;
//     fullName: string;
//     description: string;
//     activities: Array<{ id: string; name: string }>;
//   }> | null;
// }

// function ParksWrapper(props: ParksWrapperProps) {
//   const { parks } = props;

//   if (!parks || parks.length === 0) {
//     return <div className="error">No park information is available.</div>;
//   }

//   return (
//     <div className="parks-wrapper">
//       {parks.map((park) => (
//         <div key={park.id}>
//           <h1>{park.fullName}</h1>
//           <p>{park.description}</p>
//           <h2>Activities</h2>
//           {park.activities && park.activities.length > 0 ? (
//             <ul>
//               {park.activities.map((activity) => (
//                 <li key={activity.id}>{activity.name}</li>
//               ))}
//             </ul>
//           ) : (
//             <p>No activities available for this park.</p>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ParksWrapper;

import React from 'react';
import './ParksWrapper.css';
import { ParkCards, ParkProps } from '../ParkCards/ParkCards';

function ParksWrapper({ parks }: { parks: ParkProps[] }) {
  const parkCards = parks.map(park => {
    return (
      <ParkCards
        park={park}
        key={park.id}
      />
    );
  });

  return (
    <div className='parks-container'>
      {parkCards}
    </div>
  );
}

export default ParksWrapper;

