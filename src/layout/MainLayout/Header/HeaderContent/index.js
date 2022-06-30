// material-ui
import { Box, IconButton, Link, useMediaQuery } from "@mui/material";
import { LoginOutlined, ProfileOutlined } from "@ant-design/icons";

// project import
import Search from "./Search";
import Profile from "./Profile";
import Notification from "./Notification";
import MobileSection from "./MobileSection";

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <>
      {!matchesXs && <Search />}
      {matchesXs && <Box sx={{ width: "100%", ml: 1 }} />}

      <IconButton
        component={Link}
        href="/login"
        disableRipple
        color="secondary"
        title="Login"
        sx={{ color: "text.primary", bgcolor: "grey.100" }}
      >
        <LoginOutlined />
      </IconButton>

      <IconButton
        component={Link}
        href="/register"
        disableRipple
        color="secondary"
        title="Register"
        sx={{ color: "text.primary", bgcolor: "grey.100" }}
      >
        <ProfileOutlined />
      </IconButton>

      <Notification />
      {!matchesXs && <Profile />}
      {matchesXs && <MobileSection />}
    </>
  );
};

export default HeaderContent;
