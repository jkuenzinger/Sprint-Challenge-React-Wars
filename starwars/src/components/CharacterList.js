import React, {useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";


 function CharacterList(){
 const [characters, setCharacters] = useState([]);
 
useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        setCharacters(response.data.results);
        console.log(response.data);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, []);

  return (
    <div>
      {characters.map(item => {
        return <CharacterCard item={item} key={characters} />
 })}
    </div>
  );
}
export default CharacterList;