import { CONTINENT_INFO } from "./queries";
import { Props, country } from "./types";
import { useQuery } from "@apollo/client";

export const ContinentInfo = ({ code }: Props) => {
  console.log("continent");
  if (code.length > 1) {
    const { loading, error, data } = useQuery(CONTINENT_INFO, {
      variables: { code },
    });

    if (loading) return <p>Loading data...</p>;
    if (error) return <p>Error!</p>;

    if (data.continent && data.continent !== null) {
      return (
        <ul>
          <h4>Countries of {data.continent.name}</h4>
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
