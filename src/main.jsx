import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Routers from "./router/Routers.jsx";
import "./index.css";
import FavouritesProvider from "./context/FavouritesProvider.jsx";
import ModalProduct from "./context/ModalContexts.jsx";
import BaskentProvider from "./context/BaskentContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ModalProduct>
    <BaskentProvider>
      <FavouritesProvider>
        <ChakraProvider>
          <BrowserRouter>
            <Routers />
          </BrowserRouter>
        </ChakraProvider>
      </FavouritesProvider>
    </BaskentProvider>
  </ModalProduct>
);
