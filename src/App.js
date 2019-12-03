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
    weatherCondition: undefined,
    fiveDayTemperature: {
      highs: [],
      lows: []
    },
    windSpeed: undefined,
    error: undefined
  };

  // Method for making the API Call
  getWeather = async e => {
    const city = e.target.elements.city.value;
    // const country = e.target.elements.country.value;
    e.preventDefault();
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&mode=json&appid=${OPEN_WEATHER_KEY}`
    );
    const response = await api_call.json();
    console.log(response);
    city
      ? this.setState({
          city: response.city.name,
          country: response.city.country,
          weatherCondition: response.list[0].weather[0].main,
          fiveDayTemperature: {
            highs: Math.floor(
              (response.list[0].main.temp_max - 273.15) * (9 / 5) + 32
            ),
            lows: Math.floor(
              (response.list[0].main.temp_min - 273.15) * (9 / 5) + 32
            )
          },
          windSpeed: Math.floor(response.list[0].wind.speed),
          error: undefined
        })
      : this.setState({
          error: 'Invalid City Name! Please Enter a Valid City.'
        });
    console.log('state key value pairs: ', this.state);
  };

  // async componentDidMount() {
  //   await fetch(
  //     `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city},${this.state.countryCode}&mode=xml&appid=${OPEN_WEATHER_KEY}`
  //   ).then(response => response.text());
  //   // .then(data => {
  //   //   document.getElementById('response').innerHTML = data;
  //   // });
  // }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <WeatherCard
            city={this.state.city}
            country={this.state.country}
            weatherCondition={this.state.weatherCondition}
            weeklyHighs={this.state.fiveDayTemperature.highs}
            weeklyLows={this.state.fiveDayTemperature.lows}
            windSpeed={this.state.windSpeed}
            error={this.state.error}
          />
          {/* <p id="response"></p> */}
          <Form loadWeather={this.getWeather} />
        </div>
      </Router>
    );
  }
}

export default App;
