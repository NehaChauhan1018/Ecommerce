import React from "react";
import { GlobalStyledContainer } from "../../GlobalStyles";
import { FaUserAlt } from "react-icons/fa";
import { BsFillHeartFill, BsCartDashFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";

import { StyledNavbar } from "./Navbar.styles";
import { NavLink } from "react-router-dom";
import CustomDrawer from "../CustomDrawer/CustomDrawer";

function Navbar() {
  return (
    <GlobalStyledContainer>
      <StyledNavbar>
        <div className="navbar-container">
          <div className="main-content">
            <img src="/Assets/Logo.png" alt="logo" className="image" />

            <div className="column normal-text content">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/shop">Shop</NavLink>
              <NavLink to="">About</NavLink>
              <NavLink to="/contact">Contact</NavLink>
              <NavLink to="">Tools</NavLink>
            </div>
            <div className="column normal-text">
              <NavLink to="/login">
                <FaUserAlt size={20} />
              </NavLink>
              <BiSearchAlt size={20} />
              <BsFillHeartFill size={20} />

              <NavLink to="/cart">
                {" "}
                <BsCartDashFill size={20} />
              </NavLink>
            </div>
          </div>
          <div>
          <CustomDrawer />
        </div>

        </div>

        
      </StyledNavbar>
    </GlobalStyledContainer>
  );
}

export default Navbar;
