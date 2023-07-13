import React from "react";
import { GlobalStyledContainer } from "../../GlobalStyles";
import { StyledFooter } from "./Footer.styles";

function Footer() {
  return (
    <StyledFooter>
      <GlobalStyledContainer>
        <div className="footer-container">
          <div className="logo ">
            <img src="/Assets/Logo.png" alt="" />
          </div>
          <div className="field-container  links">
            <p className="light-big-text">Link</p>
            <ul className="medium-text list">
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="field-container help">
            <p className="light-big-text">Help</p>
            <ul className="medium-text list">
              <li>Payment Options</li>
              <li>Returns</li>
              <li>Privacy Policies</li>
            </ul>
          </div>
          <div className="field-container newsletter">
            <p className="light-big-text">Newsletter</p>
            <div className="btn-container">
              <input type="email" placeholder="Enter Your Email Address" />
              <button className="small-text">Subscribe</button>
            </div>
          </div>
        </div>
      </GlobalStyledContainer>
    </StyledFooter>
  );
}

export default Footer;
