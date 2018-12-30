import React, { Component } from 'react';
import Navbar from './components/Navbar';
// import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <p>Jag är ren</p>
      </div>
    );
  }
}

export default App;
