import React from 'react';
import Starship from './starship/starship';


let buildList = (list, search) => {
  return list
    .filter(starship => starship.name.toLowerCase().includes(search.toLowerCase()))
    .map((starshipData, i) => {
    return (
      <Starship starship={starshipData}
                key={i}/>
    );
  });
};

let StarshipList = ({list, search}) => {
  return (
    <ul>
      {buildList(list, search)}
    </ul>
  );
};


export default StarshipList;