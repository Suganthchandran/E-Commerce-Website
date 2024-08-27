import React from 'react';
import '../styles/Footer.css';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-section footer-about">
          <img src={assets.logo} className="footer-logo" alt="Company Logo" />
          <p className="footer-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis cum esse asperiores possimus sapiente molestias suscipit blanditiis sit aut excepturi provident pariatur aliquam dolorum, dignissimos ab ad quas? Deserunt, assumenda?
          </p>
        </div>

        <div className="footer-section">
          <p className="footer-title">COMPANY</p>
          <ul className="footer-list">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-section">
          <p className="footer-title">GET IN TOUCH</p>
          <ul className="footer-list">
            <li>+91 9042482004</li>
            <li>suganthchandran07@gmail.com</li>
          </ul>
        </div>

        <div className="footer-section footer-subscribe">
          <p className="footer-title">Subscribe Here</p>
          <form className="subscribe-form">
            <input type="text" placeholder="Enter your email..." className="subscribe-input" />
            <input type="submit" value="Submit" className="subscribe-button" />
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
