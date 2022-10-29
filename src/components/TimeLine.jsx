import React from "react";
import "./TimeLine.css";
const TimeLine = () => {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic"
        rel="stylesheet"
        type="text/css"
      />
      {/* The Timeline */}
      <ul className="timeline">
        {/* Item 1 */}
        <li>
          <div className="direction-r">
            <div className="flag-wrapper">
              <span className="flag">GTU</span>
              <span className="time-wrapper">
                <span className="time">2022 - present</span>
              </span>
            </div>
            <div className="desc">
              Me current student at GECR in Computer engineering!
            </div>
          </div>
        </li>
        {/* Item 2 */}
        <li>
          <div className="direction-l">
            <div className="flag-wrapper">
              <span className="flag">GSHSEB</span>
              <span className="time-wrapper">
                <span className="time">2019 - 2021</span>
              </span>
            </div>
            <div className="desc">
              11th and 12th from GSHSEB and got 86% in the Boards.
            </div>
          </div>
        </li>
        {/* Item 3 */}
        <li>
          <div className="direction-r">
            <div className="flag-wrapper">
              <span className="flag">GSEB </span>
              <span className="time-wrapper">
                <span className="time">2018 - 2019</span>
              </span>
            </div>
            <div className="desc">
              10th from GSEB and got 98 Pr. in the Boards & School first.
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TimeLine;
