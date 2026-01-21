import "./App.css";
import Places from "./component/Places";
import React from "react";
import Jewellery from "./component/Jewellery";
import Foods from "./component/Foods";

function App() {
  return (
    <div className="App">
      <Foods />
      <Places />
      <Jewellery />
    </div>
  );
}

export default App;
