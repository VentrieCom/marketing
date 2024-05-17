import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { BaseTheme } from "./libs/components/BaseProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={BaseTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
