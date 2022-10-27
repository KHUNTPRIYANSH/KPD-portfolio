import React from "react";
import Aside from "./components/Aside";
import Home from "./components/Home";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "./components/Menu";
const App = () => {
  const showAside = () => {};
  const showMenu = () => {};
  return (
    <>
      <div className="hid-frm">
        <div className="nv">
          <IconButton onClick={showAside}>
            <MoreVertIcon className="bbb" />
          </IconButton>

          <IconButton onClick={showMenu}>
            <MenuIcon className="bbb" />
          </IconButton>
        </div>
        <div className="app">
          <Aside />
          <Home />
          <Menu />
        </div>
      </div>
    </>
  );
};

export default App;
