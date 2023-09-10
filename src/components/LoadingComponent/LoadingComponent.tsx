import tree from '../../images/pine.png'
import './LoadingComponent.css';

function LoadingComponent() {


    return (
      <div className="LoadingComponent">
        <header className="LoadingComponent-header">
          <img src={tree} className="LoadingComponent-logo" alt="tree" />
          <p>
            Loading...
          </p>
        </header>
      </div>
    );
  }
  
  export default LoadingComponent;