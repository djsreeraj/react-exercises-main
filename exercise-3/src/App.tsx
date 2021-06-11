import { FC } from "react";
import Country from "./components/Country";
import Continent from "./components/Continent";
import "./App.css";
import mapImg from "../public/images/map.jpg";

const App: FC = () => {
  return (
    <div className="main">
      <div className="main__sidebar">
        <div className="main__header">
          <h1 className="title">
            <span className="title_first">Country</span>
            <span className="title_second">Stack</span>
          </h1>
          <p className="main__description">
            Easily Find Country, Continent informations.
          </p>
          <br />
          <br />
          <br />
          <p className="main__details">
            <ul>
              <li>
                <b>Country Details </b>: Enter Country code and get details of
                the country. Eg: IN
              </li>
              <li>
                <b>Continent Details </b>: Enter Continent code and get list of
                all countries. Eg: EU
              </li>
            </ul>
          </p>
        </div>
        <div className="sidebar__footer">
          <img src={mapImg} alt="" />

          <p className="main__footer"> CountryStack © 2021</p>
        </div>
      </div>

      <div className="countries">
        <Country />
        <Continent />
      </div>
    </div>
  );
};

export default App;
