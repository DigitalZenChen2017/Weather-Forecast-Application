import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import WeatherCard from './components/weatherCard/weatherCard';
import { OPEN_WEATHER_KEY } from './apiKey';
import Form from './components/input/form';

class App extends Component {
  state = {
    city: undefined,
    country: undefined,
    temperature: undefined,
  };

  async componentDidMount() {
    await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city},${this.state.countryCode}&mode=xml&appid=${OPEN_WEATHER_KEY}`
    ).then(response => response.text());
    // .then(data => {
    //   document.getElementById('response').innerHTML = data;
    // });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <WeatherCard />
          {/* <p id="response"></p> */}
          <Form />
        </div>
      </Router>
    );
  }
}

export default App;
