import React from 'react'
import "./Contact.css"

const Contact = () => {
    return (
        <>
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
        </>
    )
}

export default Contact
