import "./Favorites.css";
import { ParkCards, ParkProps } from "../ParkCards/ParkCards";
import HeroImage from "../HeroImage/HeroImage";
import { Link } from "react-router-dom";

interface FavoritesProps {
  favorites: ParkProps[];
  setFavorites: (favorites: ParkProps[]) => void;
}

function FavoritesWrapper({ favorites, setFavorites }: FavoritesProps) {
  
  console.log('fav-park', "favs")
  const parkCards = favorites.map(park => {
    return (
      <ParkCards
        park={park}
        favorites={favorites} 
        setFavorites={setFavorites}
        key={park.parkCode}
      />
    );
  });

  return (
    <div className='App'>
      <HeroImage />
      <Link to="/" className="back-button" style={{color: `inherit`, textDecoration: `inherit`}}>
        Back to Home
      </Link>
      <div className='favorites-container'>{parkCards}</div>
    </div>
  );
}

export default FavoritesWrapper;