import Crew from '../pages/Crew';
const CrewComponent =({crewMember, crewMemberIndex})=>{
    return(
        <Crew {...crewMember} crewMemberIndex={crewMemberIndex}/>
    )
}

export default CrewComponent