import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";
import { csv } from "d3-fetch";


const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/us-states/TX-48-texas-counties.json";

//const chipData = "https://raw.githubusercontent.com/tchan24/PepsiCo-Heatmap-Project/main/PepsicoDataAnalysis.py";

const MapChart = () => {
  const [data, setData] = useState([]);

  response_API = reqests.get('https://raw.githubusercontent.com/tchan24/PepsiCo-Heatmap-Project/main/PepsicoDataAnalysis.py')
  //pulling data from API using get function
  chipData = response_API.text
  //setting data into chipData by pulling from API

  useEffect(() => {
    csv(chipData).then(counties => {
      setData(counties);
    });
  }, []);

  const colorScale = scaleQuantile()
    .domain(data.map(d => d.SALE_QUANTITY))
    .range([
      "#ffedea",
      "#ffcec5",
      "#ffad9f",
      "#ff8a75",
      "#ff5533",
      "#e2492d",
      "#be3d26",
      "#9a311f",
      "#782618"
    ]);

  return (
    <ComposableMap projection="geoAlbersUsa">
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map(geo => {
            const cur = data.find(s => s.NAME === geo.COUNTY);
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={cur ? colorScale(cur.SALE_QUANTITY) : "#EEE"}
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
};

export default MapChart;
