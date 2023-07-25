import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoIcon from "../assets/shared/logo.svg";
import hamIcon from "../assets/shared/icon-hamburger.svg";
import { displayHoverBar, hideHoverBar, setActiveLinkOnClick} from "../utils/navUtils";

const NavigationBar =()=>{
    const [navOpen, setOpenMobileNavBar] = useState(false);
    const [isReized, setIsResized] = useState(0);
    const [prevWidth, setPrevWidth] = useState(60);

    const checkWidth =(event)=>{
        const value = event.target.getBoundingClientRect().width;
        if (value > 20) {
            setPrevWidth(value) ;
        }
    }

    const isWindowMobileView=(navParams)=>{
        if (document.body.clientWidth <= 768 && navParams) {
            return {"width":"fit-content", "display":"flex"};
        } else if(document.body.clientWidth > 768){
            return {};
        } else {
            return {"display":"none"};
        }
    }
    

    /*Using useEffect to track screen resize for navbar switch is a temporary fix 
    as it gives a performance hit. Working to replacing with a more efficient 
    solution*/
    useEffect(()=>{
        window.addEventListener("resize", function(event) {
            if (document.body.clientWidth <= 768 ) {
                setIsResized(0);
            }else{
                setIsResized(1)
            }
        },[isReized])
    })


    return(<header>
        <nav>
        <div className="logo-img__wrapper"><img src={logoIcon} alt="" className="logo" /></div>
        <div className="nav__line"></div>
        <ul className="nav-list" style={isWindowMobileView(navOpen)}>
            <li className="nav-first__link"><Link 
                onClick={(e)=>{setOpenMobileNavBar(false); setActiveLinkOnClick(e)}} onMouseOver={(e)=>{
                displayHoverBar(e,prevWidth)
                checkWidth(e)}} onMouseLeave={hideHoverBar} className="nav__link" to='/'><span>00</span>Home</Link></li>

            <li><Link 
                onClick={(e)=>{setOpenMobileNavBar(false); setActiveLinkOnClick(e)}} onMouseOver={(e)=>{
                    displayHoverBar(e,prevWidth)
                    checkWidth(e)
                    }} onMouseLeave={hideHoverBar} className="nav__link" to='/destination'><span>01</span>Destination</Link></li>
            <li><Link 
            onClick={(e)=>{setOpenMobileNavBar(false); setActiveLinkOnClick(e)}} onMouseOver={(e)=>{
                displayHoverBar(e,prevWidth)
                checkWidth(e)
                }} onMouseLeave={hideHoverBar} className="nav__link" to='/crew'><span>02</span>Crew</Link></li>
            <li><Link onClick={(e)=>{setOpenMobileNavBar(false); setActiveLinkOnClick(e)}} 
                    onMouseOver={(e)=>{
                    displayHoverBar(e,prevWidth)
                    checkWidth(e)
                    }} onMouseLeave={hideHoverBar} className="nav__link" to='/technology'><span>03</span>Technology</Link></li>

            <div className="nav__hoverbar" ></div>
        </ul>
        <button className="nav-btn">
            <img className="nav-btn__icon" src={hamIcon} alt=""  onClick={()=>{setOpenMobileNavBar(!navOpen)}}/>
        </button>
        </nav>
        {
        }
</header>)
}
export default NavigationBar;