import React from "react";
import { StyledUpperNavbar } from "./UpperNavbar.styles";
import { IoIosCall, IoMdMail } from "react-icons/io";
import { Button } from "antd";
import { StyledFullContainer } from "../../GlobalStyles";
function UpperNavbar() {
  return (
    <StyledFullContainer>
      <StyledUpperNavbar>
        <div className="main-container">
          <div className="column">
            <IoIosCall className="icons" />
            <div>
              <p className="big-text">Call us</p>
              <p className="normal-text">+91 97600 89153</p>
            </div>
          </div>
          <div className="column">
            <IoMdMail className="icons" />
            <div>
              <p className="big-text">Send us mail:</p>
              <p className="normal-text">nehachauhan101802@gmail.com</p>
            </div>
          </div>
          <div className="column">
            <Button className="big-text">Become a seller</Button>
          </div>
        </div>
      </StyledUpperNavbar>
    </StyledFullContainer>
  );
}

export default UpperNavbar;
