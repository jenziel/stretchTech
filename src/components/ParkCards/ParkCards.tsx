import { Link } from 'react-router-dom';
import ErrorComponent from '../ErrorComponent/ErrorComponent'; 
import './ParkCards.css';

interface ParkProps {
  parkCode: string;
  fullName: string;
  images: Array<{ url: string; altText: string }>;
  designation: string;
}

interface ParkCardsProps {
  park: ParkProps;
  favorites: ParkProps[];
  setFavorites: (favorites: ParkProps[]) => void;
}

function ParkCards({ park, favorites, setFavorites }: ParkCardsProps) {

  if (!park || !park.images) {
    return <ErrorComponent error={{ message: "Park information is not available." }} />;
  }

  function isFavorite() {
    return favorites.some((favorite) => favorite.parkCode === park.parkCode);
  }

  function toggleFavorite() {
    if (isFavorite()) {
      const updatedFavorites = favorites.filter((favorite) => favorite.parkCode !== park.parkCode);
      setFavorites(updatedFavorites);
    } else {
      setFavorites([...favorites, park]);
    }
  }

  return (
    <Link to={`/park/${park.parkCode}`} style={{ textDecoration: 'inherit' }}> 
      <div className='park-card'>
        <h3>{park.fullName}</h3>
        <div className="image-gallery">
          {park.images.slice(0, 1).map((image, index) => (
            <div key={index}>
              <img
                src={image.url}
                alt={image.altText}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/bearError.png";
                }}
              />
            </div>
          ))}
        </div>
        <button className={`favorite-button ${isFavorite() ? 'favorite' : ''}`} onClick={toggleFavorite}></button> 
      </div>
    </Link>
  );
}
export { ParkCards };
export type { ParkProps };