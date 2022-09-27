import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div class="footer">
        <div className="principal-footer">
            <h1 className="principal-footer-h1">MockupPhotos</h1>
            <p className="principal-footer-p">MockupPhotos.com is a online mockup platform for <br />high quality mockup photos, made by independent <br />creatives from all around the world.</p>
        </div>
        <div className="thing-footer">
            <h1 className="thing-footer-h1">Company</h1>
            <a className="thing-footer-a">Terms</a>
            <a className="thing-footer-a">Pricing</a>
        </div>
        <div className="all-footer">
            <h1 className="all-footer-h1">Freebies</h1>
            <a className="all-footer-a">All free mockups</a>
            <a className="all-footer-a">Free print mockups</a>
            <a className="all-footer-a">Free iPhone X mockups</a>
            <a className="all-footer-a">Free iPad mockups</a>
            <a className="all-footer-a">Wall Mockups</a>
        </div>
    </div>
  )
}
