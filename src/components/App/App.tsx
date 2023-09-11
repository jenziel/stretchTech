// import React from 'react';
import "./App.css";
import { useEffect, useState } from "react";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import ParksWrapper from "../ParksWrapper/ParksWrapper";

function App() {
  const [parks, setParks] = useState([]);
  const [individualPark, setIndividualPark] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [newError, setError] = useState("");

  function getParksData() {
    fetch(
      "https://developer.nps.gov/api/v1/parks?limit=500&api_key=88uiVoPed9zuR3daHPnsrPxaYV0ZWsiqP66VvpSc"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status.toString());
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.data) {
          setParks(data);
          setError("");
          // console.log('data:', data);
          // console.log('updated parks state', parks)
          setIsLoading(false);
        }
        
        
      })
      // .then((parks) => {
      //   if (parks.length > 0){
      //     console.log('parks:', parks)
      //   }
        
      // })
      .catch((response) => {
        setError(response || "failed to fetch parks!");
      });
  }

  useEffect(() => {
    getParksData();
  }, []);

  useEffect(() => {
    console.log('parks', parks)
  }, [parks])

  return (
    <div className="App">
      <main>
         {/* <Header /> */}
      {newError ? ( 
         <ErrorComponent />
       ) :  isLoading ? ( 
        <LoadingComponent /> 
        ) : (
          //Routes go here
          <h1>placeholder content</h1>
        )}
      </main>
    </div>
  );
}

export default App;
