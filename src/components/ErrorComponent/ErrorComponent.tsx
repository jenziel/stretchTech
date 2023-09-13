import React from "react";
import "./ErrorComponent.css";
import sadComputer from "../../images/error.png";

interface ErrorComponentProps {
  error: {
    message: string;
    statusCode?: number;
  } | null;
}

function ErrorComponent(props: ErrorComponentProps) {
  console.log("ErrorComponent received props: ", props); //console. delete after you are done
  const { error } = props;

  return (
    <div className='error-msg'>
      <h1>Oops!</h1>
      <img src={sadComputer} alt='sad computer'></img>
      {error ? <><h2>{error.message}</h2>{error.statusCode && <p>Status Code: {error.statusCode}</p>}</> : <h2>Something went wrong.</h2>}
    </div>
  );
}

export default ErrorComponent;
