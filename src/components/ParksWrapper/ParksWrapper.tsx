import React from "react";
import "./ParksWrapper.css";
import { ParkCards, ParkProps } from "../ParkCards/ParkCards";
import HeroImage from "../HeroImage/HeroImage";

interface ParksWrapperProps {
  parks: ParkProps[];
  favorites: ParkProps[];
  setFavorites: (favorites: ParkProps[]) => void;
}

function ParksWrapper({ parks, favorites, setFavorites }: ParksWrapperProps) {
  const natParkCards = parks.filter(
    (park) => park.designation === "National Park"
  );
  const parkCards = natParkCards.map((park) => {
    return (
      <ParkCards
        park={park}
        key={park.parkCode}
        favorites={favorites}
        setFavorites={setFavorites}
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
