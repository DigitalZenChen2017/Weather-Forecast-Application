import React from 'react';
import styles from './formStyles.module.css';

export default function form() {
  return (
    <form className={styles.form}>
      <label style={{ color: 'whitesmoke' }}>Enter City:</label>
      <input type="text" name="city" />
      <input
        className={styles.submit}
        type="submit"
        value="Get 5-Day Forecast"
      />
    </form>
  );
}
