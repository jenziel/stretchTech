import './HeroImage.css' 
import yosemiteHero from '../../images/yosemite-hero-cropped.jpeg'

function HeroImage(){
return (
    <div className="hero-img">
        <img src={yosemiteHero} alt="Yosemite Valley"></img>
    </div>
)
}
export default HeroImage