
//import {swapi} from 'swapi'
import {useState, useEffect} from "react";
import StarShipCard from "../components/StarShipCard";


export default function GetAllStarships (props) {
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

return (
  <>

 </>
)
}