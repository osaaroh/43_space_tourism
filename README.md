# Space tourism website - Frontend Mentor 

![Design preview for the Space tourism website coding challenge](./preview.jpg)

## Welcome! 👋

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information




### Links

- Live Site URL: [Live Demo](https://url-shortener-o.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- React.js
- React Router


### What I learned

- React  v6

```js
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
```





## Author
- Frontend Mentor - [@Master-Osaro](https://www.frontendmentor.io/profile/Master-Osaro)
- Twitter - [@iyoha_osaro](https://twitter.com/iyoha_osaro)
- Github - [@osaaroh](https://github.com/Master-Osaro/)

**Had fun building!** 🚀