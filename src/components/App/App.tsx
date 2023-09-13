import React, { useEffect, useState } from "react";
import "./App.css";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import Error404 from "../ErrorComponent/Error404";
import Error500 from "../ErrorComponent/Error500";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import ParksWrapper from "../ParksWrapper/ParksWrapper";
import ParkDetails from '../ParkDetails/ParkDetails';
import Favorites from '../Favorites/Favorites';
import Header from "../Header/Header"
import { getParksData } from '../../ApiCalls';
import { Routes, Route, Navigate } from 'react-router-dom';

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
}
        
function App() {
  const [parks, setParks] = useState<AppState["parks"]>([]);
  const [isLoading, setIsLoading] = useState<AppState["isLoading"]>(true);
  const [newError, setError] = useState<AppState["newError"]>("");

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
    console.log("Parks fetched:", parks);// console. dont forget to delete this useEffect.
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
          {/* <Route path="/favorites" element={<Favorites parks={parks} />} /> */}
          <Route path="/error" element={<ErrorComponent error={{ message: newError }} />} />
          <Route path="/500" element={<Error500 />} />
          <Route path="/test-500" element={<Error500 />} />
          <Route path="/" element={<ParksWrapper parks={parks} />} />
          <Route path="/park/:parkCode" element={<ParkDetails />} />
          <Route path="*" element={<Navigate to="/404" />} />
          <Route path="/404" element={<Error404 />} />
        </Routes>
      )}
    </main>
  );
};

export default App;
