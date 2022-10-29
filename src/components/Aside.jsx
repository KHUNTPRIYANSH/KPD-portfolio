import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import DownloadIcon from "@mui/icons-material/Download";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailIcon from "@mui/icons-material/Mail";
const Aside = () => {
  return (
    <aside id="Aside">
      <div className="a-1">
        <div className="dp">
          <img
            src="https://avatars.githubusercontent.com/u/58349765?s=400&u=22e094b356d4541a0372f11782d1263e0cbdcb56&v=4"
            alt=""
          />
        </div>
        <div className="hero-txt">Priyansh Khunt</div>
        <div className="s-title">
          Front-end Developer <br />
          Ui/UX Designer
        </div>
      </div>
      <div className="a-2">
        <div className="info-txt">
          <strong>Residence:</strong>
          <div className="s-title">India</div>
        </div>
        <div className="info-txt">
          <strong>City:</strong>
          <div className="s-title">Rajkot </div>
        </div>
        <div className="info-txt">
          <strong>Age:</strong>
          <div className="s-title">20</div>
        </div>
        <div className="line"></div>
      </div>
      <div className="a-3">
        <strong>Languages</strong>
        <div className="pr">
          <div className="rp">
            <div class="radialProgressBar progress-70">
              <div class="overlay">70%</div>
            </div>
            <strong>Hindi</strong>
          </div>

          <div className="rp">
            <div class="radialProgressBar progress-90">
              <div class="overlay">87%</div>
            </div>
            <strong>English</strong>
          </div>

          <div className="rp">
            <div class="radialProgressBar progress-100">
              <div class="overlay">99%</div>
            </div>
            <strong>Gujarati</strong>
          </div>
        </div>
        <div className="line"></div>
      </div>
      <div className="a-4">
        <strong>Coding</strong>
        <div className="pro-sec">
          <div className="pro">
            <div className="info-txt">
              <strong>HTML</strong>
              <div className="s-title">90%</div>
            </div>
            <div class="progress">
              <div class="progress-value p1"></div>
            </div>
          </div>
          <div className="pro">
            <div className="info-txt">
              <strong>CSS</strong>
              <div className="s-title">95%</div>
            </div>
            <div class="progress">
              <div class="progress-value p2"></div>
            </div>
          </div>
          <div className="pro">
            <div className="info-txt">
              <strong>JavaScript</strong>
              <div className="s-title">85%</div>
            </div>
            <div class="progress">
              <div class="progress-value p3"></div>
            </div>
          </div>
          <div className="pro">
            <div className="info-txt">
              <strong>Solidity</strong>
              <div className="s-title">88%</div>
            </div>
            <div class="progress">
              <div class="progress-value p4"></div>
            </div>
          </div>
          <div className="pro">
            <div className="info-txt">
              <strong>C++</strong>
              <div className="s-title">83%</div>
            </div>
            <div class="progress">
              <div class="progress-value p5"></div>
            </div>
          </div>
          <div className="pro">
            <div className="info-txt">
              <strong>Java</strong>
              <div className="s-title">92%</div>
            </div>
            <div class="progress">
              <div class="progress-value p6"></div>
            </div>
          </div>
          <div className="line"></div>
        </div>
      </div>
      <div className="a-5">
        <strong>Knowledge</strong>
        <div className="tic-sec">
          <div className="tic">
            <DoneIcon id="tic-r" /> Bootstrap, Materialize
          </div>
          <div className="tic">
            <DoneIcon id="tic-r" /> Stylus, Sass, Less
          </div>
          <div className="tic">
            <DoneIcon id="tic-r" /> Gulp, Webpack, Grunt
          </div>
          <div className="tic">
            <DoneIcon id="tic-r" /> GIT knowledge
          </div>
          <div className="tic">
            <DoneIcon id="tic-r" /> Solidity , Web 3
          </div>
          <div className="line"></div>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1VPdytq8-Hlpxs-aWoZ0T_6vzIcyZObge/view?usp=share_link"
            className="down"
          >
            DOWNLOAD CV <DownloadIcon className="down-icon" />
          </a>
        </div>
      </div>
      <div className="a-6">
        <center>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/priyansh-khunt-2318061b0/"
          >
            <LinkedInIcon />
          </a>
          <a target="_blank" href="https://www.instagram.com/priyansh_kpd/">
            <InstagramIcon />
          </a>
          <a target="_blank" href="https://github.com/KHUNTPRIYANSH">
            <GitHubIcon />
          </a>
          <a target="_blank" href="https://mail.google.com/mail/u/0/#inbox">
            <MailIcon />
          </a>
          <a target="_blank" href="https://twitter.com/Whitedevil1237">
            <TwitterIcon />
          </a>
        </center>
      </div>
    </aside>
  );
};

export default Aside;
