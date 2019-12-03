import React from 'react';
import styles from './weatherCardStyle.module.css';

function weatherCard(props) {
  return props.showCard ? (
    <div className={styles.card}>
      <h2>{props.city}</h2>
      <h3>
        {props.weatherCondition}
        <span>{props.windSpeed} 10km/h Precipitation 0%</span>
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
          <tr className={styles.highlows}>
            <td>H</td>
            <td>H</td>
            <td>H</td>
            <td>H</td>
            <td>H</td>
          </tr>
          <tr>
            <td>{props.weeklyHighs[0]}°</td>
            <td>{props.weeklyHighs[1]}°</td>
            <td>{props.weeklyHighs[2]}°</td>
            <td>{props.weeklyHighs[3]}°</td>
            <td>{props.weeklyHighs[4]}°</td>
          </tr>
          <tr className={styles.highlows}>
            <td>L</td>
            <td>L</td>
            <td>L</td>
            <td>L</td>
            <td>L</td>
          </tr>
          <tr>
            <td>{props.weeklyLows[0]}°</td>
            <td>{props.weeklyLows[1]}°</td>
            <td>{props.weeklyLows[2]}°</td>
            <td>{props.weeklyLows[3]}°</td>
            <td>{props.weeklyLows[4]}°</td>
          </tr>
        </tbody>
      </table>
    </div>
  ) : (
    <div className={styles.card}>
      <h2>Cincinnati</h2>
      <h3>
        Cloudy
        <span> 10km/h Precipitation 0%</span>
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
          <tr className={styles.highlows}>
            <td>H</td>
            <td>H</td>
            <td>H</td>
            <td>H</td>
            <td>H</td>
          </tr>
          <tr>
            <td>30°</td>
            <td>34°</td>
            <td>36°</td>
            <td>34°</td>
            <td>37°</td>
          </tr>
          <tr className={styles.highlows}>
            <td>L</td>
            <td>L</td>
            <td>L</td>
            <td>L</td>
            <td>L</td>
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
