import React from 'react';
import { OPEN_WEATHER_KEY } from '../../apiKey';
import WeatherDay from './weatherDay';

const openWeatherURL = `http://api.openweathermap.org/data/2.5/forecast?zip=60525&units=imperial&APPID=${OPEN_WEATHER_KEY}`;

export default function weatherContainer() {
  return (
    <div>
      <WeatherDay />
    </div>
  );
}
