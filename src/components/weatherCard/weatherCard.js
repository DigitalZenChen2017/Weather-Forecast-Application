import React from 'react';
import styles from './weatherCardStyle.module.css';

function weatherCard() {
  return (
    <div className={styles.card}>
      <h2>Brussels</h2>
      <h3>
        Cloudy
        <span>
          Wind 10km/h <span className={styles.dot}>•</span> Precipitation 0%
        </span>
      </h3>
      <h1>23°</h1>
      <div className={styles.sky}>
        <div className={styles.sun}></div>
        <div className={styles.cloud}>
          <div className="circle-small"></div>
          <div className="circle-tall"></div>
          <div className="circle-medium"></div>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <td>MON</td>
            <td>TUE</td>
            <td>WED</td>
            <td>THU</td>
            <td>FRI</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>30°</td>
            <td>34°</td>
            <td>36°</td>
            <td>34°</td>
            <td>37°</td>
          </tr>
          <tr>
            <td>17°</td>
            <td>22°</td>
            <td>19°</td>
            <td>23°</td>
            <td>19°</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default weatherCard;
