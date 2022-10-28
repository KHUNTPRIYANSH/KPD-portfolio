import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
const Menu = () => {
  const [menu, setMenu] = useState(false);

  var showLink = () => {
    if (menu == false) {
      console.log("vis");

      document.getElementById("Linkz").style.visibility = "visible";
      document.getElementById("Linkz").style.top = "80px";
      setMenu(true);
    } else {
      console.log("hid");
      document.getElementById("Linkz").style.visibility = "hidden";
      document.getElementById("Linkz").style.top = "-700px";

      setMenu(false);
    }
  };

  return (
    <>
      <nav className="side-nav">
        <div className="burger" onClick={showLink}>
          <MenuIcon />
        </div>

        <div className="m-menu" id="Linkz">
          <a href="#s1" className="txt">
            HOME
          </a>

          <a href="#s2" className="txt">
            SERVICES
          </a>
          <a href="#s3" className="txt">
            FEEDBACK
          </a>
          <a href="#s5" className="txt">
            SKILLS
          </a>
          <a href="#s6" className="txt">
            PROJECTS
          </a>
          <a href="#s7" className="txt">
            CONTACT
          </a>
        </div>
      </nav>
    </>
  );
};

export default Menu;
