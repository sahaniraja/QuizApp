import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
// scroll bar
import "simplebar/src/simplebar.css";
import { Provider as ReduxProvider } from "react-redux";

import App from "./App";
import { store } from "./store";

axios.defaults.baseURL = "https://nodejsquizapi.herokuapp.com/";
axios.defaults.headers.common["Authorization"] =
  `Bearer ` + localStorage.getItem("token");

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </ReduxProvider>
  </StrictMode>
);
