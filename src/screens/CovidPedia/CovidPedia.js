import React, { Component } from "react";
import Maintab from "../../components/Maintab/Maintab";
import CountriesStats from "../../components/CountriesStats/CountriesStats";

import Classes from "./CovidPedia.module.css";

class CovidPedia extends Component {
  state = {
    CompleteData: null,
    fetchingDataComplete: false,
  };

  componentDidMount = () => {
    this.fetchData();
  };

  fetchData = () => {
    fetch("https://api.covid19api.com/summary")
      .then((response) => response.json())
      .then((dataset) => {
        console.log(dataset);
        const new_data = { ...dataset};
        this.setState({ CompleteData: new_data, fetchingDataComplete: true });
      });
  };

  findIndia = () => {
    for(let i=0;i<(this.state.CompleteData.Countries).length;i++){
      if(this.state.CompleteData.Countries[i].Country==="India"){
        return this.state.CompleteData.Countries[i];
      }
    }
  }

  render() {
    console.log("rendering covid screen");
    return (
      <div className={Classes.container}>

        <div className={Classes.Maintab}>
          {(this.state.CompleteData)
            ?<Maintab globalData={this.state.CompleteData.Global} IndiaData={this.findIndia()}/>
            :null}
        </div>

        <div className={Classes.CountriesStats}>
          {(this.state.CompleteData)?
          <CountriesStats countryData={this.state.CompleteData.Countries}/>
          :null}
        </div>

      </div>
    );
  }
}

export default CovidPedia;
