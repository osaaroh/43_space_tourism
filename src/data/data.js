import moonImageWebP from "../assets/destination/image-moon.webp";
import moonImage from "../assets/destination/image-moon.png";
import marsImageWebP from "../assets/destination/image-mars.webp";
import marsImage from "../assets/destination/image-mars.png";
import europaImageWebP from "../assets/destination/image-europa.webp";
import europaImage from "../assets/destination/image-europa.png";
import titanImageWebP from "../assets/destination/image-titan.webp";
import titanImage from "../assets/destination/image-titan.png";
import lauchVehiclePortrait from "../assets/technology/image-launch-vehicle-portrait.jpg";
import lauchVehicleLandscape from "../assets/technology/image-launch-vehicle-landscape.jpg";
import spaceCapsulePortrait from "../assets/technology/image-space-capsule-portrait.jpg";
import spaceCapsuleLandscape from "../assets/technology/image-space-capsule-landscape.jpg";
import spacePortPortrait from "../assets/technology/image-spaceport-portrait.jpg";
import spacePortLandscape from "../assets/technology/image-spaceport-landscape.jpg";
import anoushehImgPng from "../assets/crew/image-anousheh-ansari.png";
import anoushehImgWebp from "../assets/crew/image-anousheh-ansari.webp";
import douglasImgPng from "../assets/crew/image-douglas-hurley.png";
import douglasImgWebp from "../assets/crew/image-douglas-hurley.webp";
import markImgPng from "../assets/crew/image-mark-shuttleworth.png";
import markImgWebp from "../assets/crew/image-mark-shuttleworth.webp";
import victorImgWebp from "../assets/crew/image-victor-glover.webp";
import victorImgPng from "../assets/crew/image-victor-glover.png";



export default {
  "destinations": [
    {
      "name": "Moon",
      "images": {
        "png": moonImage,
        "webp": moonImageWebP
      },
      "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      "distance": "384,400 km",
      "travel": "3 days"
    },
    {
      "name": "Mars",
      "images": {
        "png": marsImage,
        "webp": marsImageWebP
      },
      "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      "distance": "225 mil. km",
      "travel": "9 months"
    },
    {
      "name": "Europa",
      "images": {
        "png": europaImage,
        "webp": europaImageWebP
      },
      "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      "distance": "628 mil. km",
      "travel": "3 years"
    },
    {
      "name": "Titan",
      "images": {
        "png": titanImage,
        "webp": titanImageWebP
      },
      "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      "distance": "1.6 bil. km",
      "travel": "7 years"
    }
  ],
  "crew": [
    {
      "path": "/crew/douglas-hurley",
      "name": "Douglas Hurley",
      "images": {
        "png": douglasImgPng,
        "webp": douglasImgWebp
      },
      "role": "Commander",
      "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
      "path": "/crew/mark-shuttleworth",
      "name": "Mark Shuttleworth",
      "images": {
        "png": markImgPng,
        "webp": markImgWebp
      },
      "role": "Mission Specialist",
      "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
      "path": "/crew/victor-glover",
      "name": "Victor Glover",
      "images": {
        "png": victorImgPng,
        "webp": victorImgWebp
      },
      "role": "Pilot",
      "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },
    {
      "path": "/crew/anousheh-ansari",
      "name": "Anousheh Ansari",
      "images": {
        "png": anoushehImgPng,
        "webp": anoushehImgWebp
      },
      "role": "Flight Engineer",
      "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
  ],
  "technology": [
    { "path": "/technology/launch-vehicle",
      "name": "Launch vehicle",
      "images": {
        "portrait": lauchVehiclePortrait,
        "landscape": lauchVehicleLandscape
      },
      "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
      "path": "/technology/space-port",
      "name": "Spaceport",
      "images": {
        "portrait": spacePortPortrait,
        "landscape": spacePortLandscape
      },
      "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
      "path": "/technology/space-capsule",
      "name": "Space capsule",
      "images": {
        "portrait": spaceCapsulePortrait,
        "landscape": spaceCapsuleLandscape
      },
      "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
  ]
}