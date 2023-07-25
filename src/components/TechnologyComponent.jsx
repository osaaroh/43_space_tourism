import Technology from '../pages/Technology';
const TechnologyComponent =({technology, techindex})=>{
    return(
        <Technology {...technology} techindex={techindex}/>
    )
}

export default TechnologyComponent