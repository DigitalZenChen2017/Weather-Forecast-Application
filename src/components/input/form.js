import React from 'react';
import styles from './formStyles.module.css';

const form = props => {
  return (
    <form onSubmit={props.loadWeather}>
      <label style={{ color: 'whitesmoke' }}>Enter City:</label>
      <input type="text" name="city" placeholder="City Name" />
      <input
        className={styles.submit}
        type="submit"
        value="Get 5-Day Forecast"
      />
    </form>
  );
};

export default form;
