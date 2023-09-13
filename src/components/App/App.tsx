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
        console.log("Caught an error: ", error);  //console. delete after you are done
        setError(error.message || "Failed to fetch parks!");
        console.log("newError state set to: ", newError);  //console. delete after you are done
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log("Parks fetched:", parks);// console. dont forget to delete this useEffect.
  }, [parks]);

  useEffect(() => {
    console.log("newError has been updated to:", newError);
  }, [newError]);

  const renderError = () => {
    if (newError) {
      return <ErrorComponent error={{ message: newError }} />;
    }
  };

  return (
    <main className="App">
      <Header />
      {newError ? (
        renderError()
      ) : isLoading ? (
        <LoadingComponent />
      ) : (
        <Routes>
          <Route path="/500" element={<Error500 />} />
          {/* below is for testing onlyfor testing only */}
          <Route path="/test-500" element={<Error500 />} /> 
          <Route path="/" element={isLoading ? <LoadingComponent /> : <ParksWrapper parks={parks} />} />
          <Route path="/park/:parkCode" element={<ParkDetails />} />
          <Route path="*" element={<Navigate to="/404" />} />
          <Route path="/404" element={<Error404 />} />
        </Routes>
      )}
    </main>
  );
}

export default App;






