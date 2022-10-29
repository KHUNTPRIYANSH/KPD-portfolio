import React from "react";

const Contact = () => {
  return (
    <>
      <div className="t-title">Contact info</div>
      <div class="info">
        <div class="card">
          <ul>
            <li class="s-title">
              <strong>Country:</strong> India
            </li>
            <li class="s-title">
              <strong>City:</strong> Rajkot
            </li>
            <li class="s-title">
              <strong>Street:</strong>Ring Road
            </li>
          </ul>
        </div>
        <div class="card">
          <ul>
            <li class="s-title">
              <strong>Email:</strong>khuntpriyansh1@gmail.com
            </li>
            <li class="s-title">
              <strong>Discord:</strong>Priyansh#3461
            </li>
            <li class="s-title">
              <strong>Github:</strong>PRIYANSHKHUNT
            </li>
          </ul>
        </div>
        <div class="card">
          <ul>
            <li class="s-title">
              <strong>Instagram:</strong>@priyansh_kpd
            </li>
            <li class="s-title">
              <strong>Personal:</strong>+91 9409259856
            </li>
            <li class="s-title">
              <strong>LinkedIn:</strong>{" "}
              <a href="https://www.linkedin.com/in/priyansh-khunt-2318061b0/">
                Priyansh Khunt
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="t-title">Contact Us</div>
      <div className="message">
        <form action="" className="contactus">
          <div className="input">
            <label className="icon">
              <i class="fa fa-user-o" aria-hidden="true"></i>
            </label>
            <input type="text" className="name" placeholder="Name" />
          </div>
          <div className="input">
            <label className="icon">@</label>
            <input type="email" className="email" placeholder="Email" />
          </div>
          <div className="inmsg">
            <label className="icon msicon">
              <i class="fa fa-envelope-o" aria-hidden="true"></i>
            </label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="msg"
              placeholder="Message"
            />
          </div>
          <div className="forbtn">
            <div className="btn">Send Message</div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
