import React from 'react'
import appstore from "../../assets/app-store.png"
import playstore from "../../assets/play-store.png"
import logo from "../../assets/logo-white.png"
import "./Footer.css"

const Footer = () => {
    return (
        <div className='footer'>
            <div className="above">
                <div className="first">
                    <h3>Download Our App</h3>
                    <p>Download App for Android and ios mobile phone</p>
                    <div className="stores-img">
                        <img src={playstore} alt="" />
                        <img src={appstore} alt="" />
                    </div>

                </div>
                <div className="second">
                    <img src={logo} alt="" />
                    <p>Our Purposse is To Sustainably Make the pleasrue and Benefits of Sports accassible to the Many.</p>
                </div>
                <div className="third">
                    <h3>Useful Links</h3>
                    <li>Coupons</li>
                    <li>Blog Post</li>
                    <li>Return Policy</li>
                    <li>Join Affiliate</li>
                </div>
                <div className="four">
                <h3>Follow Us</h3>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                    <li>Youtube</li>
                </div>
            </div>
            <hr />
            <div className="copyright">

            Copyright 2024 - Karthik Sai
            </div>

        </div>
    )
}

export default Footer
