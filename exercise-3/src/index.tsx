import ReactDOM from "react-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import App from "./App";
import "./index.css";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://countries.trevorblades.com",
});

ReactDOM.render(
  <div>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </div>,
  document.getElementById("root")
);
