import data from '../data/data.js';
import { useState } from 'react';
import Destination from '../pages/Destination';
const DestinationComponent =()=>{
    const [destinations] = useState(data.destinations)
    const [currentDestination, setCurrentDestination] = useState(0);

    return(
        <Destination {...destinations[currentDestination]} setCurrentDestination={setCurrentDestination} currentDestination={currentDestination} />
    )
}

export default DestinationComponent