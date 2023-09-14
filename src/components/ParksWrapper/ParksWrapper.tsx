import React from "react";
import "./ParksWrapper.css";
import { ParkCards, ParkProps } from "../ParkCards/ParkCards";
import HeroImage from "../HeroImage/HeroImage";

interface ParksWrapperProps {
  parks: ParkProps[];
  favorites: ParkProps[]; // Define favorites as a prop
  setFavorites: (favorites: ParkProps[]) => void; // Define setFavorites as a prop if needed
}

function ParksWrapper({ parks, favorites, setFavorites }: ParksWrapperProps) {
  
  const natParkCards = parks.filter((park) => park.designation === 'National Park')
  const parkCards = natParkCards.map(park => {
    console.log('park', park)
    return (
      <ParkCards
        park={park}
        key={park.parkCode}
        favorites={favorites} // Pass favorites as a prop
        setFavorites={setFavorites} // Pass setFavorites as a prop
      />
    );
  });

  return (
    <div className='App'>
      <HeroImage />
      <div className='parks-container'>{parkCards}</div>
    </div>
  );
}

export default ParksWrapper;
