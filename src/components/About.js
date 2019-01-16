import React from 'react';
import Keps from './images/keps.jpg';
import GitHub from './images/github.png';
import Axios from 'axios';

const About = () => {
  Axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
  return (
    <div className="wrapper">
      <div className="about">
        <h3>About Header</h3>
        <div className="about-section">
          <div className="about-text">
            <p>
              <span>Who // </span>Jimmy Wongprom
            </p>
            <p>
              <span>What // </span>FrontEnd Developer
            </p>
            <p>
              <span>Where // </span>Stockholm, Solna
            </p>
            <p>
              <span>When // </span>2017 => Present
            </p>
            <p>
              <span>Why // </span>Passion And Freedom
            </p>
          </div>
          <div className="about-img">
            <img src={Keps} alt="Jimmy Wongprom" />
          </div>
        </div>

        <div className="experience-section">
          <div className="experience">
            <h3>Experience</h3>
            <p>Experience this is a looooong experience 1</p>
            <p>Experience 2</p>
            <p>Experience 3</p>
          </div>
          <div className="skills">
            <h3>Skills</h3>
            <p>Knowledge </p>
            <p>Html</p>
            <p>css</p>
            <p>skills</p>
            <p>skills</p>
            <p>skills</p>
          </div>
          <div className="featured">
            <h3>Featured</h3>
            <p>Featured 1</p>
            <p>Featured 2</p>
            <p>Featured 3</p>
          </div>
        </div>
        <div className="personal-section">
          <div className="personal">
            <h3>Personal</h3>
            <p>
              Qui sequi rerum asperiores.Eius qui optio libero sunt blanditiis
              ea. Sunt et voluptas. Impedit suscipit praesentium illo est optio
              omnis modi. Facere ex sit voluptatum dolorem expedita. Inventore
              quasi praesentium hic quos id vitae quia veritatis.
            </p>
          </div>
          <div className="personal-img">
            <div className="img-box">
              <img src={GitHub} alt="jimmy wongprom" />
            </div>
            <div className="img-box">
              <img src={GitHub} alt="jimmy wongprom" />
            </div>
            <div className="img-box">
              <img src={GitHub} alt="jimmy wongprom" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
