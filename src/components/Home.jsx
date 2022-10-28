import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FeedBack from "./FeedBack";
import CountUp from "react-countup";
import Typewriter from "typewriter-effect";
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
                      " I build amazing Websites & Projects",
                      " I'm Computer Engineering Student",
                      " I have also used flutter littlebit",
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
              <div className="btn jmp">Explore Now</div>
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
          <div className="row">
            <div className="col">
              <div className="t-title">Web Development</div>
              <div className="s-title">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat
                tenetur pariatur doloribus.
              </div>
              <div className="gold">
                ORDER NOW <ArrowForwardIosIcon className="gold" />
              </div>
            </div>
            <div className="col">
              <div className="t-title">UI/UX Design</div>
              <div className="s-title">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat
                tenetur pariatur doloribus.
              </div>
              <div className="gold">
                ORDER NOW <ArrowForwardIosIcon className="gold" />
              </div>
            </div>
            <div className="col">
              <div className="t-title">Advertising</div>
              <div className="s-title">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat
                tenetur pariatur doloribus.
              </div>
              <div className="gold">
                ORDER NOW <ArrowForwardIosIcon className="gold" />
              </div>
            </div>

            <div className="col">
              <div className="t-title">Smart Contracts</div>
              <div className="s-title">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat
                tenetur pariatur doloribus.
              </div>
              <div className="gold">
                ORDER NOW <ArrowForwardIosIcon className="gold" />
              </div>
            </div>
            <div className="col">
              <div className="t-title">App Development</div>
              <div className="s-title">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat
                tenetur pariatur doloribus.
              </div>
              <div className="gold">
                ORDER NOW <ArrowForwardIosIcon className="gold" />
              </div>
            </div>
            <div className="col">
              <div className="t-title">AI / ML</div>
              <div className="s-title">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat
                tenetur pariatur doloribus.
              </div>
              <div className="gold">
                ORDER NOW <ArrowForwardIosIcon className="gold" />
              </div>
            </div>
          </div>
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
            Skills    
          </div>
         {/* Aya Code nakh deje */}
        </section>

        <footer>
          <div className="cp">
            <div className="left ff">© 2022 All Rights Reserved.</div>
            <div className="mid ff">
              Made with &nbsp; <FavoriteIcon className="gold" />
              &nbsp; by
              <span className="gold">&nbsp; KPD </span>
            </div>
            <div className="right ff">Email: khuntpriyansh1@gmail.com.com</div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Home;
