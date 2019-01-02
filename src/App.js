import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import ErrorWrongURL from './components/ErrorWrongURL';

//Route
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Styling css
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/Contact" component={Contact} />
            <Route path="/About" component={About} />
            <Route component={ErrorWrongURL} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
