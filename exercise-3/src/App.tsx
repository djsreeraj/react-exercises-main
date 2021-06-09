import { FC } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Country from "./components/Country";
import Continent from "./components/Continent";
import "./App.css";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://countries.trevorblades.com",
});

const App: FC = () => {
  return (
    <div className="countries">
      <ApolloProvider client={client}>
        <Country />
        <Continent />
      </ApolloProvider>
    </div>
  );
};

export default App;
