import React from "react";
import styled from "styled-components";

export const StarCard = styled.div`
display:flex;
width:40%;
flex-direction: column;
align-items: center;
justify-content: space-between;
justify-content: center;
border-style: solid 1px;
margin-left: 30%;

`;

const CharacterCard = ({item}) => {
    return (
        <StarCard>
            <h2>Name: {item.name}</h2>
            <p>Hair Color:{item.hair_color}</p>
            <p>Height:{item.height}</p>
            <p>Mass:{item.mass}</p>
           
           </StarCard>
    );
};

export default CharacterCard;