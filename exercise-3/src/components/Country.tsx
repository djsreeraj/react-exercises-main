import { Props, language } from "../helper/types";
import { useQuery } from "@apollo/client";
import { COUNTRY_INFO } from "../helper/queries";
import { ChangeEvent, useState } from "react";

export const CountryInfo = ({ code }: Props) => {
  if (code.length > 1) {
    const { loading, error, data } = useQuery(COUNTRY_INFO, {
      variables: { code },
    });

    if (loading) return <p>Loading data...</p>;
    if (error) return <p>Error!: {error}</p>;

    if (data.country && data.country !== null) {
      return (
        <ul>
          <li data-testid="countryName"> Name: {data.country.name} </li>
          <li data-testid="countryCode"> Code: {data.country.code} </li>
          <li data-testid="countryCurrency">
            {" "}
            Currency: {data.country.currency}
          </li>
          <li data-testid="countryFlag">Flag: {data.country.emoji} </li>
          <li data-testid="countryLanguage">
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

const Country = () => {
  const [countryCode, setCountryCode] = useState<string>("");

  const handleCountryCode = (e: ChangeEvent<HTMLInputElement>): void => {
    setCountryCode(e.target.value.toUpperCase());
  };

  return (
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
  );
};

export default Country;
