import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import SvgIcon from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
