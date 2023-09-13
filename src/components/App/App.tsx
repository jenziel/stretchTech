import React, { useEffect, useState } from "react";
import "./App.css";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import ParksWrapper from "../ParksWrapper/ParksWrapper";
import ParkDetails from '../ParkDetails/ParkDetails';
import Favorites from '../Favorites/Favorites';
import Header from "../Header/Header"
import { getParksData, getIndividualPark } from '../../ApiCalls';
import { Routes, Route } from 'react-router-dom';

interface Image {
  url: string;
  altText: string;
}

interface Park {
  id: string;
  name: string;
  parkCode: string;
  fullName: string;
  designation: string;
  images: Image[];
}

interface AppState {
  parks: Park[];
  isLoading: boolean;
  newError: string;
  favorites: Park[];
}
        
function App() {
  const [parks, setParks] = useState<AppState["parks"]>([]);
  const [isLoading, setIsLoading] = useState<AppState["isLoading"]>(true);
  const [newError, setError] = useState<AppState["newError"]>("");
  const [favorites, setFavorites] = useState<AppState["favorites"]>([]);

  useEffect(() => {
    getParksData()
      .then((data: any) => {
        if (data && data.data) {
          setParks(data.data as Park[]);
          setError("");
          setIsLoading(false);
        }
      })
      .catch((error: any) => {
        setError(error.message || "Failed to fetch parks!");
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log("Parks fetched:", parks);
  }, [parks]);

  return (
    <main className="App">
      <Header />
      {newError ? (
        <ErrorComponent error={{ message: newError }} />
      ) : isLoading ? (
        <LoadingComponent />
      ) : (
        <Routes>
          {/* <Route path="/:id" element={<ParkDetails park={individualPark} />} /> */}
          <Route path="/favorites" element={<Favorites favorites={favorites} />} />
          <Route path="/error" element={<ErrorComponent error={{ message: newError }} />} />
          <Route path="/" element={<ParksWrapper parks={parks} />} />
          <Route path="/park/:parkCode" element={<ParkDetails />} />
        </Routes>
      )}
    </main>
  );
};


export default App;
