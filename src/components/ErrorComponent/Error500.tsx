import React from 'react';
import { NavLink } from 'react-router-dom';
import './Error500.css';
import errorImage from '../../images/error.png';

function Error500(): JSX.Element { 
  return (
    <div className="error-page-container">
      <h1 className="error-heading">500 - Internal Server Error</h1>
      <img src={errorImage} alt="Error" className="error-image" /> 
      <div className="error-message">
        <h3>Oops! Something went wrong on our end.</h3>
        <h4>We're working to fix it. Please try again later.</h4>
      </div>
      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <button className="go-home-button" aria-label="Go back to the home page">Go Back to Home Page</button>
      </NavLink>
    </div>
  );
}

export default Error500;
