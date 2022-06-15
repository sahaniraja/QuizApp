import React, { useState } from "react";
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Stack
} from "@mui/material";
import MenuBook from "@mui/icons-material/MenuBook";
import SearchIcon from "@mui/icons-material/Search";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Button size="small">
          <MenuBook />
        </Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          Fun & Earn Quiz
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            size="small"
            LinkComponent={Link}
            to="/signin"
          >
            Sign in
          </Button>
          <Button
            variant="outlined"
            size="small"
            LinkComponent={Link}
            to="/signup"
          >
            Sign up
          </Button>
        </Stack>
      </Toolbar>
      <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
        <Toolbar>
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
