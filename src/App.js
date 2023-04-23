import "./App.css";
//Import route and our components
import { Route, Routes } from "react-router-dom";
import Main from "./services/Main";
import StarShipCard from "./components/StarShipCard";
import Planets from "./services/Planet";
import People from "./services/People";
import {useState, useEffect} from "react";

export default function App () {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  
  useEffect (() =>{
   
    async function fetchPeople(){
    let res = await fetch ("https://swapi.dev/api/people/?format=json");
    let data = await res.json();
    setPeople(data.results);
    }
  
    async function fetchPlanet(){
      let res = await fetch ("https://swapi.dev/api/planets/?format=json");
      let data = await res.json();
      setPlanets(data.results);
      }
       
  fetchPeople()
  fetchPlanet()
  
  }, []);


  // We will use the Route component to specify each route
  return (
    <div className="App">
    <StarShipCard/>
    
      <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/Planet" element={<Planets data={planets}/>}/>
      <Route path="/People" element={<People data={people}/>}/>
      </Routes>
    </div>
  );
}

