import React from 'react';
import { NavLink } from 'react-router-dom';
// import from material ui
import Button from '@material-ui/core/Button';
import ImageEvolution from '../components/images/evolution.jpg';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="section-left">
          <div className="left-text-box">
            <p>JIMMY WONGPROM presents</p>
            <p>Search Pix from PixaBay API</p>
            <Button
              component={NavLink}
              to="/pix"
              variant="contained"
              color="secondary"
            >
              Let's Go
            </Button>
          </div>
        </div>
        <div className="section-right">
          <div className="right-text-box">
            <img src={ImageEvolution} alt="human evolution" />
          </div>
        </div>
      </div>
      <div className="intro-section">
        <div className="intro-left">
          <div className="left-text-box">
            <img src={ImageEvolution} alt="human evolution" />
          </div>
        </div>
        <div className="intro-right">
          <div className="right-text-box">
            <p>JIMMY WONGPROM presents</p>
            <p>Search Pix from PixaBay API</p>
            <Button
              component={NavLink}
              to="/pix"
              variant="contained"
              color="secondary"
            >
              Let's Go
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
