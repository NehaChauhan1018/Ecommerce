import { Button } from "antd";
import React from "react";
import { StyledFullContainer } from "../../GlobalStyles";
import { StyledInstagram } from "./Instagram.styles";

function Instagram() {
  return (
    <StyledInstagram>
      <StyledFullContainer>
        <div className="insta-container">
          <p className="big-head">Our Instagram</p>
          <p className="small-head">Follow Our Store On Instagram</p>
          <Button className="big-text btn">Follow Us</Button>
        </div>
      </StyledFullContainer>
    </StyledInstagram>
  );
}

export default Instagram;
