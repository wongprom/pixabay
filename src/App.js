import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

import About from './components/About';
import Pix from './components/Pix';
import Home from './components/Home';
import ErrorWrongURL from './components/ErrorWrongURL';

//Route
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Styling scss
import './App.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/Pix" component={Pix} />
            <Route path="/About" component={About} />
            <Route component={ErrorWrongURL} />
          </Switch>
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
