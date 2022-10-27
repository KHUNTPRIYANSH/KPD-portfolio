import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
const Menu = () => {
  return (
    <>
      <nav className="side-nav">
        <nav>
          <div className="burger">
            <MenuIcon />
          </div>
          <div className="txt">HOME</div>
        </nav>
      </nav>
    </>
  );
};

export default Menu;
