import React from "react";
import {
  Typography,
  Card,
  CardContent,
  Container,
  Grid,
  Button,
  CardActions,
  CssBaseline
} from "@mui/material";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();
const modules = [
  {
    name: "UPSC",
    desc: "Union Public Service Commission"
  },
  {
    name: "MPSC",
    desc: "Maharashtra Public Service Commission"
  },
  {
    name: "GPSC",
    desc: "Gujarat Public Service Commission"
  },
  {
    name: "RPSC",
    desc: "Rajasthan Public Service Commission"
  },
  {
    name: "KPSC",
    desc: "Karnataka Public Service Commission"
  }
];
const Homepage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" styles={{ padding: "50" }}>
        <CssBaseline />
        <Grid container spacing={3}>
          {modules.map((module) => {
            return (
              <Grid item sm={3}>
                <Card>
                  <CardContent>
                    <Typography variant="h5">{module.name}</Typography>
                    <Typography variant="subtitle1">{module.desc}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      LinkComponent={Link}
                      to={{
                        pathname: `/quiztype/${module.name}`,
                        data: `${module.desc}`
                      }}
                      variant="contained"
                      color="primary"
                    >
                      Start
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Homepage;
