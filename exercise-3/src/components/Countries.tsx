import { FC, ChangeEvent, useState } from "react";
import "./Countries.css";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { CountryInfo } from "./CountryInfo";
import { ContinentInfo } from "./ContinentInfo";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://countries.trevorblades.com",
});

const Countries: FC = () => {
  const [countryCode, setCountryCode] = useState<string>("");
  const [continentCode, setContinentCode] = useState<string>("");

  const handleCountryCode = (e: ChangeEvent<HTMLInputElement>): void => {
    setCountryCode(e.target.value.toUpperCase());
  };

  const handleContinentCode = (e: ChangeEvent<HTMLInputElement>): void => {
    setContinentCode(e.target.value.toUpperCase());
  };

  return (
    <div className="countries">
      <div className="countries__details">
        <input
          type="text"
          onChange={handleCountryCode}
          placeholder="Enter Country Code ( eg: IN )"
          value={countryCode}
        />

        <div className="coutries__continent__results">
          <CountryInfo code={countryCode} />
        </div>
      </div>

      <div className="coutries__continent">
        <input
          onChange={handleContinentCode}
          type="text"
          placeholder="Enter Continent Code ( eg: EU )"
          value={continentCode}
        />

        <div className="coutries__continent__results">
          <ContinentInfo code={continentCode} />
        </div>
      </div>
    </div>
  );
};

const CountriesData: FC = () => {
  return (
    <ApolloProvider client={client}>
      <Countries />
    </ApolloProvider>
  );
};

export default CountriesData;
