import { FC } from "react";
import Country from "./components/Country";
import Continent from "./components/Continent";
import "./App.css";

const App: FC = () => {
  return (
    <div className="countries">
      <Country />
      <Continent />
    </div>
  );
};

export default App;
