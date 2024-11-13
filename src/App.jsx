import React from "react";
import Home from "./components/Home";
import Red from "./components/Red";
import Blue from "./components/Blue";
import Celadon from "./components/Celadon";
import RussianViolet from "./components/RussianViolet";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
  <>
    <div id="container">
      <div id="main-section"><Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/blue" element={<Blue/>}/>
          <Route path="/red" element={<Red/>} />
          <Route path="/celadon" element={<Celadon/>} />
          <Route path="/russian-violet" element={<RussianViolet/>} />
        </Routes>
      </div>
    </div>
    <footer>
        <NavBar />
    </footer>
  </>);
}

export default App;
