import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from '../data/data.js';
import { slideIn } from "../utils/gsapAnimate";
import { setCurrentActiveLinkOnPageLoad } from "../utils/navUtils.js";

const Crew =({bio, images,name,path,role, crewMemberIndex})=>{
    const [crewdata] = useState(data.crew);
    useEffect(()=>{
        slideIn(".crew-content__inner",".img__wrapper");
        setCurrentActiveLinkOnPageLoad(2);
    })
    return(<main>
    <div className="crew__background background"></div>
    <div className="crew container-outer">
        <h2 className="page__title">  02 MEET YOUR CREW</h2>
        <div className="container">
        <div className="crew-content__inner">
            <h2 className="crew__role title-bellefair">{role}</h2>
            <h1 className="crew__membername  title-bellefair">{name}</h1>
            <p className="crew__description description">{bio}</p>
            <div className="crew__link-container">
            { crewdata.map((crew,index)=>{ 
                return <Link key={index} to={crew.path} className={`crew__link ${index===crewMemberIndex?"crew__link--active":""}`}></Link>
                })
            }
            </div>
        </div>
        <div className="img__wrapper">
            <img src={images.webp} alt="" />
        </div> 
        </div>
    </div>
</main>)
}

export default Crew