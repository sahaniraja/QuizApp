import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import MenuBook from "@mui/icons-material/MenuBook";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
        <Toolbar>
          <Typography>
            <MenuBook />
          </Typography>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="secondary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab label="Home" LinkComponent={NavLink} to="/" />
            <Tab label="SignUp" LinkComponent={NavLink} to="/signup" />
            <Tab label="SignIn" LinkComponent={NavLink} to="/signin" />
            <Tab label="About Us" LinkComponent={NavLink} to="/aboutus" />
            <Tab label="Contact Us" LinkComponent={NavLink} to="/contactus" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
