import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import WeatherContainer from './components/weatherCards/weatherContainer';

class App extends Component {
  state = {};

  componentDidMount() {
    // Insert Axios API GET method to retrieve Weather data
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          {/* <Route exact path="/" render={
            props => (
              <WeatherWeek>
            )
          }/> */}
          <WeatherContainer />
        </div>
      </Router>
    );
  }
}

export default App;
