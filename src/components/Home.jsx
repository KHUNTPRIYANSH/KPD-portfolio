import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CountUp from "react-countup";
import Typewriter from "typewriter-effect";
import Footer from "./Footer.jsx";
import Clud from "./Cloud";
import FeedBack from "./FeedBack";
import TimeLine from "./TimeLine";
import Service from "./Service.jsx";
import Contact from "./Contact.jsx";
const Home = () => {
  return (
    <>
      <section className="home">
        <div className="frm" id="s1">
          <main>
            <div className="left">
              <h1>
                Discover my Amazing <br />
                Art Space!
              </h1>

              <div className="code">
                {"<"}
                <span className="gold">KPD</span>
                {"> "}&nbsp;
                <Typewriter
                  options={{
                    strings: [
                      " Hey, I'm Priyansh Khunt",
                      " I build amazing Websites",
                      " I'm CSE Student",
                      " I have also used flutter",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                  className="ib"
                />
                &nbsp;
                {" </"}
                <span className="gold">KPD</span>
                {">"}
              </div>
              <a href="#s4">
                <div className="btn jmp">Explore Now</div>
              </a>
            </div>
            {/* <div className="right">
              <img
                src="https://raw.githubusercontent.com/KHUNTPRIYANSH/portfollio/main/imgs/kpd.png"
                className="kpd"
              />
            </div> */}
          </main>
          <div className="num">
            <div className="n">
              <span className="gold">
                <CountUp duration={3.5} end={5} loop={true} />+
              </span>
              Years Experience
            </div>
            <div className="n">
              <span className="gold">
                <CountUp duration={3.5} end={47} />+
              </span>
              Completed Projects
            </div>
            <div className="n">
              <span className="gold">
                <CountUp duration={3.5} end={185} />+
              </span>
              Happy Customers
            </div>
            <div className="n">
              <span className="gold">
                <CountUp duration={3.5} end={14} />+
              </span>
              Honors and Awards
            </div>
          </div>
        </div>

        <section className="service" id="s2">
          <div className="t-title">My Services</div>
          <Service />
        </section>
        <section className="tml">
          <div className="t-title">
            Education <span className="gold">-</span> Journey
          </div>
          <TimeLine />
        </section>
        <section className="feed" id="s3">
          <div className="t-title">
            Feedback
            <span className="gold">{" / "}</span>
            Reviews
          </div>
          <FeedBack />
        </section>
        <section className="project f-b" id="s4">
          <div className="t-title">
            Technologies <span className="gold">{" / "}</span>
            Skills
          </div>
          <Clud />
        </section>
        <section className="contact" id="s6">
          {/* <div className="t-title">
            Info <span className="gold">{" / "}</span>
            Contact
          </div> */}
          <Contact />
        </section>

        <Footer />
      </section>
    </>
  );
};

export default Home;
