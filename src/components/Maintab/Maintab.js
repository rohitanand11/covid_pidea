import React from "react";
import Card from "../Card/Card";

import Classes from "./Maintab.module.css";

const Maintab = (props) => {
  
  return (
    <div className={Classes.container}>
      <div className={Classes.CardContainer}>
        <Card>
        <p className={Classes.Heading}>global</p>
      <p>NewConfirmed : {props.globalData.NewConfirmed}</p>
      <p>NewDeaths : {props.globalData.NewDeaths}</p>
      <p>NewRecovered   : {props.globalData.NewRecovered}</p>
      <p>TotalConfirmed : {props.globalData.TotalConfirmed}</p>
      <p>TotalRecovered : {props.globalData.TotalRecovered }</p>
        </Card>
        
        <div className={Classes.MiddleLables}>
          <div className={Classes.labelStyling}>←  Cases globally</div>
          <div className={Classes.labelStyling}> Cases in India →</div>
        </div>

        <Card>
        <p className={Classes.Heading}>India</p>
      <p>NewConfirmed : {props.IndiaData.NewConfirmed}</p>
      <p>NewDeaths : {props.IndiaData.NewDeaths}</p>
      <p>NewRecovered   : {props.IndiaData.NewRecovered}</p>
      <p>TotalConfirmed : {props.IndiaData.TotalConfirmed}</p>
      <p>TotalRecovered : {props.IndiaData.TotalRecovered }</p>
        </Card>
      </div>
    </div>
  );
};

export default Maintab;
