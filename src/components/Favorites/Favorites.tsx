import "./Favorites.css";
import { ParkCards, ParkProps } from "../ParkCards/ParkCards";
import HeroImage from "../HeroImage/HeroImage";
import { Link } from "react-router-dom";

function FavoritesWrapper({ favorites }: { favorites: ParkProps[] }) {
  
  console.log('fav-park', "favs")
  const parkCards = favorites.map(park => {
    return (
      <ParkCards
        park={park}
        key={park.parkCode}
      />
    );
  });

  return (
    <div className='App'>
      <HeroImage />
      <Link to="/" className="back-button">
        Back to Home
      </Link>
      <div className='favorites-container'>{parkCards}</div>
    </div>
  );
}

export default FavoritesWrapper;