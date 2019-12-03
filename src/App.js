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
    const dayTimeArray = response.list;
    console.log(dayTimeArray);

    const fiveDayTime = [];

    for (let i = 0; i < dayTimeArray.length; i += 8) {
      fiveDayTime.push(dayTimeArray[i]);
      console.log(i);
    }
    console.log('new fiveDayTime', fiveDayTime);

    const fiveDayTempMaxFahrenheit = fiveDayTime.map(fiveDay => {
      return Math.floor((fiveDay.main.temp_max - 273.15) * (9 / 5) + 32);
    });
    console.log('fiveDayTempMaxArray: ', fiveDayTempMaxFahrenheit);

    const fiveDayTempMinFahrenheit = fiveDayTime.map(fiveDay => {
      return Math.floor((fiveDay.main.temp_min - 273.15) * (9 / 5) + 32);
    });

    console.log('fiveDayTempMinArray: ', fiveDayTempMinFahrenheit);

    city
      ? this.setState({
          city: response.city.name,
          country: response.city.country,
          weatherCondition: response.list[0].weather[0].main,
          fiveDayTemperature: {
            highs: fiveDayTempMaxFahrenheit,
            lows: fiveDayTempMinFahrenheit
          },
          windSpeed: Math.floor(response.list[0].wind.speed),
          error: undefined
        })
      : this.setState({
          error: 'Invalid City Name! Please Enter a Valid City.'
        });
    console.log('state key value pairs: ', this.state);
  };

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
          <Form loadWeather={this.getWeather} />
        </div>
      </Router>
    );
  }
}

export default App;
