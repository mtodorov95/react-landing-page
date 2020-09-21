import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./Footer.css";
import PublicIcon from "@material-ui/icons/Public";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";

function Footer() {
  return (
    <div className="footer">
      <section className="footer__subscription">
        <p className="footer__subscriptionHeading">
          Join the adventure newslatter to recieve our best vacation deals
        </p>
        <p className="footer__subscriptionText">
          You can unsubscribe at any time
        </p>
        <div className="footer__inputContainer">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="footer__input"
            />
            <Button buttonStyle="button__outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer__linksContainer">
        <div className="footer__linksWrapper">
          <div className="footer__links">
            <h2>About Us</h2>
            <Link to="/signup">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Services</Link>
          </div>
          <div className="footer__links">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
      </div>
      <section className="footer__socialMedia">
        <div className="footer__socialMediaWrap">
          <div className="footer__logo">
            <Link to="/" className="footer__socialLink">
              Traveler <PublicIcon />
            </Link>
          </div>
          <small className="footer__rights">© Traveler 2020</small>
          <div className="footer__socialIcons">
            <Link to="/" className="footer__socialIconLink">
              <FacebookIcon />
            </Link>
            <Link to="/" className="footer__socialIconLink">
              <InstagramIcon />
            </Link>
            <Link to="/" className="footer__socialIconLink">
              <TwitterIcon />
            </Link>
            <Link to="/" className="footer__socialIconLink">
              <YouTubeIcon />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
