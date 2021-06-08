import { FC, ChangeEvent, useState } from "react";
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

const CONTINENT_INFO = gql`
  query Continent($code: ID!) {
    continent(code: $code) {
      name
      code
      countries {
        code
        name
        emoji
      }
    }
  }
`;

type Props = {
  code: string;
};

interface country {
  code: string;
  name: string;
  emoji: string;
}

interface language {
  code: string;
  name: string;
}

const ContinentInfo = ({ code }: Props) => {
  if (code.length > 1) {
    const { loading, error, data } = useQuery(CONTINENT_INFO, {
      variables: { code },
    });

    if (loading) return <p>Loading data...</p>;
    if (error) return <p>Error!</p>;

    if (data.continent && data.continent !== null) {
      return (
        <ul>
          <h4>Countries of {data.continent.name}</h4> <br />
          {data.continent.countries.map((item: country, index: number) => (
            <li key={index}>
              {item.emoji} {item.name}
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

const COUNTRY_INFO = gql`
  query Country($code: ID!) {
    country(code: $code) {
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

const CountryInfo = ({ code }: Props) => {
  if (code.length > 1) {
    const { loading, error, data } = useQuery(COUNTRY_INFO, {
      variables: { code },
    });

    if (loading) return <p>Loading data...</p>;
    if (error) return <p>Error!</p>;

    if (data.country && data.country !== null) {
      return (
        <ul>
          <li> Name: {data.country.name} </li>
          <li> Code: {data.country.code} </li>
          <li> Currency: {data.country.currency}</li>
          <li>Flag:{data.country.emoji} </li>
          <li>
            Languages:
            {data.country.languages.map((item: language, index: number) => (
              <span key={index}> {(index ? ", " : "") + item.name} </span>
            ))}
          </li>
        </ul>
      );
    } else {
      return <p>Invalid code...Try Again</p>;
    }
  }
  return <p> </p>;
};

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
