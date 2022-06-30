import { Link } from "react-router-dom";

// material-ui
import { Grid, Stack, Typography } from "@mui/material";

// project import
import AuthResetPassword from "./auth-forms/AuthResetPassword";
import AuthWrapper from "./AuthWrapper";

// ================================|| RESET PASSWORD ||================================ //

const Login = () => (
  <AuthWrapper>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="baseline"
          sx={{ mb: { xs: -0.5, sm: 0.5 } }}
        >
          <Typography variant="h3">Reset Password</Typography>
          {/* <Typography
            component={Link}
            to="/login"
            variant="body1"
            sx={{ textDecoration: "none" }}
            color="primary"
          >
            Already have an account?
          </Typography> */}
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <AuthResetPassword />
      </Grid>
    </Grid>
  </AuthWrapper>
);

export default Login;
