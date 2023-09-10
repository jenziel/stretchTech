// import React from 'react';
import "./App.css";
import { useEffect, useState } from "react";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import LoadingComponent from "../LoadingComponent/LoadingComponent";

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
        console.log('data:', data);
        setParks(data);
        setIsLoading(false);
      })
      .then(() =>{
        console.log('parks:', parks)
      })
      .catch((response) => {
        setError(response || "failed to fetch parks!");
      });
  }
  useEffect(() => {
    getParksData();
  }, []);

  return (
    <div className="App">
      <LoadingComponent />
    </div>
  );
}

export default App;
