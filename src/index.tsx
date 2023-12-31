import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/routes";
import GlobalStyles from "./globalStyles";
import { Client } from "src/Utils/API";
import { ApolloProvider } from "@apollo/client";
import { GlobalStorageProvider } from "src/Utils/Context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={Client}>
      <GlobalStorageProvider>
        <GlobalStyles />
        <RouterProvider router={router} />
      </GlobalStorageProvider>
    </ApolloProvider>
  </React.StrictMode>,
  rootElement
);
