import React, { useState } from "react";
import Aside from "./components/Aside";
import Home from "./components/Home";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "./components/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  const [aside, setAside] = useState(false);

  var showAside = () => {
    if (aside == false) {
      console.log("vis");

      document.getElementById("Aside").style.visibility = "visible";
      document.getElementById("Aside").style.left = "0px";
      document.getElementById("Aside").style.top = "50px";
      setAside(true);
    } else {
      console.log("hid");
      document.getElementById("Aside").style.visibility = "hidden";
      document.getElementById("Aside").style.left = "-700px";

      setAside(false);
    }
  };
  const [men, setMen] = useState(false);

  var showMen = () => {
    if (men == false) {
      console.log("vis");

      document.getElementById("side-nav").style.visibility = "visible";
      document.getElementById("side-nav").style.right = "0px";
      document.getElementById("side-nav").style.top = "50px";
      setMen(true);
    } else {
      console.log("hid");
      document.getElementById("side-nav").style.visibility = "hidden";
      document.getElementById("side-nav").style.right = "-300px";

      setMen(false);
    }
  };
  return (
    <Router>
      <div className="hid-frm">
        <div className="nv">
          <IconButton onClick={showAside}>
            <MoreVertIcon className="bbb" />
          </IconButton>
          <strong>
            {" "}
            {" </"}
            <span className="gold">KPD</span>
            {">"}
          </strong>
          <IconButton onClick={showMen}>
            <MenuIcon className="bbb" />
          </IconButton>
        </div>
        <div className="app">
          <Aside />
          <Home />
          <Menu />
        </div>
      </div>
    </Router>
  );
};

export default App;
