import { CONTINENT_INFO } from "../helper/queries";
import { Props, country } from "../helper/types";
import { useQuery } from "@apollo/client";
import { ChangeEvent, useState } from "react";

export const ContinentInfo = ({ code }: Props) => {
  if (code.length > 1) {
    const { loading, error, data } = useQuery(CONTINENT_INFO, {
      variables: { code },
    });

    if (loading) return <p>Loading data...</p>;
    if (error) return <p>Error!</p>;

    if (data.continent && data.continent !== null) {
      return (
        <ul data-testid="continentDetails">
          <h4 data-testid="continentName">
            Countries of {data.continent.name}
          </h4>
          {data.continent.countries.map((item: country, index: number) => (
            <li key={index}>
              <span className="country__emoji"> {item.emoji}</span>
              {item.name}
            </li>
          ))}
        </ul>
      );
    } else {
      return <p>Invalid code...Try Again</p>;
    }
  }
  return <p> </p>;
};

const Continent = () => {
  const [continentCode, setContinentCode] = useState<string>("");

  const handleContinentCode = (e: ChangeEvent<HTMLInputElement>): void => {
    setContinentCode(e.target.value.toUpperCase());
  };

  return (
    <div className="coutries__continent">
      <input
        onChange={handleContinentCode}
        type="text"
        placeholder="Enter Continent Code ( eg: EU )"
        value={continentCode}
      />
      <div className="countries__continent__results">
        <ContinentInfo code={continentCode} />
      </div>
    </div>
  );
};

export default Continent;
