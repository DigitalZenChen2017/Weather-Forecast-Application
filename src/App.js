import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import WeatherContainer from './components/weatherCards/weatherContainer';
import { OPEN_WEATHER_KEY } from './apiKey';

class App extends Component {
  state = {
    city: 'Cincinnati',
    countryCode: 'US',
    days: '7'
  };

  async componentDidMount() {
    await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city},${this.state.countryCode}&mode=xml&appid=${OPEN_WEATHER_KEY}`
    )
      .then(response => response.text())
      .then(data => {
        document.getElementById('response').innerHTML = data;
      });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <WeatherContainer />
          <p id="response"></p>
        </div>
      </Router>
    );
  }
}

export default App;
