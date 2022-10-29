import React from "react";

const Contact = () => {
<<<<<<< Updated upstream
  return (
    <>
      <div className="info">
        <div className="card">
          <ul>
            <li className="s-title">
              <strong>Country:</strong> India
            </li>
            <li className="s-title">
              <strong>City:</strong> Rajkot
            </li>
            <li className="s-title">
              <strong>Street:</strong>Ring Road
            </li>
          </ul>
        </div>
        <div className="card">
          <ul>
            <li className="s-title">
              <strong>Email:</strong>khuntpriyansh1@gmail.com
            </li>
            <li className="s-title">
              <strong>Discord:</strong>Priyansh#3461
            </li>
            <li className="s-title">
              <strong>Github:</strong>PRIYANSHKHUNT
            </li>
          </ul>
        </div>
        <div className="card">
          <ul>
            <li className="s-title">
              <strong>Instagram:</strong>@priyansh_kpd
            </li>
            <li className="s-title">
              <strong>Personal:</strong>+91 9409259856
            </li>
            <li className="s-title">
              <strong>Other:</strong>+91 7436018715
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
=======
    return (
        <>
            <div className="t-title">
            Contact info
            </div>
            <div className="info">
                <div className="card">
                    <ul>
                        <li className='s-title'> <strong>Country:</strong> India </li>
                        <li className='s-title'><strong>City:</strong> Rajkot </li>
                        <li className='s-title'><strong>Street:</strong>Ring Road</li>
                    </ul>
                </div>
                <div className="card">
                    <ul>
                        <li className='s-title'><strong>Email:</strong>carter.inbox@mail.com</li>
                        <li className='s-title'><strong>Telegram:</strong>@arter</li>
                        <li className='s-title'><strong>Skype:</strong>Arter</li>
                    </ul>
                </div>
                <div className="card">
                    <ul>
                        <li className="s-title"><strong>Support:</strong>+91 7123456890</li>
                        <li className="s-title"><strong>Office:</strong>+91 9812345670</li>
                        <li className="s-title"><strong>Personal:</strong>+91 6012345789</li>
                    </ul>
                </div>
            </div>
            <div className="t-title">
            Contact Us
            </div>
            <div className="message">
                <form action="" className="contactus">
                    <div className="input">
                        <label className="icon"><i class="fa fa-user-o" aria-hidden="true"></i></label>
                        <input type="text" className="name" placeholder='Name'/>
                    </div>
                    <div className="input">
                        <label className="icon">@</label>
                        <input type="email" className="email" placeholder='Email'/>
                    </div>
                    <div className="inmsg">
                        <label className="icon msicon"><i class="fa fa-envelope-o" aria-hidden="true"></i></label>
                        <textarea name="" id="" cols="30" rows="10" className="msg" placeholder='Message'/>
                    </div>
                    <div className="forbtn">
                        <div className="btn">Send</div> 
                    </div>
                </form>
            </div>
        </>
    )
}
>>>>>>> Stashed changes

export default Contact;
