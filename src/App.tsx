import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Join } from "./components/join";
import { Header } from "./components/header";

const App = ({ location }: any) => {
  return (
    <div className="App">
      <Header />
      <Join location={location}></Join>
    </div>
  );
};

export default App;
