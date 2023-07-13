import { Button, Drawer } from "antd";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { StyledCustomDrawer } from "./CustomDrawer.styles";

function CustomDrawer() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <StyledCustomDrawer>
      <Button type="primary" onClick={showDrawer} className="custom">
        Open
      </Button>
      <Drawer title="Menu" placement="right" onClose={onClose} open={open} className="drawer">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/Cart">Cart</NavLink>
      </Drawer>
    </StyledCustomDrawer>
  );
}

export default CustomDrawer;
