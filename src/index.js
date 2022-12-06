import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./Component/configStore";
import Burger from "./Component/Burger";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeTemplate from "./Component/HomeTemplate";
import Total from "./Component/Total";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<HomeTemplate />}>
            <Route path="burger" element={<Burger />}></Route>
            <Route path="total" element={<Total />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </>
);
