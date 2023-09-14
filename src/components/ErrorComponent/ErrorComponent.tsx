import React, { useState, useEffect } from 'react';
import "./ErrorComponent.css";
import { NavLink } from 'react-router-dom';
import ErrorBear from "../../images/ErrorBear.png";
import Groundhog from "../../images/groundhog.png";

const animalFacts = [
  "Bison in Yellowstone National Park: Bison are the largest land mammals in North America, and Yellowstone National Park is home to one of the largest wild bison populations. These massive creatures can weigh up to 2,000 pounds!",
  "Elk in Rocky Mountain National Park: Rocky Mountain National Park is famous for its population of elk. During the fall rut (breeding season), male elk, called bulls, bugle to attract females. Their bugling calls can be heard echoing through the park.",
  "Grizzly Bears in Glacier National Park: Glacier National Park in Montana is one of the few places in the U.S. where you can spot grizzly bears. These powerful predators are known for their distinctive hump of muscle on their shoulders.",
  "Sea Turtles in Dry Tortugas National Park: Dry Tortugas National Park in Florida is home to several species of sea turtles, including loggerhead and green turtles. These ancient reptiles can live for decades and are known for their long migrations",
  "Peregrine Falcons in Yosemite National Park: Yosemite National Park is home to peregrine falcons, one of the fastest birds in the world. They can reach speeds of up to 240 miles per hour when diving to catch prey.",
  "Manatees in Everglades National Park: Everglades National Park in Florida is a haven for manatees. These gentle, slow-moving marine mammals are often called 'sea cows' and are known for their herbivorous diet.",
  "Wolves in Denali National Park: Denali National Park in Alaska is home to gray wolves. These intelligent and social animals play a crucial role in the park's ecosystem.",
  "Condors in Grand Canyon National Park: The California condor, one of the rarest birds in the world, can be seen soaring over the Grand Canyon. Efforts to reintroduce these magnificent birds have been successful in the park",
  "Alligators in Everglades National Park: Everglades National Park is famous for its alligator population. These reptiles are skilled hunters and can be found throughout the park's wetlands.",
  "Bald Eagles in Acadia National Park: Acadia National Park in Maine is a great place to spot bald eagles. These majestic birds of prey are known for their distinctive white head and tail feathers."
];

interface ErrorComponentProps {
  error: {
    message: string;
    statusCode?: number;
  } | null;
}

function ErrorComponent(props: ErrorComponentProps) {
  const [randomFact, setRandomFact] = useState('');
  console.log("ErrorComponent received props: ", props); //console. delete after you are done
  const { error } = props;

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * animalFacts.length);
    setRandomFact(animalFacts[randomIndex]);
  }, []);



  return (
    <div className='error-msg'>
      <h1>Oops! We're looking for it!</h1>
      <img src={Groundhog} alt='Groundhog'></img>
  
      {/* Display dynamic error message or a default one */}
      <h2>{error ? error.message : 'Something went wrong.'}</h2>
  
      {/* Optionally display status code */}
      {error && error.statusCode && <p>Status Code: {error.statusCode}</p>}
  
      {/* Random Animal Fact */}
      <h2>Random Animal Fact:</h2>
      <div className="fact-box"> 
        <h3>{randomFact}</h3>
      </div>
  
      {/* Other dynamic content based on error information */}
      {error && error.statusCode && (
        <div className="error-info">
          <p>Server Response Status: {error.statusCode}</p>
          <p>Error Message: {error.message}</p>
        </div>
      )}
  
      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <button className="go-home-button" aria-label="Go back to the home page">Go Back to Home Page</button>
      </NavLink>
    </div>
  );  
}

export default ErrorComponent;