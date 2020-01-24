import React from "react";

const CharacterCard = ({item}) => {
    return (
        <div>
            <h2>Name: {item.name}</h2>
            <p>Hair Color:{item.hair_color}</p>
            <p>Height:{item.height}</p>
            <p>Mass:{item.mass}</p>
           
           </div>
    );
};

export default CharacterCard;