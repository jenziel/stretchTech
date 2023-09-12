import React from "react";
import "./ParksWrapper.css";
import { ParkCards, ParkProps } from "../ParkCards/ParkCards";
import HeroImage from "../HeroImage/HeroImage";

function ParksWrapper({ parks }: { parks: ParkProps[] }) {
  const parkCards = parks.map(park => {
    return (
      <ParkCards
        park={park}
        key={park.parkCode}
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
