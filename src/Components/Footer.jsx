import React from "react";
import "./../Style/Footer.css";
import Facebook from "./../Assets/facebook.png";
import Instagram from "./../Assets/instagram.png";
import Twitter from "./../Assets/twitter.png";
import Linkdin from "./../Assets/linkdin.png";

function Footer() {
  return (
    <>
      <div className="footer-container">
          <div className="footer-grid">
            {/* column 1 */}
            <div className="footer-grid-column">
              <div className="footer-grid-heading">Need Help</div>
              <ul className="footer-link-list">
                <li>
                  <a href="#" className="footer-link">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Track Order
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Returns & Refunds
                  </a>
                </li>
                <li>
                  <a href="3" className="footer-link">
                    FAQ's
                  </a>
                </li>
                <li>
                  <a href="3" className="footer-link">
                    Career
                  </a>
                </li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="footer-grid-column">
              <div className="footer-grid-heading">More Info</div>
              <ul className="footer-link-list">
                <li>
                  <a href="#" className="footer-link">
                    Term and Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Shipping Policy
                  </a>
                </li>
                <li>
                  <a href="3" className="footer-link">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
            {/* column 3 */}
            <div className="footer-grid-column">
              <div className="footer-grid-heading">Location</div>
              <ul className="footer-link-list">
                <li>
                  <a href="#" className="footer-link">
                    support@euphoria.in
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Eklingpura Chouraha, Ahmedabad Main Road
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    (NH 8- Near Mahadev Hotel) Udaipur, India- 313002
                  </a>
                </li>
              </ul>
              <div className="social-app">
                <a href="#fb">
                  <img src={Facebook} />
                </a>
                <a href="">
                  <img src={Instagram} />
                </a>
                <a href="">
                  <img src={Twitter} />
                </a>
                <a href="">
                  <img src={Linkdin} />
                </a>
              </div>
            </div>
          </div>
        
        <div className="footer-copyright">
          Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
        </div>
      </div>
    </>
  );
}

export default Footer;
