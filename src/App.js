import {  Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css';
import DestinationComponent from './components/DestinationComponent';
import NavigationBar from './components/NavigationBar';
import TechnologyComponent from './components/TechnologyComponent';
import Home from './pages/Home';
import data from './data/data.js';
import CrewComponent from './components/CrewComponent';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/destination' element={<DestinationComponent />} />
        <Route path='/crew' element={<CrewComponent crewMember={data.crew[0]} crewMemberIndex={0} />} />
        {//generate routes for crew members 
        data.crew.map((crewMember, index)=>{
          return <Route key={index} path={`${crewMember.path}`}element={<CrewComponent crewMember={crewMember} crewMemberIndex={index}/>} />
        })} 
        <Route path='/technology' element={<TechnologyComponent technology={data.technology[0]} techindex={0}/>} /> 
        {//generate routes for different techs 
        data.technology.map((tech, index)=>{
          return <Route key={index} path={`${tech.path}`}element={<TechnologyComponent technology={tech} techindex={index} />} />
        })}
          
      </Routes>
    </BrowserRouter>
  );
}

export default App;
