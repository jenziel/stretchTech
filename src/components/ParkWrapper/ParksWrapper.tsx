import React from 'react';
import './ParksWrapper.css'

interface ParkWrapperProps {
    parkId: string;
    parkName: string;
  }
  
  const ParkWrapper: React.FC<ParkWrapperProps> = (props) => {
    // Component logic here
    
    return (
      // JSX goes here
    );
  }
  
  return (
    <div>
      <h1>This is the ParkWrapper component.</h1>
    </div>
  );
  
  export default ParkWrapper;
