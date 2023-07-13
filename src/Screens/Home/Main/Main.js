import { Button } from "antd";

import React from "react";
import { useNavigate } from "react-router";
import Blogs from "../../../Components/Blogs/Blogs";
import CustomDrawer from "../../../Components/CustomDrawer/CustomDrawer";
import Footer from "../../../Components/Footer/Footer";
import Instagram from "../../../Components/Instagram/Instagram";
import Navbar from "../../../Components/Navbar/Navbar";
import Picks from "../../../Components/Picks/Picks";
import UpperNavbar from "../../../Components/UpperNavbar/UpperNavbar";
import { StyledFullContainer } from "../../../GlobalStyles";
import { StyledHomeMain } from "./Main.styles";

function Main() {
  const navigate = useNavigate();
  return (
    <StyledFullContainer>
      <StyledHomeMain>
        <UpperNavbar />

        <div className="main-container">
          <Navbar />
          <div className="main-body">
            <div className="container ">
              <p className="big-head">
                {" "}
                <span className="big-head span">Auto </span>Spare Parts
              </p>
              <p className="medium-head">All Major Brands Available</p>
              <Button className="small-head" onClick={() => navigate("shop")}>
                Shop Now
              </Button>
            </div>
            <img src="/Assets/Image.png" alt="" />
          </div>
        </div>
        <Picks />
        <Blogs />
        <Instagram />
        <Footer />
      </StyledHomeMain>
    </StyledFullContainer>
  );
}

export default Main;
