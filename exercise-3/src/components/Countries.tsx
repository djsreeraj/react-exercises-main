import React, { FC, ChangeEvent, useState } from "react";
import "./Countries.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  gql,
  useQuery,
} from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://countries.trevorblades.com",
});

const Countries: FC = () => {
  const [countryCode, setCountryCode] = useState<string>("US");
  const [continentCode, setContinentCode] = useState<string>("");

  const COUNTRY_INFO = gql`
    query Country($countryCode: ID!) {
      country(code: $countryCode) {
        name
        code
        native
        capital
        emoji
        currency
        languages {
          code
          name
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(COUNTRY_INFO, {
    variables: { countryCode },
  });

  const handleCountryCode = (e: ChangeEvent<HTMLInputElement>): void => {
    setCountryCode(e.target.value);
  };

  const handleContinentCode = (e: ChangeEvent<HTMLInputElement>): void => {
    setContinentCode(e.target.value);
  };

  return (
    <div className="countries">
      <div className="countries__details">
        <input
          type="text"
          onChange={handleCountryCode}
          placeholder="Enter Country Code"
          value={countryCode}
        />

        {(() => {
          if (loading || error) {
            return <p>{error ? error.message : "Loading..."}</p>;
          } else {
            return (
              <ul>
                <li> Name: {data.country.name} </li>
                <li> Code: {data.country.code} </li>
                <li> Currency: {data.country.currency}</li>
                <li>Flag:{data.country.emoji} </li>
                <li>
                  Languages:
                  {data.country.languages.map((item: any, index: number) => (
                    <> {item.name}, </>
                  ))}
                </li>
              </ul>
            );
          }
        })()}
      </div>

      <div className="coutries__continent">
        <input
          onChange={handleContinentCode}
          type="text"
          placeholder="Enter Continent Code"
          value={continentCode}
        />
        <h4>Countries</h4>
        <p>
          Flag: test <br /> Flag: {continentCode}
        </p>
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
