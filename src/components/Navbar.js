import React from 'react';
import { NavLink } from 'react-router-dom';

const navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact>
            Hem
          </NavLink>
        </li>
        <li>
          <NavLink to="/Pix">Pix</NavLink>
        </li>
        <li>
          <NavLink to="/About">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default navbar;
