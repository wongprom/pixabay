import React from 'react';
import ImageEvolution from '../components/images/evolution.jpg';

const Home = () => {
  return (
    <div className="home">
      <div className="home-image-wrapper">
        <img src={ImageEvolution} alt="Human Evolution" />
      </div>
      <p>Home</p>
    </div>
  );
};

export default Home;
