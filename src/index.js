import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import MapChart from "./MapChart";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'TOSTITOS' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <body>
      <form onSubmit={this.handleSubmit}>
        <label>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="TOSTITOS">TOSTITOS</option>
            <option value="LAY'S">LAY'S</option>
            <option value="DORITOS">DORITOS</option>
            <option value="SMART FOODS">SMART FOODS</option>
            <option value="NUTS & SEEDS">NUTS & SEEDS</option>
            <option value="CHEETOS">CHEETOS</option>
            <option value="POPCORNERS">POPCORNERS</option>
            <option value="MUNCHIES">MUNCHIES</option>
            <option value="HISPANIC">HISPANIC</option>
            <option value="FRITOS">FRITOS</option>
            <option value="RUFFLES">RUFFLES</option>
            <option value="CHESTERS">CHESTERS</option>
            <option value="SABRITAS">SABRITAS</option>
            <option value="FUNYUNS">FUNYUNS</option>
            <option value="BAKEN-ETS">BAKEN-ETS</option>
            <option value="SANTITAS">SANTITAS</option>
            <option value="MUNCHOS">MUNCHOS</option>
            <option value="GRANDMA'S COOKIES">GRANDMA'S COOKIES</option>
            <option value="GAMESA">GAMESA</option>
            <option value="SUNCHIPS">SUNCHIPS</option>
            <option value="VARIETY PACK">VARIETY PACK</option>
            <option value="CRACKERS">CRACKERS</option>
            <option value="MATADOR    (MEATS)">MATADOR    (MEATS)</option>
            <option value="NUT HARVEST">NUT HARVEST</option>
            <option value="ROLD GOLD">ROLD GOLD</option>
            <option value="BEYOND JERKY">BEYOND JERKY</option>
            <option value="CRACKER JACK">CRACKER JACK</option>
            <option value="BARE SNACKS">BARE SNACKS</option>
            <option value="OFF THE EATEN PATH">OFF THE EATEN PATH</option>
            <option value="MIXED">MIXED</option>
            <option value="QUAKER">QUAKER</option>
            <option value="MISS VICKIES">MISS VICKIES</option>
            <option value="PLANTAINS">PLANTAINS</option>
            <option value="SIMPLY NATURAL">SIMPLY NATURAL</option>
            <option value="GOLDEN GRAIN">GOLDEN GRAIN</option>
            <option value="SPITZ SUNFLOWER SEED">SPITZ SUNFLOWER SEED</option>
            <option value="STACY'S PITA CHIPS">STACY'S PITA CHIPS</option>
            <option value="QUAKER OATMEAL">QUAKER OATMEAL</option>
            <option value="QUAKER BARS">QUAKER BARS</option>
            <option value="SABRITONES">SABRITONES</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
        <div>
          <MapChart />
        </div>
      </body>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
