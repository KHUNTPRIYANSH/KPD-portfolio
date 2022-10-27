import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Tune } from "@mui/icons-material";
const Menu = () => {
  if (document.getElementById("Linkz")) {
    var Links = document.getElementById("Linkz");

    Links.style.visibility = "hidden";
    Links.style.top = "-500px";
  }
  var cnt = true;
  var showLink = () => {
    if (cnt == true) {
      console.log("vis");
      Links.style.visibility = "visible";
      Links.style.top = "80px";
      cnt = false;
    } else {
      console.log("hid");
      Links.style.visibility = "hidden";
      Links.style.top = "-500px";
      cnt = true;
    }
  };

  return (
    <>
      <nav className="side-nav">
        <div className="burger" onClick={showLink}>
          <MenuIcon />
        </div>

        <div className="m-menu" id="Linkz">
          <div className="txt">HOME</div>
          <div className="txt">ABOUT</div>
          <div className="txt">SERVICES</div>
          <div className="txt">FEEDBACK</div>
          <div className="txt">CONTACT</div>
        </div>
      </nav>
    </>
  );
};

export default Menu;
