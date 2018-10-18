import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import Home from './Page/Home';
// import About from './Page/About';
import Example from './Page/Example';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className='home-container'>
            <Nav />
            <div className='home-container'>
              <h1>CFM Hackathon</h1>
            </div>
            <Switch>
              <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
              {/* <Route exact path='/about' component={About} /> */}
              <Route exact path={process.env.PUBLIC_URL + '/example'} component={Example} />
              <Route render={function () {
                return <p>Not Found</p>
              }} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
