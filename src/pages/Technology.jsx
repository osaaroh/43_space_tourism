import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { slideIn } from "../utils/gsapAnimate";
import data from '../data/data.js';
import { setCurrentActiveLinkOnPageLoad } from "../utils/navUtils";
const Technology =({name, description, images, path, techindex})=>{
    const [techdata] = useState(data.technology);
    useEffect(()=>{
        slideIn(".technology-content",".img__wrapper");
        setCurrentActiveLinkOnPageLoad(3);
    })

    return(<main>
    <div className="technology__background background"></div>
    <div className="technology container-outer">
        <h2 className="page__title">03 SPACE LAUNCH 101</h2>
        <div className="container">
            <picture className="img__wrapper">
                <source className="image" srcSet={images.landscape} media="(max-width: 768px)" />
                <img className="image" src={images.portrait} alt="Space capsule" />
            </picture>
            <div className="technology__link-wrapper">
            
            {//get index from TechRoute Component and compare to add active class
            techdata.map((technology,index)=>{ 
            return <Link key={index} to={technology.path} className={`technology__link ${index===techindex?"technology__link--active":""}`}>{index+1}</Link>
            })
            }
                
            </div>
            <div className="technology-content">
                <h2 className="technology-content__title title-barlow">The terminology...</h2>
                <h1 className="technology-content__name  title-bellefair">{name}</h1>
                <p className="technology-content__description description">{description}</p>
            </div>
        </div>
    </div>
</main>)
}

export default Technology

