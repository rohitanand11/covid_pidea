import React from "react";
import Card from "../Card/Card";

import Classes from "./CountriesStats.module.css";

const CountriesStats = (props) => {

  const CountryStatsReder = () => {
    let count=0;
    const new_cards = props.countryData.map((data, index) => {
      count =count +1;
      return (
        <div key={data.CountryCode} className={Classes.IndividualCard}>
          <Card>
      <p className={Classes.CountryName}>{data.Country}</p>
      <p>NewConfirmed : {data.NewConfirmed}</p>
      <p>NewDeaths : {data.NewDeaths}</p>
      <p>NewRecovered   : {data.NewRecovered}</p>
      <p>TotalConfirmed : {data.TotalConfirmed}</p>
      <p>TotalRecovered : {data.TotalRecovered }</p>

          </Card>
        </div>
      );
    });

    return new_cards;
  };

  const checkIfCountryDataLoaded = () => {
    if (props.countryData) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className={Classes.container}>
      <div className={Classes.CardContainer}>
        {checkIfCountryDataLoaded() ? CountryStatsReder() : null}
      </div>
    </div>
  );
};

export default CountriesStats;
