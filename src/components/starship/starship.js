import React from 'react';
import './starship.css'

let Starship = ({starship}) => {
  return (
    <li className="primary-color">
      {starship.name}
    </li>
  );
};

export default Starship;

