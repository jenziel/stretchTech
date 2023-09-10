import React from 'react';
import './ErrorComponent.css';

interface ErrorComponentProps {
    error: {
      message: string;
    } | null;
  }
function ErrorComponent(props: ErrorComponentProps) {
    const { error } = props;

    return (
        <div className="error-msg">
        <h1>Oops!</h1>
        {!error ? (
            <h2>Something went wrong.</h2>
        ) : (
            <h2>{error.message}</h2>
        )}
        </div>
    )
    
}
export default ErrorComponent;