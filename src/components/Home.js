import React from 'react';
import ImageEvolution from '../components/images/evolution.jpg';

const Home = () => {
  return (
    <div className="home">
      <div className="home-image-wrapper">
        <img src={ImageEvolution} alt="Human Evolution" />
        <div className="text-wrapper">
          <h1>PixaBay API</h1>
        </div>
        <main role="main">
          <header className="intro-text">
            <h3>Welcome To My API Project With React</h3>
            <p>
              Lorem ipsum dolor sit amet, id vis bonorum omittam, cu nam illum
            </p>
          </header>
        </main>
      </div>
    </div>
  );
};

export default Home;
