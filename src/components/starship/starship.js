import React from 'react';
import './starship.css'

let Starship = ({starship}) => {
  return (
    <li className="row row__primary">
      {starship.name}
    </li>
  );
};

export default Starship;
