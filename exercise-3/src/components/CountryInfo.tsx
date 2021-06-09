import { Props, language } from "./types";
import { useQuery } from "@apollo/client";
import { COUNTRY_INFO } from "./queries";

export const CountryInfo = ({ code }: Props) => {
  console.log("country");
  if (code.length > 1) {
    const { loading, error, data } = useQuery(COUNTRY_INFO, {
      variables: { code },
    });

    if (loading) return <p>Loading data...</p>;
    if (error) return <p>Error!</p>;

    if (data.country && data.country !== null) {
      console.log(data);
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
