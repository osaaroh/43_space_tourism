import { useEffect } from "react"
import { Link } from "react-router-dom";
import { slideIn } from "../utils/gsapAnimate"
import { setCurrentActiveLinkOnPageLoad } from "../utils/navUtils";

const Home =()=>{
    useEffect(()=>{
        slideIn(".home__button",".home-content__inner");
        setCurrentActiveLinkOnPageLoad(0);
    })
    return(<main className="main">
    <div className="home__background background"></div>
    <div className="home container-outer">
        <div className="container">
        <div className="home-content__inner">
            <h2 className="home-title-small">So, you want to travel to</h2>
            <h1 className="home-title title-bellefair">Space</h1>
            <p className="home-content description">Let’s face it; if you want to go to space, you might as well genuinely go to 
            outer space and not hover kind of on the edge of it. Well sit back, and relax 
            because we’ll give you a truly out of this world experience!</p>
        </div>
        
        <Link to={"/destination"} type="button"  className="home__button">Explore</Link>
        </div>
    </div> 
    </main>)
}

export default Home