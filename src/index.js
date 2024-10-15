import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { ApolloProvider } from "@apollo/client";
import { client } from "./services/apolloClientConfig";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ApolloProvider>
  </React.StrictMode>
);
