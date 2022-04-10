import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {colorConfig} from "./theme";
import { ColorModeScript } from "@chakra-ui/react";
import { SnackbarProvider } from "notistack";

ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider>
      <ColorModeScript initialColorMode={colorConfig.initialColorMode} />
      <App />
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
