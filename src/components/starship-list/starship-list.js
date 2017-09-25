import React from 'react';
import Starship from '../starship/starship';


let searchWordInEachItem = (search, item) => {
  return item.includes(search.toLowerCase());
};

let buildList = (list, search) => {
  return list
    .filter(starship => searchWordInEachItem(search, starship.name.toLowerCase()))
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


export {
  searchWordInEachItem,
  StarshipList
};
