import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routerApp } from "./router";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/theme";

localStorage.setItem("chakra-ui-color-mode", "dark");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={routerApp} />
    </ChakraProvider>
  </React.StrictMode>
);
