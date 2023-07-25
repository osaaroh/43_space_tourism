import { useEffect } from "react";
import { slideIn } from "../utils/gsapAnimate";
import { setCurrentActiveLinkOnPageLoad } from "../utils/navUtils";

const Destination =({name, images, description, distance, travel, currentDestination, setCurrentDestination})=>{

    //Uncheck states below to add/experiment with hover states 
    //With the destination tabs on mouseover/ mouse leave
    /* const [isActive, setIsActive] = useState(null);
    const [isNotActive, setIsNotActive] = useState(null);

    const handleMouseEnter = e => {
        setIsActive(e.target.classList.add('destination__link--hover'));
    };

    const handleMouseLeave = e => {
        setIsNotActive(e.target.classList.remove('destination__link--hover'));
     }; */

    useEffect(()=>{
        slideIn(".img__wrapper",".destination-content__inner");
        setCurrentActiveLinkOnPageLoad(1);
    },[currentDestination])


    return (<main>
    <div className="destination__background background"></div>
    <div className="destination container-outer">
    <h2 className="page__title">01 Pick your destination</h2>
    <div className="container">
        <div className="img__wrapper">
            <img className="planet__image" src={images.webp} alt="" />
        </div> 
        <div className="destination-content__inner">
        <div className="destination__link-wrapper">
            <a aria-current="page" href='#moon' className={`destination__link ${currentDestination===0?'destination__link--active': ''}`} onClick={(e)=>{
                e.preventDefault()
                setCurrentDestination(0);
                }} >moon</a>
            <a className={`destination__link ${currentDestination===1?'destination__link--active': ''}`} href='#mars'  onClick={(e)=>{
                e.preventDefault()
                setCurrentDestination(1)
                }}  >mars</a>
            <a className={`destination__link ${currentDestination===2?'destination__link--active': ''}`} href='#europa' onClick={(e)=>{
                e.preventDefault()
                setCurrentDestination(2)
                }}  >europa</a>
            <a className={`destination__link ${currentDestination===3?'destination__link--active': ''}`} href='#titan' onClick={(e)=>{
                e.preventDefault()
                setCurrentDestination(3)
                }}  >titan</a>
        </div>
        <h1 className="destination__title title-bellefair">{name}</h1>
        <p className="destination__description description">{description}</p>

        <div className="destination__divider"></div>
        <div className="destination-stats--wrapper">
            <div className="destination-stats">
            <h4 className="destination-stats__title title-barlow">Avg. distance</h4>
            <h3 className="destination-stats__details">{distance}</h3>
            </div>
            <div className="destination-stats">
            <h4 className="destination-stats__title title-barlow">Est. travel time</h4>
            <h3 className="destination-stats__details"> {travel}</h3>
            </div>
            

        </div>
        </div>
        
        
    </div>
    </div>
</main>)
}

export default Destination