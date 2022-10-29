import React from 'react'
import "./Contact.css"

const Contact = () => {
    return (
        <>
            <div className="info">
                <div className="reinfo card">
                    <ul>
                        <li> <strong>Country:</strong> India </li>
                        <li><strong>City:</strong> Rajkot </li>
                        <li><strong>Street:</strong>Ring Road</li>
                    </ul>
                </div>
                <div className="soinf card">
                    <ul>
                        <li><strong>Email:</strong>carter.inbox@mail.com</li>
                        <li><strong>Telegram:</strong>@arter</li>
                        <li><strong>Skype:</strong>Arter</li>
                    </ul>
                </div>
                <div className="poinfo card">
                    <ul>
                        <li>Support</li>
                        <li>Office</li>
                        <li>Personel</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Contact
