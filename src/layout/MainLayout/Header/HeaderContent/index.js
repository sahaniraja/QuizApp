import { useNavigate } from "react-router-dom";
// material-ui
import {
  Box,
  IconButton,
  Typography,
  Stack,
  Link,
  Button,
  useMediaQuery
} from "@mui/material";
import { LogoutOutlined } from "@ant-design/icons";

// project import
import Transitions from "../../../../components/@extended/Transitions";
import Search from "./Search";
import Profile from "./Profile";
import Notification from "./Notification";
import MobileSection from "./MobileSection";
import { removeUserSession, getToken, getUser } from "../../../../utils/common";
// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const token = getToken();

  const navigate = useNavigate();
  const handleLogout = async () => {
    removeUserSession();
    navigate("/");
  };

  return (
    <>
      {!matchesXs && <Search />}

      {matchesXs && <Box sx={{ width: "100%", ml: 1 }} />}

      {!token && (
        <Box sx={{ flexShrink: 0, ml: 0.75 }}>
          <Button
            component={Link}
            href="/login"
            disableRipple
            color="secondary"
            title="Login"
            sx={{ color: "text.primary", bgcolor: "grey.100" }}
          >
            {/* <LoginOutlined /> */}
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              sx={{ p: 0.5 }}
            >
              <Typography variant="subtitle1">Login</Typography>
            </Stack>
          </Button>
        </Box>
      )}
      {!token && (
        <Box sx={{ flexShrink: 0, ml: 0.75 }}>
          <Button
            component={Link}
            href="/register"
            disableRipple
            color="secondary"
            title="Register"
            sx={{ color: "text.primary", bgcolor: "grey.100" }}
          >
            {/* <ProfileOutlined /> */}
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              sx={{ p: 0.5 }}
            >
              <Typography variant="subtitle1">Register</Typography>
            </Stack>
          </Button>
        </Box>
      )}

      {token && <Notification />}

      {!matchesXs && token && <Profile />}

      {matchesXs && <MobileSection />}

      {matchesXs && token && (
        <Box sx={{ flexShrink: 0, ml: 0.75 }}>
          <IconButton size="large" color="secondary" onClick={handleLogout}>
            <LogoutOutlined />
          </IconButton>
        </Box>
      )}
    </>
  );
};

export default HeaderContent;
