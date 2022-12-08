import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Container from "./components/Container";
import CityDetails from "./components/CityDetails";
import { Provider } from "react-redux";
import { store } from "./features/store";

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/daydetails/:id&:name" element={<CityDetails />} />
      </Routes>
    </Provider>
  );
};

export default App;
