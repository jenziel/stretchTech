import "./Favorites.css";
import { ParkCards, ParkProps } from "../ParkCards/ParkCards";
import HeroImage from "../HeroImage/HeroImage";

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
      <div className='favorites-container'>{parkCards}</div>
    </div>
  );
}

export default FavoritesWrapper;